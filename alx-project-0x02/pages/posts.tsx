import React from 'react';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Posts</h1>
      </div>
    </>
  );
};

export default PostsPage;