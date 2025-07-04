import React, { useState, useCallback, useRef } from 'react';
import { AnalysisData } from './types';
import { fetchGeopoliticalAnalysis } from './services/geminiService';
import { generatePdf } from './utils/pdfGenerator';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import StudentReviews from './components/StudentReviews';
import AnalysisDisplay from './components/AnalysisDisplay';
import LandingFeatures from './components/LandingFeatures';

const App: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('SWOT');

  const swotRef = useRef<HTMLDivElement>(null);
  const pestRef = useRef<HTMLDivElement>(null);
  const playersRef = useRef<HTMLDivElement>(null);

  const handleSearch = useCallback(async (searchTopic: string) => {
    if (!searchTopic.trim()) {
      setError('Please enter a topic.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysisData(null);
    setTopic(searchTopic);
    setActiveTab('SWOT'); // Reset to first tab on new search

    try {
      const data = await fetchGeopoliticalAnalysis(searchTopic);
      setAnalysisData(data);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleDownload = useCallback(() => {
    if (analysisData && swotRef.current && pestRef.current && playersRef.current) {
      generatePdf(swotRef.current, pestRef.current, playersRef.current, topic);
    } else {
      alert("Could not download PDF. Ensure all analysis sections are loaded.");
    }
  }, [analysisData, topic]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <p className="text-xl sm:text-2xl text-gray-700 font-light">
            Unlock deep insights into global events. Enter any geopolitical topic to get an instant, UPSC-level detailed analysis powered by AI.
          </p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        
        <div className="mt-8 md:mt-12">
          {isLoading && <Loader />}
          {error && <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>}
          
          {analysisData && !isLoading && (
            <AnalysisDisplay 
              analysisData={analysisData}
              topic={topic}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onDownload={handleDownload}
              refs={{ swotRef, pestRef, playersRef }}
            />
          )}

          {!analysisData && !isLoading && !error && (
            <>
              <LandingFeatures />
              <div className="mt-16">
                <StudentReviews />
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;