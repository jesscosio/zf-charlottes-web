import React from "react";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <Link className="p-2 link-secondary" to="/blog/category/world">
          World
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/technology">
          Technology
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/agriculture">
          Agriculture
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/environment">
          Environment
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/opinion">
          Opinion
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/culture">
          Culture
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/science">
          Science
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/health">
          Health
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/travel">
          Travel
        </Link>
        <Link className="p-2 link-secondary" to="/blog/category/business">
          Business
        </Link>
      </nav>
    </div>
  );
};

export default CategoryNav;
