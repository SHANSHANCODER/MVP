import React, { useState } from "react";

export default function Savednew(props) {
  const handleDelete = () => {
    let saved = JSON.parse(localStorage.getItem("mysavednews")) || [];
    saved = saved.filter((item) => item !== null);
    saved = saved.filter((item) => item.title !== props.new.title);
    // console.log(
    //   "🚀 ~ file: Savednew.jsx ~ line 9 ~ handleDelete ~ saved",
    //   saved
    // );
    localStorage.setItem("mysavednews", JSON.stringify(saved));
    props.updateSaved();
  };

  return (
    <div className="savedcont">
      <div className="savefirstlinewrap">
        <h4 className="h4">
          <a className="linktext" href={props.new.link} target="_blank">
            {props.new.title.toUpperCase()}
          </a>
        </h4>
        <button className="deletesave" onClick={handleDelete}>
          &#9447;
        </button>
      </div>
      <p className="savedcontent">
        {props.new.content || props.new.description}
      </p>
    </div>
  );
}
