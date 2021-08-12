import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import userRegistration from "./validation/userRegistration";

import { GENDER_ENUM } from "./const";

import "./App.css";

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  gender: GENDER_ENUM;
  developer?: boolean;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<FormValues>({
    resolver: yupResolver(userRegistration),
    defaultValues: {
      age: 99,
    },
    mode: "onTouched",
  });

  return (
    <>
      <h1>Form</h1>
      <form
        className="App"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <label htmlFor="firstName">First name:</label>
        <input {...register("firstName")} id="firstName" />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label htmlFor="lastName">Last name:</label>
        <input {...register("lastName")} id="lastName" />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <label htmlFor="age">Age:</label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
        />
        {errors.age && <p>{errors.age.message}</p>}

        <label htmlFor="email">Email:</label>
        <input {...register("email")} id="email" />
        {touchedFields.email && <p>Why did you touch me</p>}

        <div className="input-wrapper">
          <label htmlFor="gender">Gender:</label>
          <select {...register("gender")} id="gender">
            <option value="">Select...</option>
            <option value={GENDER_ENUM.MALE}>Male</option>
            <option value={GENDER_ENUM.FEMALE}>Female</option>
          </select>
        </div>
        {errors.gender && <p>{errors.gender.message}</p>}

        <div className="input-wrapper">
          <label htmlFor="developer">Are you a developer?</label>
          <input {...register("developer")} id="developer" type="checkbox" />
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default App;
