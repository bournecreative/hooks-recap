import { useContext } from "react";
import { UserContext } from "../../main";

export const Index = () => {
  const getContext = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      {getContext}
    </div>
  );
};
