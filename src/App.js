import React from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Category from "./components/Category";
import Layout from "./hocs/Layout";
import { BrowserRouter, Route } from "react-router-dom";

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/category/:id" exact component={Category} />
          <Route path="/blog/:id" exact component={BlogDetail} />
        </Layout>
      </BrowserRouter>
    </div>
  );
};
