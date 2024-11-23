import UserCard from "../../components/UserCard";
import { usePosts } from "../../data-hooks/posts";
import { useUsers } from "../../data-hooks/users";

const CustomDataHooks = () => {
  const [users, loading] = useUsers();
  const [posts] = usePosts();

  return (
    <div>
      {loading && <div>Loading...</div>}
      <div className="grid grid-cols-3">
        {users.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
      <div>
        {posts.map((post) => {
          return (
            <div className="border p-4 my-4">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomDataHooks;
