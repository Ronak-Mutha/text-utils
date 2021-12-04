import React from "react";

export default function Textform() {
  return (
      <>
      <div className="container" > 
          <h1 className='mb-4'>TextUtils - word counter, character counter, remove extra spaces</h1>
          <div className="mb-3"> 
          <textarea className="form-control" id="myBox" rows="8"></textarea>
          </div>
          <button  className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
          <button className="btn btn-primary mx-1 my-1" >Convert to Lowercase</button>
          <button  className="btn btn-primary mx-1 my-1" >Clear Text</button>
          <button  className="btn btn-primary mx-1 my-1" >Copy Text</button>
          <button  className="btn btn-primary mx-1 my-1" >Remove Extra Spaces</button>
      </div>
      <div className="container my-3" >
          <h2>Current text summary:</h2>
          <p>Text summary will be shown here</p>

          <h2>Manipulated Text</h2>
          <p>Manipulated text will be shown here</p>
      </div>
      </>
  );
}
