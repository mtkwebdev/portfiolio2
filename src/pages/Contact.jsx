import React, { useRef } from "react"
import styled from "styled-components"
import Video from "../components/SharedComponents/Backgrounds/Video"
import HomeButton from "../components/SharedComponents/Links/HomeButton"
import contactVideo from "../static/contact.mp4"
import axios from "axios"

const Container = styled.div`
  form{
    display:flex;
    flex-direction: column;
    margin: auto;
    background: rgba(255,255,255,0.8);
    min-width: 200px;
    width: 30vw;
    min-width: 300px;
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
      min-width: 260px;
      width: 80%;
      height: auto;
      outline:none;
      padding: 12px;
      border-radius: 50px;
      border: 0px none;
      border: 2px solid rgba(0,0,0, 0);
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
        border: 2px solid rgba(230,20,0, 1);
        box-shadow:  rgba(230,20,0, 0.5) 0px 0px 1px 5px;
        transition: ease-in-out 0.2s
      }
      .invalidWarning{
        background: rgba(200,10,50, 0.3);
        color: rgba(100,10,50, 1);}
      .validWarning{
        background: rgba(20,100,50, 0.3);
        color: rgba(20,100,50, 0.9);
      }
    textarea{
      margin: 20px auto;
      min-height: 5rem;
      min-width: 260px;
      width: 80%;
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
      width: fit-content;
      padding: 15px;
      border-radius: 50px;
      font-size: 1.2rem;
      border: 0px none;
    }
  }
`

const Message = styled.div`
${'' /* display: none; */}
margin: 10px auto;
width: 100%;
padding: 15px;
border-radius: 5px;
text-align:center;

`

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  let name = '';
  let nameWarning = 'Warning';
  let email = '';
  let emailWarning = 'Warning';
  let message = '';
  let messageWarning = 'Warning';

  function collectInfo(){
    name = nameRef.current.value
    email = emailRef.current.value
    message = messageRef.current.value
    validateInfo()
  }

  function validateInfo(){
    const nameRegex = /^[^\\//??!@??$%^&*_+???????#???????????????\\<>?:;|=.,0-9]{2,}$/
    const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const messageRegex = /^[a-zA-Z0-9\s,.]*$/

    if(name && nameRegex.test(name) === true){ 
      nameRef.current.className = "valid";}
      else{
        nameRef.current.className = "invalid"; console.log('Name error!')
      };

    if(email && emailRegex.test(email) === true){ emailRef.current.className = "valid";}
    else{emailRef.current.className = "invalid"; console.log('email error!')};

    if(message && messageRegex.test(message) === true){ messageRef.current.className = " defaultFont valid";}
    else{messageRef.current.className = "defaultFont invalid"; console.log('Message error!')};
  }


  async function sendInfo(){
    if ((name && email) && message ){
      await axios({
        method: 'post',
        url: 'https://mkportfolio-nodemailer.herokuapp.com/contact', 
        data: {
          name: name,
          email: email,
          message: message
        }
      }).then(res=> {
          if (res.status === "success"){
          console.log("Request Successful")}
          else if(res.status === "fail"){ console.log('Request Failed')}
          else return
        })
          .catch(err=>console.log(err))
    console.log(name, email, message)
    }
  }

  return (
    <Container>
      <HomeButton/>
        <form>
          <Message className="validWarning">{nameWarning}</Message>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Please enter your name here." name="name" onBlur={()=>collectInfo()} ref={nameRef}/>
          <Message className="validWarning">{emailWarning}</Message>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Please leave your email here." name="email" onBlur={()=>collectInfo()} ref={emailRef} />
          <Message className="invalidWarning">{messageWarning}</Message>
          <label htmlFor="message">Message</label>
          <textarea className="defaultFont" placeholder="Please leave your message here." type="text" name="message" onBlur={()=>collectInfo()} ref={messageRef}></textarea>

          {/* <button type="button" onClick={()=>sendInfo()}>Click to Send Me A Message!</button> */}
          <button type="button" onClick={()=>console.log("button clicked")}>Click to Send Me A Message!</button>
        </form>
      {/* <Video src={contactVideo}/> */}
    </Container>
  )
}

export default Contact
