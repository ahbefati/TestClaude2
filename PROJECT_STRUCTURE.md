# InsightAI - MVP Project Structure

```
insight-ai/
├── public/
│   ├── favicon.ico
│   └── fonts/
│       ├── geist-sans.woff2
│       └── geist-mono.woff2
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Landing Page)
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── upload/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   ├── analyze/
│   │   │   │   └── route.ts
│   │   │   ├── export/
│   │   │   │   ├── pdf/route.ts
│   │   │   │   └── docx/route.ts
│   │   │   └── generate-posts/
│   │   │       └── route.ts
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── upload/
│   │   │   ├── FileUploader.tsx
│   │   │   ├── UploadProgress.tsx
│   │   │   ├── RecentUploads.tsx
│   │   │   └── FilePreview.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardGrid.tsx
│   │   │   ├── KPICard.tsx
│   │   │   ├── ChartContainer.tsx
│   │   │   ├── LineChartComponent.tsx
│   │   │   ├── BarChartComponent.tsx
│   │   │   ├── PieChartComponent.tsx
│   │   │   ├── DataTable.tsx
│   │   │   ├── FilterBar.tsx
│   │   │   └── DateRangeSelector.tsx
│   │   │
│   │   ├── insights/
│   │   │   ├── InsightPanel.tsx
│   │   │   ├── ExecutiveSummary.tsx
│   │   │   ├── KeyFindings.tsx
│   │   │   ├── AnomalyDetection.tsx
│   │   │   └── Recommendations.tsx
│   │   │
│   │   ├── social/
│   │   │   ├── PostGenerator.tsx
│   │   │   ├── ToneSelector.tsx
│   │   │   ├── PostPreview.tsx
│   │   │   └── PlatformTabs.tsx
│   │   │
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Tooltip.tsx
│   │   │
│   │   └── ui/
│   │       ├── ThemeToggle.tsx
│   │       ├── ExportMenu.tsx
│   │       └── MoreActions.tsx
│   │
│   ├── hooks/
│   │   ├── useFileUpload.ts
│   │   ├── useAnalysis.ts
│   │   ├── useDashboard.ts
│   │   ├── useExport.ts
│   │   ├── usePosts.ts
│   │   └── useTheme.ts
│   │
│   ├── store/
│   │   ├── uploadStore.ts
│   │   ├── analysisStore.ts
│   │   └── dashboardStore.ts
│   │
│   ├── utils/
│   │   ├── fileParser.ts
│   │   ├── dataAnalyzer.ts
│   │   ├── chartConfig.ts
│   │   ├── mockData.ts
│   │   ├── validators.ts
│   │   └── formatting.ts
│   │
│   └── types/
│       ├── index.ts
│       ├── analysis.ts
│       ├── dashboard.ts
│       └── insights.ts
│
├── .env.local
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Key Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + CSS Modules
- **Charts**: Recharts
- **State**: Zustand
- **File Parsing**: PapaParse, SheetJS
- **File Export**: jsPDF, docx
- **UI Components**: Custom + Headless UI
- **Animations**: Framer Motion

## Development Setup
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## API Routes
- `POST /api/analyze` - Analyze uploaded data
- `POST /api/export/pdf` - Export dashboard as PDF
- `POST /api/export/docx` - Export insights as DOCX
- `POST /api/generate-posts` - Generate social media posts

## Features Checklist
- ✅ Modern landing page
- ✅ File upload (drag & drop)
- ✅ AI-powered analysis
- ✅ Dynamic dashboard
- ✅ Insight panel
- ✅ Export features
- ✅ Social media generator
- ✅ Dark/Light mode
- ✅ Responsive design
