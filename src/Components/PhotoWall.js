import React from "react";
import Photo from "./Photo";
import PropTyes from "prop-types";

function PhotoWall(props) {
  return (
    <div className="photoGrid">
      {props.posts.map((post, index) => (
        <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

PhotoWall.propTyes = {
  posts: PropTyes.array.isRequired,
  onRemovePhoto: PropTyes.func.isRequired,
};

export default PhotoWall;
