import React from 'react'
import { useState } from 'react'

export default function Textarea(props) {
  const [text, setText] = useState("")

  let styleColor = {
    color: props.modeColor
  }

  let editorColor = {
    backgroundColor: '#baced1'
  }

  let wordCount = text.split(' ').filter(str => str !== '').length

  const changeToUpperCase = () => {
    setText(text.toUpperCase())
    props.showAlert('Converted to Upper Case', 'success', text.toUpperCase())
  }

  const changeToLowerCase = () => {
    setText(text.toLowerCase())
    props.showAlert('Converted to Lower Case', 'success', text.toLowerCase())
  }

  const changeToClearText = () => {
    setText('')
    props.showAlert('Text has been Cleared', 'success')
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleOnCopyText = () => {
    let copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert('Text has been  Copied', 'success', copyText.value)
  }

  return (
    <>
      <div className="mb-3 my-4">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8" style={editorColor}></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2" onClick={changeToUpperCase}>UpCase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={changeToLowerCase}>DownCase</button>
      <button type="button" className="btn btn-primary mx-2" onClick={changeToClearText}>ClearText</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleOnCopyText}>CopyText</button>
      <div className="container my-4">
        <h1 style={styleColor}>Your Text Summary</h1>
        <p style={styleColor}>{wordCount} words and {text.length} characters</p>
        <p style={styleColor}>Reading Time {0.008 * text.split(" ").length} minutes</p>
        <h4 style={styleColor}>Preview: {text}</h4>
      </div>
    </>
  )
}

