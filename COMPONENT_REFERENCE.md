# InsightAI - Component Reference & API Documentation

## 🎨 Component Library

### Layout Components

#### Header
- **Path**: `src/components/layout/Header.tsx`
- **Props**: None
- **Features**: Navigation, logo, mobile menu, theme toggle
- **Usage**: 
```tsx
import { Header } from '@/components/layout/Header';
<Header />
```

#### Footer
- **Path**: `src/components/layout/Footer.tsx`
- **Props**: None
- **Features**: Links, social, copyright
- **Usage**:
```tsx
import { Footer } from '@/components/layout/Footer';
<Footer />
```

### Upload Components

#### FileUploader
- **Path**: `src/components/upload/FileUploader.tsx`
- **Props**:
  - `onSuccess: () => void` - Callback on successful upload
  - `hasUploaded: boolean` - Show success state
- **Features**: Drag-drop, validation, progress
- **Usage**:
```tsx
import { FileUploader } from '@/components/upload/FileUploader';
<FileUploader onSuccess={handleSuccess} hasUploaded={false} />
```

#### UploadProgress
- **Path**: `src/components/upload/UploadProgress.tsx`
- **Props**:
  - `file: File` - The file being uploaded
  - `progress: number` - Upload progress 0-100
- **Features**: Progress bar, status messages
- **Usage**:
```tsx
<UploadProgress file={file} progress={65} />
```

#### RecentUploads
- **Path**: `src/components/upload/RecentUploads.tsx`
- **Props**: None (uses localStorage)
- **Features**: Recent file list, delete option
- **Usage**:
```tsx
<RecentUploads />
```

### Dashboard Components

#### DashboardGrid
- **Path**: `src/components/dashboard/DashboardGrid.tsx`
- **Props**: None
- **Features**: Full dashboard layout with KPIs and charts
- **Usage**:
```tsx
<DashboardGrid />
```

#### KPICard
- **Path**: `src/components/dashboard/KPICard.tsx`
- **Props**:
  - `label: string` - KPI label
  - `value: string` - KPI value
  - `change: number` - Percentage change
  - `icon?: string` - Emoji icon
- **Features**: Animated metrics, trend indicator
- **Usage**:
```tsx
<KPICard label="Revenue" value="$50K" change={12.5} icon="💰" />
```

#### LineChartComponent
- **Path**: `src/components/dashboard/LineChartComponent.tsx`
- **Props**: None
- **Features**: Trend line chart with dual metrics
- **Usage**:
```tsx
<LineChartComponent />
```

#### BarChartComponent
- **Path**: `src/components/dashboard/BarChartComponent.tsx`
- **Props**: None
- **Features**: Sales by category bar chart
- **Usage**:
```tsx
<BarChartComponent />
```

#### PieChartComponent
- **Path**: `src/components/dashboard/PieChartComponent.tsx`
- **Props**: None
- **Features**: Distribution pie chart
- **Usage**:
```tsx
<PieChartComponent />
```

#### DataTable
- **Path**: `src/components/dashboard/DataTable.tsx`
- **Props**: None
- **Features**: Responsive data table with sorting
- **Usage**:
```tsx
<DataTable />
```

#### FilterBar
- **Path**: `src/components/dashboard/FilterBar.tsx`
- **Props**: None
- **Features**: Add/remove filters, visual tags
- **Usage**:
```tsx
<FilterBar />
```

### Insights Components

#### InsightPanel
- **Path**: `src/components/insights/InsightPanel.tsx`
- **Props**: None
- **Features**: Executive summary, findings, anomalies, recommendations
- **Usage**:
```tsx
<InsightPanel />
```

### Social Media Components

#### PostGenerator
- **Path**: `src/components/social/PostGenerator.tsx`
- **Props**: None
- **Features**: Multi-platform posts, tone selection, character count
- **Usage**:
```tsx
<PostGenerator />
```

#### ToneSelector
- **Path**: `src/components/social/ToneSelector.tsx`
- **Props**:
  - `selectedTone: 'professional' | 'casual' | 'fun'`
  - `onSelectTone: (tone) => void`
- **Features**: Three tone options with descriptions
- **Usage**:
```tsx
<ToneSelector selectedTone="professional" onSelectTone={setTone} />
```

#### PlatformTabs
- **Path**: `src/components/social/PlatformTabs.tsx`
- **Props**:
  - `selectedPlatform: 'linkedin' | 'twitter' | 'instagram'`
  - `onSelectPlatform: (platform) => void`
- **Features**: Platform selection with icons
- **Usage**:
```tsx
<PlatformTabs selectedPlatform="linkedin" onSelectPlatform={setPlatform} />
```

### Common Components

#### Button
- **Path**: `src/components/common/Button.tsx`
- **Props**:
  - `variant?: 'primary' | 'outline' | 'ghost' | 'danger'`
  - `size?: 'sm' | 'md' | 'lg'`
  - `isLoading?: boolean`
  - `children: React.ReactNode`
  - All HTML button attributes
