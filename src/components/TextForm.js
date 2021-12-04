import React, { useState } from "react";

export default function Textform({ showAlert }) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => setText(e.target.value);
  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to uppercase!", "success");
  };
  return (
    <>
      <div className="container">
        <h1 className="mb-4">
          TextUtils - word counter, character counter, remove extra spaces
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={convertToUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Current text summary:</h2>
        <p>Text summary will be shown here</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
