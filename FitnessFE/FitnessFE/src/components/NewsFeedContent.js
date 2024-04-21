import React, { useEffect } from "react";
import PostCompose from "./PostCompose";
import PostItem from "./PostItem";
import { Spinner } from "react-bootstrap";
import { getFollowingPosts } from "../feature/followingPost/followingPostSlice";
import { useDispatch, useSelector } from "react-redux";

function NewsFeedContent() {
  const dispatch = useDispatch();
  const storeFollowingPosts = useSelector((state) => state.followingPostReducer.followingPosts);


  useEffect(() => {
    dispatch(getFollowingPosts());
  }, []);

  return (
    <div>
      {/* <h1>NewsFeedContent page</h1> */}
      <PostCompose />
      <div style={{margin:"o auto"}} >
        {storeFollowingPosts !== null ? (
          storeFollowingPosts.map((post) => {
            return (
              <PostItem
                key={post.post.id}
                postId={post.post.id}
                userId={post.user.id}
                firstName={post.user.firstName ||"" }
                lastName={post.user.lastName ||"" }
                content={post.post.content}
                image={post.post.image}
                images={post.post.images}
                loveList={post.post.love}
                shareList={post.post.share}
                commentList={post.post.comment}
                postDate={post.post.createdAt}
              />
            );
          })
        ) : (
          <div className="d-flex justify-content-center align-items-center my-5">
            <Spinner animation="border" variant="success" />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsFeedContent;
