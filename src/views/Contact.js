import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm/Form";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContactForm contactPage />
    </div>
  );
};

export default Contact;
