import React from "react";

type OwnProps = {
  title: string;
  optionOne: string;
  optionTwo: string;
};

const Checkbox: React.FC<OwnProps> = ({ title, optionOne, optionTwo }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <label>
        <input type="checkbox" onClick={() => setChecked(!checked)} />
        {title} {checked ? optionOne : optionTwo}
      </label>
    </div>
  );
};

export default Checkbox;
