import React, { useState, useEffect } from "react";
import AddTopic from "./AddTopic.jsx";
import Topic from "./Topic.jsx";
import Savednews from "./Savednews.jsx";
import axios from "axios";

export default function App() {
  const [topics, setTopics] = useState(
    JSON.parse(localStorage.getItem("storedtopics")) || []
  );
  const [showAdd, SetShowAdd] = useState(false);
  const [index, setIndex] = useState(0);
  const [mainPage, setMainPage] = useState("main");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    axios
      .post("/api/userdata", res.data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    //setIP(res.data.IPv4)
  };

  useEffect(() => {
    console.log(topics);
  }, [topics]);

  const handleAddTopic = () => {
    SetShowAdd(!showAdd);
  };

  const submitAdd = (val) => {
    SetShowAdd(false);
    let newtopics = topics;
    newtopics.push(val);
    setTopics(newtopics);
    let storedtopics = JSON.parse(localStorage.getItem("storedtopics"));
    //console.log(localStorage.getItem('storedtopics'))
    // console.log(JSON.parse(localStorage.getItem('storedtopics')))
    if (!storedtopics.includes(val)) {
      storedtopics.push(val);
      localStorage.setItem("storedtopics", JSON.stringify(storedtopics));
    }
  };

  const handledelete = (val) => {
    setTopics(val);
  };

  const mainpage = () => {
    if (mainPage) {
      return (
        <div className="topicscontainer">
          {topics === [] ? (
            <div>Add your news topics</div>
          ) : (
            topics.map((topic) => (
              <Topic key={topic} topic={topic} handledelete={handledelete} />
            ))
          )}
        </div>
      );
    } else {
      return <Savednews />;
    }
  };
  return (
    <div>
      {/* <h2 className="title">News Depot</h2> */}
      {/* <div className="topicscontainer">
        {topics===[]? (<div>Add your news topics</div>) : topics.map(topic=>(<Topic key={topic} topic={topic} handledelete={handledelete}/>)) }
        </div> */}
      {mainpage()}
      <button className="addtopics" onClick={handleAddTopic}>
        Add New Topic
      </button>
      <button
        className="savenews"
        onClick={() => {
          setMainPage(!mainPage);
        }}
      >
        My Saved News
      </button>
      <AddTopic showAdd={showAdd} submitAdd={submitAdd} />
    </div>
  );
}
