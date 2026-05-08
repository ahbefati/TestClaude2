// src/components/providers.tsx

'use client';

import { useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize theme
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return <>{children}</>;
}

// src/utils/mockData.ts

export const mockAnalysisData = {
  fileName: 'sales_data_2024.csv',
  uploadedAt: new Date(),
  columns: [
    {
      name: 'Date',
      type: 'date' as const,
      uniqueCount: 365,
      nullCount: 0,
    },
    {
      name: 'Product',
      type: 'string' as const,
      uniqueCount: 12,
      nullCount: 2,
    },
    {
      name: 'Sales',
      type: 'number' as const,
      uniqueCount: 450,
      nullCount: 0,
      stats: {
        min: 100,
        max: 50000,
        mean: 4829,
        median: 3500,
        stdDev: 8230,
      },
    },
  ],
  rowCount: 1245,
  summary: {
    executiveSummary:
      'Your dataset shows strong growth with a 45% increase over the past 6 months.',
    topInsights: [
      'Electronics category leads with 45% market share',
      'Strong upward trend in Q4',
      'Consistent month-over-month growth',
    ],
  },
  correlations: [
    {
      column1: 'Marketing Spend',
      column2: 'Sales',
      strength: 0.87,
      direction: 'positive' as const,
    },
    {
      column1: 'Inventory Level',
      column2: 'Sales',
      strength: 0.65,
      direction: 'positive' as const,
    },
  ],
  trends: [
    {
      column: 'Sales',
      direction: 'up' as const,
      changePercentage: 45,
      period: 'Last 6 months',
    },
  ],
  anomalies: [
    {
      row: 156,
      column: 'Sales',
      value: 45000,
      severity: 'high' as const,
      reason: 'Unusual spike detected',
    },
  ],
};

// src/utils/validators.ts

export function validateEmail(email: string): boolean {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

export function validateFileSize(size: number, maxSize: number): boolean {
  return size <= maxSize;
}

export function validateFileType(
  fileName: string,
  allowedTypes: string[]
): boolean {
  const extension = '.' + fileName.split('.').pop()?.toLowerCase();
  return allowedTypes.includes(extension);
}

// src/utils/formatting.ts

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function formatNumber(value: number, decimals = 2): string {
  return value.toFixed(decimals);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(d);
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(d);
}

// src/hooks/useTheme.ts

import { useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark');
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return { isDark, toggleTheme };
}

// src/store/uploadStore.ts

import { create } from 'zustand';

interface Upload {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: Date;
}

interface UploadStore {
  uploads: Upload[];
  addUpload: (upload: Upload) => void;
  removeUpload: (id: string) => void;
  clearUploads: () => void;
}

export const useUploadStore = create<UploadStore>((set) => ({
  uploads: [],
  addUpload: (upload) =>
    set((state) => ({
      uploads: [upload, ...state.uploads],
    })),
  removeUpload: (id) =>
    set((state) => ({
      uploads: state.uploads.filter((u) => u.id !== id),
    })),
  clearUploads: () => set({ uploads: [] }),
}));

// src/store/dashboardStore.ts

import { create } from 'zustand';

interface DashboardStore {
  currentFileId: string | null;
  setCurrentFile: (fileId: string) => void;
  clearCurrentFile: () => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  currentFileId: null,
  setCurrentFile: (fileId) => set({ currentFileId: fileId }),
  clearCurrentFile: () => set({ currentFileId: null }),
}));
