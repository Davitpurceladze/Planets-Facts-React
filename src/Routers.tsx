import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Planet from "./pages/Planet";
import { getPlanetInformation } from "./Hooks/GetPlanetInformation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path=":planetName"
        element={<Planet />}
        loader={async ({ params }) => {
          return getPlanetInformation(params.planetName);
        }}
      ></Route>
    </Route>
  )
);

function Routers() {
  return <RouterProvider router={router} />;
}

export default Routers;
