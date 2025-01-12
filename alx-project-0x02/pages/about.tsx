import React from 'react';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Page</h1>
      <div className="flex flex-col items-center gap-4">
        <Button size="small" shape="rounded-sm">
          Small Rounded Button
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Button
        </Button>
        <Button size="large" shape="rounded-full">
          Large Full-Rounded Button
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;