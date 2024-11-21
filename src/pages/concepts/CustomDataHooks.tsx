import UserCard from "../../components/UserCard";
import { useUsers } from "../../data-hooks/users";

const CustomDataHooks = () => {
  const [userDetails, loading] = useUsers();
  return (
    <div>
      {loading && <div>Loading...</div>}
      <div className="grid grid-cols-3">
        {userDetails.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </div>
  );
};

export default CustomDataHooks;
