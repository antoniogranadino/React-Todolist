import React, { Fragment } from "react";

const Checkbox = (props) => {
  const {
    onChange,
    data: { id, description, done },
  } = props;
  return (
    <Fragment>
      <label>
        <input
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div>{description}</div>
      </label>
    </Fragment>
  );
};

export default Checkbox;
