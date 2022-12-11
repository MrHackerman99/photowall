import React from "react";
import PropTyes from "prop-types";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p> {post.description} </p>
      </figcaption>
      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => {
            props.onRemovePhoto(post);
          }}
        >
          Remove
        </button>
      </div>
    </figure>
  );
}

Photo.propTyes = {
  post: PropTyes.object.isRequired,
  onRemovePhoto: PropTyes.func.isRequired,
};

export default Photo;
