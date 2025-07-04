
import React from 'react';
import { AnalysisData, SWOTAnalysis, PESTAnalysis, KeyPlayer, TimelineEvent } from '../types';
import DownloadIcon from './icons/DownloadIcon';
import LightBulbIcon from './icons/LightBulbIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import UsersIcon from './icons/UsersIcon';
import ChatBubbleLeftRightIcon from './icons/ChatBubbleLeftRightIcon';
import CalendarDaysIcon from './icons/CalendarDaysIcon';

interface AnalysisDisplayProps {
  analysisData: AnalysisData;
  topic: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onDownload: () => void;
  refs: {
    swotRef: React.RefObject<HTMLDivElement>;
    pestRef: React.RefObject<HTMLDivElement>;
    playersRef: React.RefObject<HTMLDivElement>;
  };
}

const TABS = [
  { id: 'SWOT', label: 'SWOT Analysis', icon: LightBulbIcon },
  { id: 'PEST', label: 'PEST Analysis', icon: ChartBarIcon },
  { id: 'Players', label: 'Key Players', icon: UsersIcon },
  { id: 'Questions', label: 'Interview Questions', icon: ChatBubbleLeftRightIcon },
  { id: 'Timeline', label: 'Timeline', icon: CalendarDaysIcon },
];

const AnalysisCard: React.FC<{ title: string; color: string; items: string[] }> = ({ title, color, items }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border-t-4" style={{ borderColor: color }}>
        <h3 className="text-xl font-bold mb-4" style={{ color }}>{title}</h3>
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <span className="text-lg mr-3" style={{ color }}>&#8226;</span>
                    <span className="text-gray-700">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const SWOTComponent: React.FC<{ data: SWOTAnalysis; swotRef: React.RefObject<HTMLDivElement> }> = ({ data, swotRef }) => (
    <div ref={swotRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1">
        <AnalysisCard title="Strengths" color="#22c55e" items={data.strengths} />
        <AnalysisCard title="Weaknesses" color="#ef4444" items={data.weaknesses} />
        <AnalysisCard title="Opportunities" color="#3b82f6" items={data.opportunities} />
        <AnalysisCard title="Threats" color="#f97316" items={data.threats} />
    </div>
);

const PESTComponent: React.FC<{ data: PESTAnalysis; pestRef: React.RefObject<HTMLDivElement> }> = ({ data, pestRef }) => (
    <div ref={pestRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1">
        <AnalysisCard title="Political" color="#6366f1" items={data.political} />
        <AnalysisCard title="Economic" color="#14b8a6" items={data.economic} />
        <AnalysisCard title="Social" color="#ec4899" items={data.social} />
        <AnalysisCard title="Technological" color="#6b7280" items={data.technological} />
    </div>
);

const PlayersComponent: React.FC<{ data: KeyPlayer[]; playersRef: React.RefObject<HTMLDivElement> }> = ({ data, playersRef }) => (
    <div ref={playersRef} className="space-y-4 p-1">
        {data.map((player, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-blue-800">{player.name}</h3>
                <p className="text-gray-600 mt-1">{player.description}</p>
            </div>
        ))}
    </div>
);

const QuestionsComponent: React.FC<{ data: string[] }> = ({ data }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Potential Interview Questions</h3>
        <ol className="space-y-4">
            {data.map((q, index) => (
                <li key={index} className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">{index + 1}</span>
                    <p className="text-gray-700">{q}</p>
                </li>
            ))}
        </ol>
    </div>
);

const TimelineComponent: React.FC<{ data: TimelineEvent[] }> = ({ data }) => (
    <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="relative border-l-2 border-blue-200 ml-4">
            {data.map((item, index) => (
                <div key={index} className="mb-8 ml-8">
                    <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white ring-8 ring-white">
                        <CalendarDaysIcon className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{item.date}</h3>
                    <p className="text-base font-normal text-gray-600">{item.event}</p>
                </div>
            ))}
        </div>
    </div>
);

const AnalysisDisplay: React.FC<AnalysisDisplayProps> = ({ analysisData, topic, activeTab, setActiveTab, onDownload, refs }) => {
    return (
        <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-xl shadow-inner">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 capitalize mb-3 sm:mb-0">
                    Analysis: {topic}
                </h2>
                <button
                    onClick={onDownload}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                >
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download Notes (PDF)</span>
                </button>
            </div>

            <div className="mb-6 overflow-x-auto">
                <div className="border-b border-gray-300 flex space-x-1 sm:space-x-2">
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center space-x-2 whitespace-nowrap px-3 py-2 text-sm sm:text-base font-medium rounded-t-lg transition-colors focus:outline-none ${
                                activeTab === tab.id
                                ? 'border-b-2 border-blue-600 text-blue-600 bg-white'
                                : 'text-gray-500 hover:text-blue-600 hover:bg-gray-200'
                            }`}
                        >
                            <tab.icon className="w-5 h-5"/>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-6">
                {activeTab === 'SWOT' && <SWOTComponent data={analysisData.swot} swotRef={refs.swotRef} />}
                {activeTab === 'PEST' && <PESTComponent data={analysisData.pest} pestRef={refs.pestRef} />}
                {activeTab === 'Players' && <PlayersComponent data={analysisData.keyPlayers} playersRef={refs.playersRef} />}
                {activeTab === 'Questions' && <QuestionsComponent data={analysisData.interviewQuestions} />}
                {activeTab === 'Timeline' && <TimelineComponent data={analysisData.timeline} />}
            </div>
        </div>
    );
};

export default AnalysisDisplay;
