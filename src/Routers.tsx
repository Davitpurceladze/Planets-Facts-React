import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Mercury from "./pages/Mercury";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="mercury" element={<Mercury />}></Route>
    </Route>
  )
);

function Routers() {
  return <RouterProvider router={router} />;
}

export default Routers;
