// import React from "react";

const formValidator = (formData) => {
  const errors = {};

  if (!formData.name) errors.name = "Name field should not be empty";
  if (!formData.email) errors.email = "Email field should not be empty";
  if (!formData.pass) errors.pass = "Password field should not be empty";
  else {
    const passRequirements = [
      { regex: /[A-Z]/, message: "Atleast one uppercase char is required" },
      { regex: /[a-z]/, message: "Atleast one lowercase char is required" },
      { regex: /\d/, message: "Atleast one digit required" },
      { regex: /.{8,}/, message: "atleast 8 chars long" },
    ];
    const unmet = passRequirements
      .filter((req) => !req.regex.test(formData.pass))
      .map((req) => req.message);


    if (unmet.length > 0) errors.pass = unmet.join(",");
  }
  return errors;
};
export default formValidator;
