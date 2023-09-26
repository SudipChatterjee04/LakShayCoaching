import React from "react";

const RegistrationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="right-content">
      <div className="top-content">
        <h6>
          Register your seat and <em>get immediate</em> access to Lakhsyam courses
        </h6>
      </div>
      <form id="contact" onSubmit={handleSubmit}>
        {/* Form fields go here */}
      </form>
    </div>
  );
};

export default RegistrationForm;
