import React from 'react';
import Card from '@/components/common/Card';

const HomePage: React.FC = () => {
  const cardsData = [
    { title: 'Card 1', content: 'This is the content for Card 1.' },
    { title: 'Card 2', content: 'This is the content for Card 2.' },
    { title: 'Card 3', content: 'This is the content for Card 3.' },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dynamic Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;