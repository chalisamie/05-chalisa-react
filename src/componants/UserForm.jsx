import { useState } from "react";

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", lastName: "", position: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center ml-[150px] space-y-4 w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-3">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="lastName"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="position"
          className="block text-sm font-medium text-gray-700"
        >
          Position
        </label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-20 items-center ml-[380px] px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
    </form>
  );
}

export default UserForm;
