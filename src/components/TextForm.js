import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState("")
    const handleOnClick = ()=>{
        let upperCase = text.toUpperCase()
        settext(upperCase)
        props.showAlert("changed to uppercase","success")
    }
    const onchange = (event)=>{
        settext(event.target.value)
    }
    const handleLowClick = ()=>{
        let lowerCase = text.toLowerCase()
        settext(lowerCase)
        props.showAlert("changed to lowercase","success")
    }
    const onCopy = ()=>{
        let copy = document.getElementById("myBox")
        navigator.clipboard.writeText(copy.value)
        props.showAlert("copied to clipboard","success")
    }
    const wordFunc = (input)=>{
        if(input.length>0){
            let finalText = input.split(" ").length
            return finalText
        }
        else{
            let finalText = ("0")
            return finalText
        }
    }
    const clearText = ()=>{
        document.getElementById("mybox")
        settext("")
    }
  return (
      <>
      <div className="container" style={{color : props.mode === "dark"?"white" : "black"}}>
    <div className="mb-3">
        <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={onchange} id="myBox" rows="8" style = {{backgroundColor : props.mode === "dark"?"grey" : "white" , color : props.mode === "dark"?"white" : "black"}}></textarea>
    <button className="btn btn-primary my-1 mx-1" onClick={handleOnClick}>Convert to Uppercase</button>
    <button className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary my-1 mx-1" onClick={onCopy}>Copy to Clipboard</button>
    <button className="btn btn-primary my-1 mx-1" onClick={clearText}>Clear Text</button>
    </div>
    </div>
    <div className="container" style={{color : props.mode === "dark"?"white" : "black"}}>
        <h2>Words and alphabets count</h2>
        <p>{wordFunc(text)} words,{text.length} alphabets</p>
        <h3>
            {0.008 * text.split(" ").length} minutes of read
        </h3>
        <h3>Preview</h3>
        <p>{text.length>0?text : "enter something above to preview it here"}</p>
    </div>
    </>
      )
}
