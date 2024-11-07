import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import PageNotFound from "../components/PageNotFound";
import Login from "../components/Login";
import Layout from "../components/Layout";

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRouter;
