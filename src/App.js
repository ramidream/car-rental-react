import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, Home, VehicleGrid, VehicleView, Booking, NotFound } from "./routes";
import "./main.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/vehicles",
          element: <VehicleGrid />,
        },
        {
          path: "/vehicles/:slug",
          element: <VehicleView />,
        },
        {
          // path: "/vehicles/:slug/booking",
          path: "/vehicles/:slug/booking",
          element: <Booking />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
