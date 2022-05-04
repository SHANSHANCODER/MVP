import React,{useState} from 'react'


export default function Savednew(props){



  return(
    <div className="savedcont">

        <div className="savefirstlinewrap" >
      <h4 className="h4"><a className="linktext" href={props.new.link} target="_blank">{props.new.title.toUpperCase()}</a></h4>
      <button className="deletesave">&#9447;</button>
      </div>
      <p className="savedcontent">{props.new.content}</p>
    </div>
  )
}
