import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardsData, setCardsData] = useState([
    { title: 'Card 1', content: 'This is the content for Card 1.' },
    { title: 'Card 2', content: 'This is the content for Card 2.' },
    { title: 'Card 3', content: 'This is the content for Card 3.' },
  ]);

  const handleAddCard = (title: string, content: string) => {
    setCardsData([...cardsData, { title, content }]);
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dynamic Cards</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add New Card
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCard}
        />
      </div>
    </>
  );
};

export default HomePage;