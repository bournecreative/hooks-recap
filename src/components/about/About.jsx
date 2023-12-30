import { useContext } from "react";
import { UserContext } from "../../main";

export const About = () => {
  const testContext = useContext(UserContext);

  return (
    <div>
      <h1>About page</h1>
      {testContext}
    </div>
  );
};
