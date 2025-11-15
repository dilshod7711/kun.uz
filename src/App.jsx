import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Detail from "./pages/home/detail/Detail";
import { Context } from "./context";
import Like from "./pages/likes/Like";

const App = () => {
  const [like, setLike] = useState([]);
  return (
    <>
      <Context.Provider value={[like, setLike]}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/like" element={<Like />} />
            <Route path="/posts/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;
