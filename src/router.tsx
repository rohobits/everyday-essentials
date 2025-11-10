import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "services", element: <Placeholder title="Services" /> },
        { path: "about", element: <Placeholder title="About" /> },
        { path: "contact", element: <Placeholder title="Contact" /> }
      ],
      errorElement: <NotFound />
    }
  ],
  {
    basename: "/everyday-essentials" // <== EXACT repo name, no trailing slash
  }
);
