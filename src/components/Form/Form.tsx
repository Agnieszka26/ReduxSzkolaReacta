import axios from "axios";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../atoms/Button/Button";
import Error from "../../atoms/Error/Error";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import { useAppDispatch, useAppSelector } from "../../store";
import { setDanger, setInfo } from "../../store/messageReducer/slice";
import Message from "../Message/Message";
import styles from "./Form.module.scss";

interface IFormInput {
  firstName: string;
  lastName: string;
  telephone: number;
}
const Form: FC = () => {
  const { isOpen, type, textContent } = useAppSelector(
    (state) => state.message
  );

  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios.post(process.env.REACT_APP_URL_SEND_FORM!, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(setInfo("Thank you! You have send your details!"));
  };

  useEffect(() => {
    if (errors.firstName) {
      dispatch(setDanger("First Name is required"));
    } else if (errors.lastName) {
      dispatch(setDanger("Last Name is required"));
    } else if (errors.telephone) {
      dispatch(setDanger("Telephone is required"));
    }
  }, [dispatch, errors]);

  return (
    <>
      <form className={styles.form}>
        <Label htmlFor={"firstName"} text={" First Name"} />
        <Input
          placeholder="First Name"
          register={{
            ...register("firstName", {
              required: "First Name is required",
              maxLength: 20,
            }),
          }}
          isError={errors.firstName}
        />
        {errors.firstName && (
          <>
            <Error message={errors?.firstName?.message} />
          </>
        )}
        <Label htmlFor={"lastName"} text={" Last Name"} />
        <Input
          isError={errors.lastName}
          placeholder="Last Name"
          register={{
            ...register("lastName", {
              required: "Last Name is required",
              pattern: /^[A-Za-z]+$/i,
            }),
          }}
        />
        {errors.lastName && (
          <>
            <Error message={errors?.lastName?.message} />
          </>
        )}

        <Label htmlFor={"Telephone"} text={" Telephone"} />
        <Input
          placeholder="654 643 654"
          register={{
            ...register("telephone", { required: "Telephone is required" }),
          }}
          isError={errors.telephone}
        />
        {errors.telephone && (
          <>
            <Error message={errors?.telephone?.message} />
          </>
        )}
        <Button onClick={handleSubmit(onSubmit)} text={"submit"} />
      </form>
      {isOpen && <Message type={type} textContent={textContent} />}
    </>
  );
};
export default Form;
