import { useEffect, useState } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/users`);
      const users = await res.json();
      const foundUser = users.find((u) => u.id === parseInt(userId));
      setUser(foundUser);
    };

    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Name: {user.name}</h2>
      <p>ID: {user.id}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  return {
    props: { userId: id }, // Pass user ID to the component
  };
}

export default UserProfile;
