import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Topic({ topic, handledelete }) {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(9);

  const [page, setPage] = useState(0);
  const [totalpage, setTotalpage] = useState(1);

  useEffect(() => {
   // console.log("first use effect");
    if (data.length === 0) {
      axiosget();
    }
  }, []);

  useEffect(() => {
    //console.log("second use effect");
   // console.log(index, data, page, totalpage);
    let id = setInterval(() => {
      setIndex(index - 1);
      console.log("🚀 ~ file: Topic.jsx ~ line 23 ~ id ~ (index - 1)", (index - 1))

    }, 60000);
    if (index <= 0) {

      if (page === totalpage) {
      // console.log("🚀 ~ file: Topic.jsx ~ line 29 ~ useEffect ~ totalpage", totalpage)
      // console.log("🚀 ~ file: Topic.jsx ~ line 29 ~ useEffect ~ page", page)

        axiosget();
      } else {
        axiosgetnextpage();
      }
    }
    return () => clearInterval(id);
  }, [index]);

  const axiosgetnextpage = () => {
    axios
      .get("/api/nextpage", { params: { q: topic, page: page } })
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
        setIndex(9);
        setPage(page + 1);
     //   console.log("current page",page)
      })
      .catch((err) => console.log(err));
  };

  const axiosget = () => {
    axios
      .get("/api", { params: { q: topic } })
      .then((res) => {
        console.log(res.data);
        setData(res.data.results);
        setTotalpage(Math.floor(res.data.totalResults / 10));
        setPage(1);
        setIndex(9);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletetopic = () => {
    let localstored = JSON.parse(localStorage.getItem("storedtopics")) || [];
    localstored = localstored.filter((item) => item !== topic);
    // console.log(localstored);
    localStorage.setItem("storedtopics", JSON.stringify(localstored));
    handledelete(localstored);
  };

  const savenews = (e) => {
    e.preventDefault();
    let currentnews = data.filter((item, idx) => index === idx);
    if(currentnews!==null){
      if (!localStorage.getItem("mysavednews")) {
      localStorage.setItem("mysavednews", JSON.stringify(currentnews));
    } else {
      let savednews = JSON.parse(localStorage.getItem("mysavednews"));
      savednews.push(currentnews[0]);
      localStorage.setItem("mysavednews", JSON.stringify(savednews));
    }}

  };

  return (
    <div className="eachCont">
      <div className="topiccontainer">
        <div className="topicbtnwrap">
          <span className="topictitle" onClick={deletetopic}>
            {topic.toUpperCase()}
          </span>
          <button className="savebtn" onClick={savenews}>
            &#9733;
          </button>
        </div>
        <div>
          {data
            .filter((item, idx) => index === idx)
            .map((filtereditem) => (
              <div className="descrpcont"
              key={filtereditem.title}>
                <h4 className="topicdescrip">
                  <a
                    className="linktext"
                    href={filtereditem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    {filtereditem.title.toUpperCase()}
                  </a>
                </h4>
                <div className="contentwrap">
                  <div className="content">
                    {filtereditem.description} key={filtereditem.title}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
