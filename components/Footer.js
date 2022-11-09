import React, { useState } from "react";

import styled from "styled-components";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default function Footer() {
  const [messageData, setMessageData] = useState({email:'', message:''})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(encode({ "form-name": "emailForm", ...messageData}))
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "emailForm", ...messageData}),
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));
  };

  const handleChange = e => setMessageData({...messageData, [e.target.name]: e.target.value} );


  return (
    <form
      onSubmit={handleSubmit}
      name="emailForm"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={messageData.email} onChange={handleChange}/>
      <label htmlFor="message">Message</label>
      <textarea name="message" value={messageData.message} onChange={handleChange}/>
      <button type="submit" >Submit Message</button>
      <input type="hidden" name="form-name" value="emailForm" />
    </form>
  );
}
