import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const FormsEditorsInner = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"], // Remove formatting button
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];
  return (
    <section className='section'>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Quill Editor Default</h5>
              <div>
                <h2>Rich Text Editor</h2>
                <ReactQuill
                  modules={modules}
                  formats={formats}
                  theme='snow'
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormsEditorsInner;
