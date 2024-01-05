import { useContext, useReducer, useState } from "react";
import Button from "../utilities/Button";
import StateContext from "./reserveContext";

export default function ReservaTable() {
  const { state, dispach } = useContext(StateContext);
  const [submitted, isSubmitted] = useState(false);

  function handleFieldChange(field, value) {
    dispach({ type: "Submit", field, value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="p-9 mt-6 text-center sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3 mx-auto max-w-screen-sm"
    >
      <div className="mb-4">
        <label className="block text-base sm:text-xl mb-2">First Name</label>
        <input
          onChange={(e) => handleFieldChange("firstName", e.target.value)}
          type="text"
          className="block w-full border p-2 outline-none text-xs sm:text-base"
        />
      </div>

      <div className="mb-4">
        <label className="block text-base sm:text-xl mb-2">Last Name</label>
        <input
          onChange={(e) => handleFieldChange("secondName", e.target.value)}
          type="text"
          className="block w-full border p-2 outline-none text-xs sm:text-base"
        />
      </div>

      <div className="mb-4">
        <label className="block text-base sm:text-xl mb-2">Email</label>
        <input
          onChange={(e) => handleFieldChange("email", e.target.value)}
          type="email"
          className="block w-full border p-2 outline-none text-xs sm:text-base"
        />
      </div>

      <div className="mb-4">
        <label className="block text-base sm:text-xl mb-2">Phone Number</label>
        <input
          onChange={(e) => handleFieldChange("phoneNumber", e.target.value)}
          type="tel"
          className="block w-full border p-2 outline-none text-xs sm:text-base"
        />
      </div>

      <div className="mb-4">
        <label className="block text-base sm:text-xl mb-2">
          Reservation Time
        </label>
        <select
          onChange={(e) => handleFieldChange("time", e.target.value)}
          className="block w-full border p-2 outline-none text-xs sm:text-base"
        >
          <option value="12:00 PM">12:00 PM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          {/* Add more time options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-base sm:text-xl mb-2">
          Number of Guests
        </label>
        <input
          onChange={(e) => handleFieldChange("numberOfGuests", e.target.value)}
          type="number"
          className="block w-full border p-2 outline-none text-xs sm:text-base"
        />
      </div>

      <div className="mb-8">
        <label className="block text-base sm:text-xl mb-2">
          Additional Requests
        </label>
        <textarea
          onChange={(e) =>
            handleFieldChange("additionalRequest", e.target.value)
          }
          rows="4"
          className="block w-full border p-2 outline-none resize-none text-xs sm:text-base"
        ></textarea>
      </div>

      <Button
        type="submit"
        onClick={() => isSubmitted(true)}
        className="text-xs sm:text-base"
      >
        Reserve Table
      </Button>
    </form>
  );
}
