export type TechCategory = 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'TOOLS' | 'AI' | 'IoT';

export interface PersonalInfo {
  name: string;
  initials?: string;
  avatar?: string;
  titles: string[];
  role: string;
  focus: string;
  location: string;
  status: string;
  tagline: string;
  statement: string;
  philosophy: {
    headline: string;
    subheadline: string;
    details: string;
    principles: Array<{ title: string; desc: string }>;
  };
  about: {
    education: string;
    interests: string[];
    technicalFocus: string[];
    careerGoals: string;
    summary: string[];
  };
}

export interface WorldNode {
  id: string;
  title: string;
  tagline: string;
  whatItMeans: string;
  problemsSolved: string[];
  technologies: string[];
  relevantProjects: string[];
  icon: string;
}

export interface SystemFlowStep {
  step: string;
  title: string;
  component: string;
  action: string;
}

export interface CaseStudy {
  problem: string;
  idea: string;
  system: string;
  technology: string[];
  experience: string;
  result: string;
  systemFlow: SystemFlowStep[];
  challenges: Array<{ challenge: string; solution: string }>;
  lessons: string[];
  metricsOrOutputs: Array<{ label: string; value: string }>;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  technologies: string[];
  featuredBadge?: string;
  caseStudy: CaseStudy;
  interactiveType?: 'radar-speed' | 'order-flow' | 'ai-skill-match';
}

export interface TechnologyItem {
  name: string;
  category: TechCategory;
  level: string;
  usageExplanation: string;
  commonPairs: string[];
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  mindset: string;
}

export interface CurrentlyBuildingData {
  project: string;
  status: string;
  focus: string;
  technology: string;
  description: string;
  currentMilestone: string;
  modulesInDevelopment: string[];
  lastUpdated: string;
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  status: 'functional' | 'experimental' | 'prototype';
  type: 'radar-telemetry' | 'prompt-matrix' | 'signal-visualizer' | 'physics-canvas';
}

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  handle: string;
}
