import React,{useState} from 'react'

export default function AddTopic({showAdd,submitAdd}) {

  const [addKeyword,setAddKeyword]=useState("")

  const handleChange=(val)=>{
   setAddKeyword(val.target.value)
  }
  const handleSubmit=(e)=>{
      e.preventDefault()

      if(!localStorage.getItem("storedtopics")){
          let localstored=[]
          localstored.push(addKeyword)
          localStorage.setItem("storedtopics",JSON.stringify(localstored))
      }
      submitAdd(addKeyword)
  }
  return (
    <div className={`${!showAdd ? "active":""} show`} >
        <div className="addTopicformbox">
        <form onSubmit={handleSubmit} className="addkeywordform">
            <input className="addTopicform" type="text" onChange={handleChange} placeholder="new New keyword" required>
            </input>
            <input className="addTopicBtn" type="submit" placeholder='Fetch news!'>
            </input>
        </form>
        </div>


    </div>
  )
}
