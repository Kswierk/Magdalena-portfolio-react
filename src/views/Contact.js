import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Contact;
