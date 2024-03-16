import Container from "@atoms/Container";
import Input from "@atoms/Input";
import Label from "@atoms/Label";
import React from "react";
import ContactUsInputProps from "./types";

const ContactUsInput: React.FC<ContactUsInputProps> = ({
  id,
  content,
  placeholder,
  classNameLabel,
  classNameInput,
  inputName,
  } :ContactUsInputProps) => {
  return(
    <Container className="px-3 mb-6 md:mb-0">
      <Label content={content} className={classNameLabel} htmlFor={id} />
      <Input 
        id={id}
        placeholder={placeholder}
        className={classNameInput}
        name={inputName}
        />
    </Container>
  )
}

export default ContactUsInput;