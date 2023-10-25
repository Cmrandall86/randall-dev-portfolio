'use client'

import React, { useState } from "react";

import styled from "styled-components";
import Form from "./Form";
import { Textarea, Input, Button } from "@nextui-org/react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Footer({}) {
  const [messageData, setMessageData] = useState({ email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(encode({ "form-name": "emailForm", ...messageData }));
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "emailForm", ...messageData }),
    })
      .then(() => alert("I'll talk to you soon!")).then(()=> setMessageData({email: "", message: "" }))
      .catch((error) => alert(error));
  };

  const handleChange = (e) =>
    setMessageData({ ...messageData, [e.target.name]: e.target.value });

  return (
    <FormWrapper>
      <Form
        onSubmit={handleSubmit}
        name="emailForm"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        mobileWidth={'100%'}
        width={'50%'}
      >
        <p
          as="h3"
          css={{ fontFamily: "Kaushan Script, cursive", fontSize: "2rem" }}
        >
          Get in touch
        </p>
        <p 
          as="p"
          css= {{ lineHeight: '1.2'}}

        >
          I am always looking for new opportunities to grow personally and
          professionally.
        </p>

        <Input
          labelPlaceholder="Email"
          type="email"
          name="email"
          value={messageData.email}
          onChange={handleChange}
          required
        />
        <StyledTextArea
          rows={5}
          label="Leave a message"
          name="message"
          value={messageData.message}
          onChange={handleChange}
          bordered
          labelPlaceholder="Enter a message"
          css={{ borderRadius: 0 }}
          required
        />
        <Button type="submit">Submit Message</Button>
        <input type="hidden" name="form-name" value="emailForm" />
      </Form>
    </FormWrapper>
  );
}

const FormWrapper = styled.div.attrs({
  className: "flex flex-column justify-center items-center",
})`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 40px;
`;

const StyledTextArea = styled(Textarea)`
  .nextui-input-wrapper {
    border-radius: 5px;
  }
`;
const StyledInput = styled(Input)`
  .nextui-input-wrapper {
    border-radius: 5px;
  }
`;
