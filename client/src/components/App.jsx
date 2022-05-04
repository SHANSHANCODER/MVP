import React, {useState, useEffect} from 'react'
import AddTopic from './AddTopic.jsx';
import Topic from './Topic.jsx';

export default function App() {
    const [topics,setTopics]=useState(JSON.parse(localStorage.getItem('storedtopics'))||[]);
    const [showAdd,SetShowAdd]=useState(false)
    const [index, setIndex]=useState(0)

    useEffect(()=>{
    console.log(topics)

    },[topics])
   const handleAddTopic=()=>{
     SetShowAdd(!showAdd)

   }

   const submitAdd=(val)=>{
     SetShowAdd(false)
      let newtopics=topics
      newtopics.push(val)
      setTopics(newtopics)
      let storedtopics=JSON.parse(localStorage.getItem('storedtopics'))
      //console.log(localStorage.getItem('storedtopics'))
     // console.log(JSON.parse(localStorage.getItem('storedtopics')))
      if(!storedtopics.includes(val)){
        storedtopics.push(val)
        localStorage.setItem("storedtopics",JSON.stringify(storedtopics))
      }
   }

   const handledelete=(val)=>{
       setTopics(val)
   }

    return (
      <div>
        <h2>News Depot</h2>
        <div className="topicscontainer">
        {topics===[]? <div>Add your news topics</div> : topics.map(topic=>(<Topic key={topic} topic={topic} handledelete={handledelete}/>)) }
        </div>
        <button className="addtopics"onClick={handleAddTopic}>Add New Topic</button>
        <button >My Saved News</button>
        <AddTopic showAdd={showAdd} submitAdd={submitAdd}/>
      </div>
    )
  }

  