import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "./Auth.module.css";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { singInAction } from "../../../app/authSlice.slice";
import { ERROR_FORM_TEXT } from "../../../utils/appConstans";
import { isEmaiValid } from "../../../utils/utils";
import { authFormErrorSelector } from "../../../utils/selectors";

type AuthFormData = {
  email: string;
  password: string;
  password2: string;
};
const initialState: AuthFormData = {
  email: "",
  password: "",
  password2: "",
};

export const SingIn: React.FC = () => {
  const [formData, setFormData] = useState<AuthFormData>(initialState);
  const [formErrors, setFormErrors] = useState({
    email: false
  });
  const authFormError = useAppSelector(authFormErrorSelector);
  const dispatch = useAppDispatch();
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevState) => ({
      ...prevState,
      email: false
    }));
    // валидация value
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = isEmaiValid(formData.email)
    if(!isEmaiValid){
      setFormErrors((prev) => ({
        ...prev,
        email: true
      }))
    }

    // проверка на валиднось
    const isFormValid = Object.values({
      ...formErrors,
      email: !isEmailValid
    }).every(
      (error) => error === false
    );
    if (isFormValid) {
      const { email, password } = formData;
      dispatch(singInAction({ email: email, password: password }));
      setFormData((prev) => ({
        ...prev,
        email: "",
        password: "",
        password2: "",
      }));
      setFormErrors((prev) => ({
        ...prev,
        email: false
      }));
      
    }
    return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>SingIn</h3>
      <label>
        <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="email"
        className={styled.input}
        onChange={handleChangeInput}
      />
      {formErrors.email && <p>{ERROR_FORM_TEXT.EMAIL_ERROR}</p>}
      </label>
      <label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password again"
          className={styled.input}
          onChange={handleChangeInput}
        />
      </label>

      <button type="submit">SingUp</button>
      {authFormError && <p>{ERROR_FORM_TEXT.NO_TACCOUNT}</p>}
    </form>
  );
};
