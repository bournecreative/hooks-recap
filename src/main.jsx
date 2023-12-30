import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext } from "react";
import App from "./App.jsx";
import { Index } from "./components/index/Index.jsx";
import { About } from "./components/about/About.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export const UserContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext.Provider value="tesing testing one two three">
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);
