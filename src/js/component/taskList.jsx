import React from "react";

import CheckBox from "./checkBox";

const TaskList = (props) => {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  const chk = list.map((item) => (
    <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
  ));

  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  return (
    <div>
      {list.length ? chk : "No tasks"}
      {list.length ? (
        <p>
          <button onClick={onClickRemoveItem}>Delete all done</button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
