import React from "react";
import Label from "@atoms/Label";
import ContactUsTextAreaProps from "./types";
import Container from '@atoms/Container';

const ContactUsTextArea: React.FC<ContactUsTextAreaProps> = ({
  id,
  content,
  placeholder,
  classNameLabel,
  classNameTextArea
  } :ContactUsTextAreaProps) => {
  return(
    <Container className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <Label content={content} className={classNameLabel} htmlFor={id} />
      <textarea
        id={id}
        placeholder={placeholder}
        className={classNameTextArea}
        rows={6}
        name="message"
      />
    </Container>
  )
}

export default ContactUsTextArea;