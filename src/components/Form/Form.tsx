import axios from "axios";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../atoms/Button/Button";
import Error from "../../atoms/Error/Error";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Message from "../Message/Message";
import styles from "./Form.module.scss";

interface IFormInput {
  firstName: string;
  lastName: string;
  telephone: number;
}
const Form: FC = () => {
  const [isMessage, setIsMessage] = useState(false);
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
    setIsMessage(true);
  };

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
            <Message
              type={"danger"}
              textContent={`Some errors occurred, ${errors?.firstName?.message}`}
            />
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
            <Message
              type={"danger"}
              textContent={`Some errors occurred, ${errors?.lastName?.message}`}
            />
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
            <Message
              type={"danger"}
              textContent={`Some errors occurred, ${errors?.telephone?.message}`}
            />
            <Error message={errors?.telephone?.message} />
          </>
        )}
        <Button onClick={handleSubmit(onSubmit)} text={"submit"} />
      </form>
      {isMessage && <Message type={"info"} textContent={"Success! "} />}
    </>
  );
};
export default Form;
