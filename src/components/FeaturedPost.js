import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedPost = () => {
  const [featuredPost, setFeaturedPost] = useState([]);

  useEffect(() => {
    const fetchFeaturedPost = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}blog/featured`
        );
        setFeaturedPost(res.data[0]);
      } catch (err) {}
    };
    fetchFeaturedPost();
  }, []);

  return (
    <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 fst-italic">{featuredPost.title}</h1>
        <p className="lead my-3">{featuredPost.excerpt}</p>
        <p className="lead mb-0">
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="text-white fw-bold"
          >
            Continue reading...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FeaturedPost;
