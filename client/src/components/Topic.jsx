import React, { useState, useEffect, useRef } from "react";
import axios from "axios";




export default function Topic({ topic,handledelete }) {
  const [data, setData] = useState([]);
  const [index,setIndex]=useState(9);
 // const [totalresults,setTotalresults]=useState(0)
  const [page, setPage]=useState(0)
  const [totalpage,setTotalpage]=useState(1)

useEffect(() => {
  console.log("first use effect")
  if (data.length===0){
    axiosget()
  }
// setIndex(9)
},[]);

useEffect(()=>{
  console.log("second use effect")
  console.log(index,data,page,totalpage)
let id=setInterval(() => {
  setIndex(index-1)
}, 10000);
if (index<=0){
 if(page >=totalpage){
axiosget()
 } else {
   axiosgetnextpage()
 }
}
return () => clearInterval(id);
},[index])

const axiosgetnextpage=()=>{
  axios
  .get('/api/nextpage',{params:{q:topic,page:page}})
  .then(res=>{
    console.log(res.data.results)
    setData(res.data.results);
    setIndex(9)
    setPage(page+1)
  })
  .catch(err=>console.log(err))
}

const axiosget=()=>{
  axios
  .get('/api', {params:{q:topic}})
  .then(res=>{
    console.log(res.data)
    setData(res.data.results)
    setTotalpage(Math.floor(res.data.totalResults/10))
    setPage(0)
    setIndex(9)
  })
  .catch(err=>{console.log(err)})
}


  const deletetopic = () => {
    let localstored = JSON.parse(localStorage.getItem("storedtopics")) || [];
    localstored = localstored.filter((item) => item !== topic);
    console.log(localstored)
    localStorage.setItem("storedtopics", JSON.stringify(localstored));
    handledelete(localstored)
  };

  return (
    <div className="eachCont">
      <div className="topiccontainer">
        <span className="topictitle" onClick={deletetopic}>{topic.toUpperCase()}</span>
        <div >
         {data.filter((item,idx)=>
         index===idx).map(filtereditem=>
         (
              <div className="descrpcont">
            <h4 className="topicdescrip">{filtereditem.title.toUpperCase()}</h4>
            <div className="contentwrap">
            <div className="content">{filtereditem.description} key={filtereditem.title}</div>
            </div>
            </div>
            )

          )}
          </div>
      </div>
    </div>
  );
}
