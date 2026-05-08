# InsightAI - MVP Documentation

A modern, premium AI-powered data analysis platform built with Next.js, React, and TailwindCSS.

## 🎯 Overview

InsightAI is a web application that enables users to:
- Upload datasets (CSV, Excel, JSON, PDF)
- Get automatic AI-powered analysis and insights
- View interactive dashboards with professional visualizations
- Generate social media posts from insights
- Export data in multiple formats

## 🚀 Features

### ✅ Core Features Implemented
- **Modern Landing Page** - Beautiful hero section with features overview
- **Drag & Drop Upload** - Intuitive file upload with validation
- **AI Analysis Engine** - Mock AI analysis with professional insights
- **Interactive Dashboard** - KPI cards, charts, tables, and filters
- **AI Insights Panel** - Executive summary, findings, anomalies, recommendations
- **Social Media Generator** - LinkedIn, Twitter, Instagram post generation
- **Export Features** - Export as PDF, PNG, DOCX, CSV
- **Dark/Light Mode** - Full theme support
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Framer Motion interactions

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Recharts** - Chart library
- **Framer Motion** - Animation library
- **Zustand** - State management
- **Headless UI** - Unstyled components

### Build & Deploy
- **Node.js** - Runtime
- **npm** - Package manager

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup Steps

```bash
# 1. Clone the repository
git clone <repository-url>
cd insight-ai

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Start development server
npm run dev

# 5. Open browser
# Navigate to http://localhost:3000
```

## 📁 Project Structure

```
insight-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landing page
│   │   ├── upload/page.tsx          # Upload page
│   │   ├── dashboard/page.tsx       # Dashboard page
│   │   ├── api/                     # API routes
│   │   ├── globals.css              # Global styles
│   │   └── layout.tsx               # Root layout
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── upload/
│   │   │   ├── FileUploader.tsx
│   │   │   ├── UploadProgress.tsx
│   │   │   └── RecentUploads.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardGrid.tsx
│   │   │   ├── KPICard.tsx
│   │   │   ├── LineChartComponent.tsx
│   │   │   ├── BarChartComponent.tsx
│   │   │   ├── PieChartComponent.tsx
│   │   │   ├── DataTable.tsx
│   │   │   └── FilterBar.tsx
│   │   │
│   │   ├── insights/
│   │   │   ├── InsightPanel.tsx
│   │   │   └── Recommendation.tsx
│   │   │
│   │   ├── social/
│   │   │   ├── PostGenerator.tsx
│   │   │   ├── ToneSelector.tsx
│   │   │   └── PlatformTabs.tsx
│   │   │
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   │
│   │   └── ui/
│   │       ├── ThemeToggle.tsx
│   │       └── ExportMenu.tsx
│   │
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useFileUpload.ts
│   │   └── useAnalysis.ts
│   │
│   ├── store/
│   │   ├── uploadStore.ts
│   │   └── dashboardStore.ts
│   │
│   ├── utils/
│   │   ├── mockData.ts
│   │   ├── validators.ts
│   │   ├── formatting.ts
│   │   └── fileParser.ts
│   │
│   └── types/
│       └── index.ts
│
├── public/
│   └── favicon.ico
│
├── .env.example
├── .env.local
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Pink (#ec4899)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Display**: Geist (sans-serif)
- **Body**: Geist (sans-serif)
- **Code**: Space Mono (monospace)

### Spacing
- Uses Tailwind's default scale (4px base unit)
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3000

# Production
npm run build        # Build for production
npm start           # Start production server

# Linting
npm run lint        # Run ESLint
```

## 🔌 API Integration Points

### Ready for Integration
```
POST /api/analyze           # Analyze uploaded file
POST /api/export/pdf       # Export dashboard as PDF
POST /api/export/docx      # Export insights as DOCX
POST /api/generate-posts   # Generate social media posts
```

## 📝 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_MAX_FILE_SIZE=52428800
ANTHROPIC_API_KEY=your_key_here
```

## 🎯 Feature Roadmap

### Phase 1 (MVP - Current)
- ✅ File upload and parsing
- ✅ Mock AI analysis
- ✅ Dashboard visualization
- ✅ Social media generator
- ✅ Export functionality

### Phase 2 (Coming Soon)
- ⏳ Real Claude API integration
- ⏳ User authentication
- ⏳ File history and saved analyses
- ⏳ Custom dashboard building
- ⏳ Advanced filtering and search

### Phase 3 (Future)
- ⏳ Collaborative workspaces
- ⏳ Scheduled reports
- ⏳ Advanced ML algorithms
- ⏳ API for third-party integrations
- ⏳ Mobile app

## 🤖 AI Integration

The app is structured to easily integrate with Anthropic's Claude API:

```typescript
// Future API call example
const response = await fetch('/api/analyze', {
  method: 'POST',
  body: JSON.stringify({
    fileContent: data,
    fileType: 'csv',
  }),
});
```

## 🎬 Getting Started Guide

### For Users
1. Visit http://localhost:3000
2. Click "Get Started"
3. Upload a CSV or Excel file
4. View the generated dashboard
5. Read AI insights
6. Generate social media posts
7. Export results

### For Developers
1. Clone the repository
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open http://localhost:3000
5. Edit files in `src/` directory
6. Changes auto-reload

## 🐛 Known Limitations (MVP)

- AI analysis is mocked (ready for Claude API integration)
- File upload limited to 50MB
- No authentication system
- Data stored in localStorage (not persistent)
- No user accounts or file history
- Export functions are partially implemented

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```bash
docker build -t insight-ai .
docker run -p 3000:3000 insight-ai
```

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📧 Support

For issues or questions, please contact: support@insightai.com

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org)
- [Framer Motion Documentation](https://www.framer.com/motion)

---

**Built with ❤️ for data analysis**
