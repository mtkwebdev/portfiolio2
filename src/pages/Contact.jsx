import React, { useRef } from "react"
import styled from "styled-components"
import Video from "../components/SharedComponents/Backgrounds/Video"
import HomeButton from "../components/SharedComponents/Links/HomeButton"
// import contactVideo from "../static/videoDrafts/contact.mp4"
import axios from "axios"

const Container = styled.div`
  form{
    display:flex;
    flex-direction: column;
    margin: 10vh auto;
    background: rgba(255,255,255,0.8);
    min-width: 200px;
    width: 30vw;
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
      width: 80%;
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
      min-width: 80%;
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

// const Warning = styled.div`
// margin: auto;
// height: 20px; 
// width: 50%;
// background: red;
// `

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  let name = '';
  let email = '';
  let message = ''

  function collectInfo(){
    name = nameRef.current.value
    email = emailRef.current.value
    message = messageRef.current.value
    validateInfo()
  }

  function validateInfo(){
    const nameRegex = /^[^\\//±!@£$%^&*_+§¡€#¢§¶•ªº«\\<>?:;|=.,0-9]{2,}$/
    const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const messageRegex = /^[a-zA-Z0-9\s,.]*$/

    if(name && nameRegex.test(name) === true){ nameRef.current.className = "valid";}
    else{nameRef.current.className = "invalid"; console.log('Name error!')};

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
      {/* <Video src={contactVideo}/> */}
    </Container>
  )
}

export default Contact
