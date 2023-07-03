import { createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
// import Header from "../Header";
import Banner from "../Banner";
// import Nav from "../Nav";
import About from "../About";
import Work from "../Work";
import Contact from "../Contact";
import Services from "../Services";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        // {
        //   path: "/",
        //   element: <Header />,
        // },
        {
          path: "home",
          element: <Banner />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "work",
          element: <Work />,
        },
        {
          path: "conatct",
          element: <Contact />,
        },
        
      ],
    },
  ]);
  