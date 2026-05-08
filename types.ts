// src/types/index.ts

export interface UploadedFile {
  id: string;
  name: string;
  type: 'csv' | 'xlsx' | 'json' | 'pdf';
  size: number;
  uploadedAt: Date;
  data?: Record<string, any>[];
}

export interface DataAnalysis {
  fileId: string;
  fileName: string;
  uploadedAt: Date;
  columns: Column[];
  rowCount: number;
  insights: Insight[];
  summary: DataSummary;
  correlations: Correlation[];
  trends: Trend[];
  anomalies: Anomaly[];
}

export interface Column {
  name: string;
  type: 'number' | 'string' | 'date' | 'boolean';
  sampleValues: any[];
  uniqueCount: number;
  nullCount: number;
  stats?: ColumnStats;
}

export interface ColumnStats {
  min?: number;
  max?: number;
  mean?: number;
  median?: number;
  stdDev?: number;
  quartiles?: number[];
}

export interface DataSummary {
  executiveSummary: string;
  keyMetrics: KeyMetric[];
  dataQuality: DataQuality;
  topInsights: string[];
}

export interface KeyMetric {
  label: string;
  value: string | number;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
}

export interface DataQuality {
  completeness: number;
  accuracy: number;
  consistency: number;
  recommendations: string[];
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  category: 'trend' | 'anomaly' | 'correlation' | 'recommendation';
  severity?: 'low' | 'medium' | 'high';
  confidence: number;
  evidence: string[];
}

export interface Correlation {
  column1: string;
  column2: string;
  strength: number;
  direction: 'positive' | 'negative';
}

export interface Trend {
  column: string;
  direction: 'up' | 'down' | 'stable';
  changePercentage: number;
  period: string;
}

export interface Anomaly {
  row: number;
  column: string;
  value: any;
  severity: 'low' | 'medium' | 'high';
  reason: string;
}

export interface DashboardConfig {
  fileId: string;
  fileName: string;
  filters: Filter[];
  dateRange?: DateRange;
  layout: 'grid' | 'custom';
  charts: ChartConfig[];
}

export interface Filter {
  id: string;
  column: string;
  operator: 'equals' | 'contains' | 'greater' | 'less' | 'between';
  value: any;
  values?: any[];
}

export interface DateRange {
  from: Date;
  to: Date;
}

export interface ChartConfig {
  id: string;
  type: 'line' | 'bar' | 'pie' | 'table' | 'kpi' | 'scatter';
  title: string;
  dataSource: string;
  xAxis?: string;
  yAxis?: string;
  dimensions?: string[];
  measures?: string[];
  options?: Record<string, any>;
}

export interface SocialMediaPost {
  id: string;
  platform: 'linkedin' | 'twitter' | 'instagram';
  tone: 'professional' | 'casual' | 'fun';
  content: string;
  hashtags: string[];
  characterCount: number;
  generatedAt: Date;
}

export interface ExportFormat {
  type: 'pdf' | 'png' | 'docx' | 'json';
  fileName: string;
  timestamp: Date;
}
