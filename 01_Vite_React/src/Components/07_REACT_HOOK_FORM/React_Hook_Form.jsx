import React from "react";
import { useForm } from "react-hook-form";
import "../../App.css";

function React_Hook_Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  async function onSubmit(data) {
     //API call ko simulate karte hai
     await new Promise((resolve) => setTimeout(resolve , 5000));
    console.log("Submitting the data ", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          className={errors.firstname ? "input-error" : ""}
          {...register("firstname", {
            required: true,
            minLength: { value: 4, message: "Min Length at least 4" },
            maxLength: { value: 10, message: "Max Length at most 10 " },
          })}
        />

        {errors.firstname && (
          <p className="error-msg"> {errors.firstname.message}</p>
        )}
      </div>
      <br />

      <div>
        <label>Middle Name: </label>
        <input {...register("middlename")} />
      </div>
      <br />

      <div>
        <label>Last Name: </label>
        <input
          {...register("lastname", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "last name is  not as per the rules",
            },
          })}
        />
        {errors.lastname && <p className="error-msg">{errors.lastname.message}</p>}
      </div>
      <br />

      <div>
        <label>DOB</label>
        <input {...register("dob")} />
      </div>
      <input type="submit"  disabled = {isSubmitting} value={isSubmitting ? "Submitting plz wait" : "submit"}/>
    </form>
  );
}

export default React_Hook_Form;
