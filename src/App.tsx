import React, { useEffect, useState } from "react";
import "./App.css";
import { Robot } from "./components/Card";
import { CardList } from "./components/CardList";
import Scroll from "./components/Scroll";
import { SearchBox } from "./components/SearchBox";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [robots, setRobots] = useState<Robot[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const robots = await data.json();
      setRobots(robots);
    })();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchHandler={setInputValue} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
