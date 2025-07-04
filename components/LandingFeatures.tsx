import React from 'react';
import LightBulbIcon from './icons/LightBulbIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import UsersIcon from './icons/UsersIcon';
import ChatBubbleLeftRightIcon from './icons/ChatBubbleLeftRightIcon';

const features = [
    {
        icon: LightBulbIcon,
        title: "SWOT Analysis",
        description: "Get automated Strengths, Weaknesses, Opportunities, and Threats for any topic.",
        color: "text-green-500",
        bgColor: "bg-green-100"
    },
    {
        icon: ChartBarIcon,
        title: "PEST Analysis",
        description: "Understand the Political, Economic, Social, and Technological factors.",
        color: "text-indigo-500",
        bgColor: "bg-indigo-100"
    },
    {
        icon: UsersIcon,
        title: "Key Players",
        description: "Identify all stakeholders, including countries, leaders, and organizations.",
        color: "text-blue-500",
        bgColor: "bg-blue-100"
    },
    {
        icon: ChatBubbleLeftRightIcon,
        title: "Interview Questions",
        description: "Prepare with UPSC-style interview questions generated from the topic.",
        color: "text-pink-500",
        bgColor: "bg-pink-100"
    }
];

const LandingFeatures: React.FC = () => {
    return (
        <div className="mt-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Your Complete Analysis Toolkit</h2>
                <p className="mt-3 text-lg text-gray-600">Everything you need to master geopolitical topics.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
                        <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full ${feature.bgColor} shadow-md`}>
                             <feature.icon className={`h-8 w-8 ${feature.color}`} />
                        </div>
                        <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingFeatures;
