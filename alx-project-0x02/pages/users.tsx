import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const formattedData = data.map((user: any) => ({
          name: user.name,
          email: user.email,
          address: {
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
          },
        }));
        setUsers(formattedData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersPage;