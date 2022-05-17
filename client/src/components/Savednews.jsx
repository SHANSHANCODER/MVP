import React, { useState, useEffect } from "react";
import Savednew from "./Savednew.jsx";

export default function Savednews() {
  const [savedNews, setSavedNews] = useState(
    JSON.parse(localStorage.getItem("mysavednews")) || []
  );

  useEffect(() => {
    //  let saved=
    //  setSavedNews(saved)
    console.log("savednews", savedNews);
    //  savedNews.map(item=>{console.log("map",item)})
  }, []);

  const updateSaved = () => {
    let saved = JSON.parse(localStorage.getItem("mysavednews"));
    // console.log(
    //   "🚀 ~ file: Savednews.jsx ~ line 16 ~ updateSaved ~ saved",
    //   saved
    // );
    setSavedNews(saved);
  };

  return (
    <div>
      {savedNews ? (
        savedNews.map((item) => {if (item!==null){return (
          <Savednew key={item.title} new={item} updateSaved={updateSaved} />
        )}})
      ) : (
        <div>No News Saved Yet</div>
      )}
    </div>
  );
}
