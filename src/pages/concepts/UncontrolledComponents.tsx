import { useRef, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import * as yup from "yup";

const signUpValidator = yup.object().shape({
  userName: yup.string().required().min(3),
  userEmail: yup.string().email(),
  userPassword: yup.string().min(6),
});

const verifyFields = (data) => {
  const { userName, userEmail, userPassword } = data;
  const errors = [];
  if (!userName) {
    errors.push({
      field: "userName",
      message: "userName should not be empty",
    });
  } else {
    if (userName.length < 3) {
      errors.push({
        field: "userName",
        message: "userName should be at least 3 characters long",
      });
    }
  }
  if (!userEmail) {
    errors.push({
      field: "userEmail",
      message: "userEmail should not be empty",
    });
  }
  if (!userPassword) {
    errors.push({
      field: "userPassword",
      message: "userPassword should not be empty",
    });
  } else {
    if (userPassword.length < 6) {
      errors.push({
        field: "userPassword",
        message: "userPassword should be at least 6 characters long",
      });
    }
    for (let i = 0; i < userPassword.length; i++) {
      let char = userPassword[i];
      if ('~!@#$%^&*()-_+{}:<>?"'.includes(char)) {
        continue;
      }
      if (i === userPassword.length - 1) {
        errors.push({
          field: "userPassword",
          message: "userPassword should contain atleast one special character",
        });
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(JSON.stringify(errors));
  }

  return true;
};

const UncontrolledComponents = () => {
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useLocalStorage("userData1", {});
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = formRef.current;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());
    try {
      // verifyFields(data);
      signUpValidator.validateSync(data, {
        abortEarly: false,
      });
    } catch (e) {
      console.log(e);
      // setErrors(JSON.parse(e.message));

      return;
    }
    setForm(data);
  };

  console.log(errors);
  return (
    <div>
      {/* user details form */}
      initial data is {
        JSON.stringify(form)
      }
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">User Details Form</h1>
        <form
          ref={formRef}
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit}
        >
          <label>
            Name:
            <input
              type="text"
              name="userName"
              className="border border-gray-300 p-2 rounded-md"
            />
          </label>
          {errors?.find((error) => error.field === "userName")?.message || ""}
          <label>
            Email:
            <input
              type="email"
              name="userEmail"
              className="border border-gray-300 p-2 rounded-md"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="userPassword"
              className="border border-gray-300 p-2 rounded-md"
            />
          </label>
          <div className="text-red-500">
            {errors?.find((error) => error.field === "userPassword")?.message ||
              ""}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UncontrolledComponents;
