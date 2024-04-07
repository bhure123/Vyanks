import React, { useState } from 'react';

export default function TextForm(props) {
  const [text , setText] = useState('Enter Text Here')
  

   const HandleUpClick =()=>{
     // console.log("Upper was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase", "success");
   }

   const HandleLoClick =()=>{
    // console.log("Upper was clicked" + text);
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to Lowercase", "success");
  }

   const HandleOnChange = (event)=>{
      //console.log("On change ");
      setText(event.target.value);
      props.showAlert("Converted to uppercase", "success");
   }
   
   
  
   
  return (
    <>
    <div className="container" style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
     
<div className="mb-3">
  <label htmlFor="MyBox" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={HandleOnChange} style={{color: props.mode ==='dark' ? 'white' : 'black',background:props.mode ==='dark' ? 'grey' : 'white'}}id="MyBox" rows="10"></textarea>
</div>
<button className='btn btn-primary mx-3' onClick={HandleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary' onClick={HandleLoClick}>Convert to LowerCase</button>

      
    </div>
    <div className="container my-3"style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
      <h2> Your text summary</h2>
      <p> {text.split(" ").length }words and {text.length}character</p>
      <p>{0.08 * text.split(" ").length} Minute Read </p>
      <h2> Preview </h2>
      <p>{text.length>0?text:'Enter something in textbox above preview it  '}</p>

    </div>
    </>

  )
}
