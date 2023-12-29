import { useState } from "react";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  return (
    <>
      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
          type="password"
          name="password"
        />
      </div>
    </>
  );
};
