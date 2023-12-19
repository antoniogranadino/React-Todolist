import React, { useState } from "react";

import FormTodo from "./formTodo";
import TaskList from "./taskList";

const Home = () => {
  const [list, setList] = useState([]);

  const handleAddItems = (addItem) => {
    setList([...list, addItem]);
  };

  return (
    <>
      <div className="Container">
        <FormTodo handleAddItems={handleAddItems} />
        <TaskList list={list} setList={setList} />
      </div>
    </>
  );
};

export default Home;
