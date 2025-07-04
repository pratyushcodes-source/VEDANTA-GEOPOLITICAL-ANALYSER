
export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface PESTAnalysis {
  political: string[];
  economic: string[];
  social: string[];
  technological: string[];
}

export interface KeyPlayer {
  name: string;
  description: string;
}

export interface TimelineEvent {
  date: string;
  event: string;
}

export interface AnalysisData {
  swot: SWOTAnalysis;
  pest: PESTAnalysis;
  keyPlayers: KeyPlayer[];
  interviewQuestions: string[];
  timeline: TimelineEvent[];
}
