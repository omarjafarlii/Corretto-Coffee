import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import PublicLayout from "../Layouts/PublicLayout";
import Home from "../Pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </>,
  ),
);
