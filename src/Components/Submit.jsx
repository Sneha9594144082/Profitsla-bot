import React, { useState } from "react";

function Submit() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // your form submission code here
    setSubmitted(true);
  };

  return (
    <>
      {/* your form code here */}
      <button
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
          submitted ? "opacity-50 cursor-not-allowed" : ""
        }`}
        type="submit"
        disabled={submitted}
      >
        {submitted ? "Submitted" : "Submit"}
      </button>
    </>
  );
}

export default Submit;