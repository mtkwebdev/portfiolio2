import React, { useState, useRef } from "react"
import styled from "styled-components"
import Video from "../components/SharedComponents/Backgrounds/Video"
import HomeButton from "../components/SharedComponents/Links/HomeButton"
import contactVideo from "../static/videoDrafts/contact.mp4"
import '../styles'

const Container = styled.div`
  form{
    display:flex;
    flex-direction: column;
    margin: 10vh auto;
    background: rgba(255,255,255,0.8);
    width: 50vw;
    padding: 50px 20px;
    font-size: 1.2rem;
    border-radius: 20px;
    label{
      margin: 0px auto 0px auto;
      color: coal;
      font-weight: 600;
      font-size: 1.5rem;
    }
    input{
      margin: 20px auto;
      width: 50%;
      height: auto;
      outline:none;
      padding: 12px;
      border-radius: 50px;
      border: 0px none;
      font-size: 1.2rem;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px inset;
      transition: ease-in-out 0.2s
    }
      .valid{
        border: 2px solid rgba(0,200,100, 1);
        box-shadow:  rgba(0,200,100, 0.5) 0px 0px 1px 5px;
        transition: ease-in-out 0.2s
      }
      .invalid{
        box-shadow:  rgba(230,20,0, 0.5) 0px 0px 1px 5px;
        transition: ease-in-out 0.2s
      }
    textarea{
      margin: 20px auto;
      min-height: 5rem;
      min-width: 50%;
      max-width: 80%;
      width: 50%;
      height: auto;
      outline:none;
      padding: 30px 30px;
      border-radius: 20px;
      font-size: 1.2rem;
      border: 0px none;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px inset;
    }
    button{ 
      margin: auto;
      width: 50%;
      padding: 15px;
      border-radius: 50px;
      font-size: 1.2rem;
      border: 0px none;
    }
  }
`

const Warning = styled.div`
margin: auto;
height: 20px; 
width: 50%;
background: red;
`

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  let name = '';
  let email = '';
  let message = ''

  function collectInfo(){
    name = {key: nameRef.current.name, value: nameRef.current.value}
    email = {key:emailRef.current.name, value:emailRef.current.value}
    message = {key: messageRef.current.name, value: messageRef.current.value}
    validateInfo()
  }

  function validateInfo(){
    const nameRegex = /^[^\\//±!@£$%^&*_+§¡€#¢§¶•ªº«\\<>?:;|=.,0-9]{2,}$/
    const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const messageRegex = /^[a-zA-Z0-9\s,.]*$/
    
    if(name.value  && nameRegex.test(name.value) === true){ nameRef.current.className = "valid";}
    else{nameRef.current.className = "invalid"; console.log('Name error!')};

    if(email.value  && emailRegex.test(email.value) === true){ emailRef.current.className = "valid";}
    else{emailRef.current.className = "invalid"; console.log('email error!')};

    if(message.value  && messageRegex.test(message.value) === true){ messageRef.current.className = " defaultFont valid";}
    else{messageRef.current.className = "defaultFont invalid"; console.log('Message error!')};

  }

  async function sendInfo(){
      if((name && email) && message !== ''){
        console.log('sending infomation!')
        // console.log(name.key, name.value)
        console.log(JSON.stringify([name,email,message])
        // const res = await fetch("https://mkportfolio-nodemailer.herokuapp.com/contact",{
        //   method: "POST",
        //   headers: {"Content-type":"application/json"},
        //   body: JSON.stringify({contact}),
        // })
        // .then(res=> res.json())
        // .then(async (res) => {
        //   const resData = await res;
        //   console.log(resData);
        //   if (resData.status === "success") {
        //     alert("Message Sent");
        //   } else if (resData.status === "fail") {
        //     alert("Message failed to send");
        //   }
        // })
        } else {
          console.log("incomplete contact form!")
          }
  }

  return (
    <Container>
      <HomeButton/>
        <form>
          {/* <Warning/> */}
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Please enter your name here." name="name" onBlur={()=>collectInfo()} ref={nameRef}/>
          {/* <Warning/> */}
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Please leave your email here." name="email" onBlur={()=>collectInfo()} ref={emailRef} />
          {/* <Warning/> */}
          <label htmlFor="message">Message</label>
          <textarea className="defaultFont" placeholder="Please leave your message here." type="text" name="message" onBlur={()=>collectInfo()} ref={messageRef}></textarea>

          <button type="button" onClick={()=>sendInfo()}>Click to Send Me A Message!</button>
        </form>
      <Video src={contactVideo}/>
    </Container>
  )
}

export default Contact
