import React, { ChangeEvent, FormEvent, useState } from "react";
import styled from "./Auth.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppDispatch } from "../../app/hook";
import { singInAction } from "../../app/authSlice.slice";

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
  const [formErrors, setFormErrors] = useState(initialState);
  const dispatch = useAppDispatch();
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setFormErrors((prevState) => ({
      ...prevState,
      email: "",
      password: "",
      password2: "",
    }));
    // валидация value
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // проверка на валиднось
    const isFormValid = Object.values(formErrors).every(
      (error) => error === ""
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
        email: "",
        password: "",
        password2: "",
      }));
    }
    return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>SingIn</h3>
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="email"
        className={styled.input}
        onChange={handleChangeInput}
      />

      <label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="password again"
          className={styled.input}
          onChange={handleChangeInput}
        />
        {formErrors.password2 && <p>passwords don't match</p>}
      </label>

      <button type="submit">SingUp</button>
    </form>
  );
};
