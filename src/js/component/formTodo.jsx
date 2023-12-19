import React, { useState } from "react";

const FormTodo = (props) => {
  const { handleAddItems } = props;
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddItems({
      done: false,
      id: (+new Date()).toString(),
      description,
    });

    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button disabled={description ? "" : "disabled"}>Add</button>
      </div>
    </form>
  );
};

export default FormTodo;
