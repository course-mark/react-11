import { useRef } from "react";

const UncontrolledComponents = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = formRef.current;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    const stringifiedData = JSON.stringify(data);

    localStorage.setItem("userData", stringifiedData);
  };
  return (
    <div>
      {/* user details form */}
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
