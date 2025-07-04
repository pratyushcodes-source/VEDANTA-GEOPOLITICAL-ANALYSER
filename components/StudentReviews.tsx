import React from 'react';
import StarIcon from './icons/StarIcon';

const allReviews = [
    {
      name: 'Amit R.',
      batch: 'UPSC Aspirant',
      rating: 5,
      review: 'This analyser is a game-changer for current affairs preparation. The structured output helps in creating notes effortlessly.',
      avatar: 'https://i.pravatar.cc/100?u=amit',
    },
    {
      name: 'Priya Sharma',
      batch: 'UPSC 2023 Batch',
      rating: 5,
      review: 'The structured approach at Vedanta is unparalleled. The faculty is experienced and provides personal attention, which made a huge difference in my preparation.',
      avatar: 'https://i.pravatar.cc/100?u=priya',
    },
    {
      name: 'Sunita G.',
      batch: 'Working Professional Aspirant',
      rating: 5,
      review: 'As a working aspirant, this tool is a godsend. The SWOT and PEST analysis are incredibly detailed and save me hours of research time.',
      avatar: 'https://i.pravatar.cc/100?u=sunita',
    },
    {
      name: 'Rohan Verma',
      batch: 'UPSC 2023 Batch',
      rating: 5,
      review: 'Vedanta IAS Academy\'s material is comprehensive and up-to-date. This AI tool is another example of their innovative approach to helping students succeed.',
      avatar: 'https://i.pravatar.cc/100?u=rohan',
    },
    {
      name: 'Vikram N.',
      batch: 'UPSC 2024 Candidate',
      rating: 4,
      review: 'Quick, accurate, and comprehensive. The interview questions are a great touch for checking my understanding. Highly recommended!',
      avatar: 'https://i.pravatar.cc/100?u=vikram',
    },
    {
      name: 'Anjali Singh',
      batch: 'UPSC 2022 Batch',
      rating: 4,
      review: 'The regular mock tests and feedback sessions were crucial for my Mains preparation. The environment is competitive yet supportive.',
      avatar: 'https://i.pravatar.cc/100?u=anjali',
    },
  ];


const Rating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

interface Review {
  name: string;
  batch: string;
  rating: number;
  review: string;
  avatar: string;
}

const ReviewCard: React.FC<{ item: Review }> = ({ item }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm transition-transform transform hover:scale-105 h-full flex flex-col border border-gray-200">
      <div className="flex items-center mb-4">
        <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full mr-4 object-cover" />
        <div>
          <p className="font-bold text-gray-800">{item.name}</p>
          <p className="text-sm text-gray-500">{item.batch}</p>
        </div>
      </div>
      <Rating rating={item.rating} />
      <p className="text-gray-600 mt-4 text-sm flex-grow">"{item.review}"</p>
    </div>
);


const StudentReviews: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 rounded-xl shadow-inner">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          What Our Aspirants Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((item, index) => (
            <ReviewCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentReviews;