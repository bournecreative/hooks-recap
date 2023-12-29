import { useEffect, useState } from "react";

export const UseEffectExample1 = () => {
  const [{ fName, lName }, setValue] = useState({ fName: "", lName: "" });

  useEffect(() => {
    console.log("rendered");
    return () => console.log("unmounted");
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEl = e.target;
    const formsData = new FormData(formEl);
    const val1 = formsData.get("fName");
    const val2 = formsData.get("lName");
    if (val1.length < 3 && val2.length < 3) return;
    setValue((c) => ({ ...c, fName: val1, lName: val2 }));
    formEl.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fName" />
        <input type="text" name="lName" />
        <button type="submit">Update</button>
      </form>
      <div>fName:{fName}</div>
      <div>lName: {lName}</div>
    </>
  );
};