- **Features**: Multiple styles, loading state
- **Usage**:
```tsx
<Button variant="primary" size="lg">Click Me</Button>
<Button isLoading variant="outline">Loading...</Button>
```

### UI Components

#### ThemeToggle
- **Path**: `src/components/ui/ThemeToggle.tsx`
- **Props**: None
- **Features**: Dark/light mode toggle
- **Usage**:
```tsx
<ThemeToggle />
```

#### ExportMenu
- **Path**: `src/components/ui/ExportMenu.tsx`
- **Props**: None
- **Features**: Dropdown export options
- **Usage**:
```tsx
<ExportMenu />
```

## 🎯 Pages

### Landing Page
- **Path**: `src/app/page.tsx`
- **Route**: `/`
- **Features**: Hero section, features grid, how-it-works, CTA

### Upload Page
- **Path**: `src/app/upload/page.tsx`
- **Route**: `/upload`
- **Features**: File uploader, recent uploads, tips panel

### Dashboard Page
- **Path**: `src/app/dashboard/page.tsx`
- **Route**: `/dashboard`
- **Features**: Tabbed interface (Dashboard, Insights, Posts)

## 🔌 API Routes

### Analyze Endpoint
```
POST /api/analyze

Request:
{
  file: File,
  fileType: 'csv' | 'xlsx' | 'json' | 'pdf'
}

Response:
{
  success: boolean,
  data: {
    analysis: DataAnalysis,
    charts: ChartConfig[],
    insights: Insight[]
  }
}
```

### Export PDF Endpoint
```
POST /api/export/pdf

Request:
{
  dashboardId: string,
  fileName?: string
}

Response: PDF file
```

### Export DOCX Endpoint
```
POST /api/export/docx

Request:
{
  insights: Insight[],
  fileName?: string
}

Response: DOCX file
```

### Generate Posts Endpoint
```
POST /api/generate-posts

Request:
{
  insights: string[],
  platform: 'linkedin' | 'twitter' | 'instagram',
  tone: 'professional' | 'casual' | 'fun'
}

Response:
{
  posts: {
    platform: string,
    tone: string,
    content: string,
    hashtags: string[],
    characterCount: number
  }[]
}
```

## 🎣 Hooks

### useTheme
```tsx
import { useTheme } from '@/hooks/useTheme';

const { isDark, toggleTheme } = useTheme();
```

### useFileUpload
```tsx
import { useFileUpload } from '@/hooks/useFileUpload';

const { 
  file, 
  isLoading, 
  progress, 
  error, 
  upload 
} = useFileUpload();
```

## 📦 Zustand Stores

### useUploadStore
```tsx
import { useUploadStore } from '@/store/uploadStore';

const { uploads, addUpload, removeUpload, clearUploads } = useUploadStore();
```

### useDashboardStore
```tsx
import { useDashboardStore } from '@/store/dashboardStore';

const { currentFileId, setCurrentFile, clearCurrentFile } = useDashboardStore();
```

## 🛠️ Utility Functions

### formatFileSize
```tsx
import { formatFileSize } from '@/utils/formatting';
formatFileSize(1024 * 1024) // "1 MB"
```

### formatCurrency
```tsx
import { formatCurrency } from '@/utils/formatting';
formatCurrency(1500) // "$1,500.00"
```

### formatDate
```tsx
import { formatDate } from '@/utils/formatting';
formatDate(new Date()) // "Jan 15, 2024"
```

### validateFileType
```tsx
import { validateFileType } from '@/utils/validators';
validateFileType('data.csv', ['.csv', '.xlsx']) // true
```

## 🎨 Styling & Themes

### CSS Variables
```css
--primary: #3b82f6
--secondary: #8b5cf6
--accent: #ec4899
--success: #10b981
--warning: #f59e0b
--error: #ef4444
--slate-*: Various shades
```

### Utility Classes
```css
.glass - Glassmorphism effect
.gradient-text - Gradient text
.card-shadow - Subtle shadow
.card-shadow-lg - Large shadow
.animate-fadeInUp - Fade up animation
.focus-ring - Focus state styling
```

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚀 Performance Tips

1. **Code Splitting**: Pages automatically split code
2. **Image Optimization**: Use next/image for images
3. **Caching**: Use SWR or React Query for API calls
4. **Lazy Loading**: Use dynamic imports for heavy components

## 🔐 Security Considerations

1. Validate file types and sizes server-side
2. Sanitize user input
3. Use environment variables for sensitive data
4. Implement rate limiting on API routes
5. Add CORS headers as needed

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📈 Analytics Integration Points

- Track file uploads
- Monitor dashboard views
- Measure export usage
- Analyze post generation

## 🔗 Integration Checklist

- [ ] Connect to Claude API
- [ ] Implement authentication
- [ ] Set up database
- [ ] Add real file parsing
- [ ] Implement actual exports
- [ ] Set up monitoring
- [ ] Add error tracking
- [ ] Implement rate limiting
- [ ] Add user analytics

---

**Last Updated**: January 2024
