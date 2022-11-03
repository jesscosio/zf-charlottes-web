import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../util/util";

const BlogDetail = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const slug = props.match.params.id;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}blog/${slug}`
        );

        setPost(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    fetchData();
  }, [props.match.params.id]);

  return (
    <div className="container mt-3">
      <h1 className="display-2">{post.title}</h1>
      <h2 className="text-muted mt-3">
        Category: {capitalizeFirstLetter(post.category)}
      </h2>
      <h4>
        {post.month} {post.day}
      </h4>
      <div
        className="mt-5 mb-5"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <hr />
      <p className="lead mb-5">
        <Link className="font-weight-bold" to="/blog">
          Back to Blog
        </Link>
      </p>
    </div>
  );
};

export default BlogDetail;
