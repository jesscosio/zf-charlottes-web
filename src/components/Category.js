import React, { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../util/util";
import CategoryNav from "./CategoryNav";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const category = props.match.params.id;
    setCurrentCategory(capitalizeFirstLetter(category));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const fetchData = async () => {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_API_URL}blog/category`,
          { category },
          config
        );

        setPosts(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    fetchData();
  }, [props.match.params.id]);

  const getCategoryBlogs = () => {
    let list = [];
    let result = [];

    posts.map((post) => {
      const thumbnailLink = `${process.env.REACT_APP_BASE_MEDIA_URL}${post.thumbnail}`;
      return list.push(
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {capitalizeFirstLetter(post.category)}
            </strong>
            <h3 className="mb-0">{post.title}</h3>
            <div className="mb-1 text-muted">
              {post.month}
              {post.day}
            </div>
            <p className="card-text mb-auto">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img width="200" height="250" src={thumbnailLink} alt="thumbnail" />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }
    return result;
  };

  return (
    <div className="container mt-3">
      <h3 className="display-4">{currentCategory}</h3>
      <CategoryNav />
      {getCategoryBlogs()}
    </div>
  );
};

export default Category;
