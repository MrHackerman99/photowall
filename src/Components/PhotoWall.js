import React from "react";
import Photo from "./Photo";
import PropTyes from "prop-types";
import { Link } from "react-router-dom";
//anchor tag, href attribute

function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        Click Me
      </Link>
      <div className="photoGrid">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

PhotoWall.propTyes = {
  posts: PropTyes.array.isRequired,
  onRemovePhoto: PropTyes.func.isRequired,
};

export default PhotoWall;
