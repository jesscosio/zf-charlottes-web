import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../util/util";
import CategoryNav from "./CategoryNav";
import FeaturedPost from "./FeaturedPost";

const Blog = () => {
  const [posts, setPosts] = useState([]);
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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}blog/`);
        setPosts(res.data);
      } catch (err) {}
    };
    fetchPosts();
  }, []);

  const getPosts = () => {
    let postList = [];
    let result = [];

    posts.map((blogPost) => {
      return postList.push(
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {capitalizeFirstLetter(blogPost.category)}
            </strong>
            <h3 className="mb-0">{blogPost.title}</h3>
            <div className="mb-1 text-muted">
              {blogPost.month}
              {blogPost.day}
            </div>
            <p className="card-text mb-auto">{blogPost.excerpt}</p>
            <Link to={`/blog/${blogPost.slug}`} className="stretched-link">
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={blogPost.thumbnail}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < postList.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{postList[i]}</div>
          <div className="col-md-6">
            {postList[i + 1] ? postList[i + 1] : null}
          </div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="container">
      <CategoryNav />
      <FeaturedPost />

      {getPosts()}
    </div>
  );
};

export default Blog;
