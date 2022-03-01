import React, { useState } from "react"
import styled from "styled-components"
import Video from "../components/SharedComponents/Backgrounds/Video"
import HomeButton from "../components/SharedComponents/Links/HomeButton"
import contactVideo from "../static/videoDrafts/contact.mp4"
import axios from 'axios'

const Container = styled.div`
  form{
    display:flex;
    flex-direction: column;
    margin: 10vh auto;
    background: rgba(255,255,255,0.5);
    width: 50vw;
    padding: 20px;
    font-size: 2rem;
    label{
      margin:auto;
    }
    input{
      margin: 20px auto;
      width: 50%;
      height: 4rem;
      outline:none;
      padding: 10px;
      font-size: 1.5rem;
    }
    textarea{
      margin: 20px auto;
      width: 50%;
      height: 30vh;
      ${"" /* resize:none; */}
      outline:none;
      font-size: 1.5rem;
    }
  }

`


function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  })

  function collectInfo(e){
    setContact((contact)=>({...contact, [e.target.name]: e.target.value}))
    console.log(contact)
  }

  function sendInfo(){
      if((contact.name && contact.email) && contact.message !== ""){
        console.log('send info!')
        } else {console.log("no info to send!")
              return
              }
  }

  return (
    <Container>
      <HomeButton/>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={(e)=>collectInfo(e)} />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={(e)=>collectInfo(e)} />

          <label htmlFor="message">Message:</label>
          <textarea className="defaultFont" type="text" name="message" onChange={(e)=>collectInfo(e)}></textarea>

          <button type="button" onClick={()=>sendInfo()}>tings</button>
        </form>
      <Video src={contactVideo}/>
    </Container>
  )
}

export default Contact
