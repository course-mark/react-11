import React from "react";
import { usePosts } from "../data-hooks/posts";
import { useGreetings } from "../data-hooks/utils";

const Posts = () => {
  const [posts] = usePosts();
  const greeting = useGreetings();
  return (
    <div>
      <div className="text-9xl">{greeting}</div>
      {posts.map((post) => {
        return (
          <div className="border p-4 my-4">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
// const post = {"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}
