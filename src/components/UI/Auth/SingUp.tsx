import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "./Auth.module.css";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { addUserAction } from "../../../app/authSlice.slice";
import { formettedErrorText, isEmaiValid } from "../../../utils/utils";
import { authFormErrorSelector } from "../../../utils/selectors";
import { ERROR_FORM_TEXT } from "../../../utils/appConstans";

type AuthFormData = {
  email: string;
  password: string;
  password2: string;
};

type ErrorType = {
  isPassMatch: boolean;
  isEmailInvalid: boolean;
  isPasswordTooShort: boolean;
};

export const SingUp: React.FC = () => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
    password2: "",
  });
  const [formErrors, setFormErrors] = useState<ErrorType>({
    isPassMatch: false,
    isEmailInvalid: false,
    isPasswordTooShort: false,
  });
  const dispatch = useAppDispatch();
  const authFormError = useAppSelector(authFormErrorSelector);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      isPassMatch: false,
      isEmailInvalid: false,
      isPasswordTooShort: false,
    }));
    // валидация value
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passwordsMatch = formData.password === formData.password2;
    const passwordTooShort = formData.password.length >= 5;
    const emailValidet = isEmaiValid(formData.email);
    // Проверка на валидность
    if (!passwordsMatch) {
      setFormErrors((prev) => ({ ...prev, isPassMatch: true }));
    }
    if (!passwordTooShort) {
      setFormErrors((prev) => ({ ...prev, isPasswordTooShort: true }));
    }
    if (!emailValidet) {
      setFormErrors((prev) => ({
        ...prev,
        isEmailInvalid: true,
      }));
    }

    const isValid = Object.values({
      ...formErrors,
      isPassMatch: !passwordsMatch,
      isPasswordTooShort: !passwordTooShort,
      isEmailInvalid: !emailValidet,
    }).every((item) => item === false);

    if (isValid) {
      dispatch(
        addUserAction({ email: formData.email, password: formData.password })
      );
      setFormData((prev) => ({
        ...prev,
        email: "",
        password: "",
        password2: "",
      }));
      setFormErrors((prev) => ({
        ...prev,
        passError: "",
      }));
    }
    return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sing Up</h3>
      <label>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="email"
          className={styled.input}
          onChange={handleChangeInput}
        />
        {formErrors.isEmailInvalid && <p>{ERROR_FORM_TEXT.EMAIL_ERROR}</p>}
      </label>

      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="password"
        className={styled.input}
        onChange={handleChangeInput}
      />
      <label>
        <input
          type="password"
          name="password2"
          value={formData.password2}
          placeholder="password again"
          className={styled.input}
          onChange={handleChangeInput}
        />
        {formErrors.isPassMatch && <p>{ERROR_FORM_TEXT.PASS_NOT_MATCH}</p>}
        {formErrors.isPasswordTooShort && (
          <p>{ERROR_FORM_TEXT.PASS_LENGTH_LESS}</p>
        )}
      </label>

      <button type="submit">SingUp</button>
      {authFormError && <p>{formettedErrorText(authFormError)}</p>}
    </form>
  );
};
