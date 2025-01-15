import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact } from "./Pages/Contact";
import { AppLayout } from "./components/layout/AppLayout";

import './index.css'
const App = () => {

    const router = createBrowserRouter([
      {
        path:"/",
        element:<AppLayout />,
        children: [
          {
            path:"/",
            element:<Home />
          },
          {
            path:"/about",
            element:<About />
          },
          {
            path:"/movie",
            element:<Movie />
          },
          {
            path:"/contact",
            element:<Contact />
          },
        ]
      },
     
    ]);

    

    // const router = createBrowserRouter(
    //   createRoutesFromChildren(
    //     <Route>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />}/>
    //       <Route path="/movie" element={<Movie />} />
    //       <Route path="/contact" element={<Contact/>}/>
    //     </Route>
    //   )
    // );

    //old one

  return <RouterProvider router={router} />;
}

export default App;