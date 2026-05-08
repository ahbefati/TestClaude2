# 🚀 InsightAI MVP - Vercel Deployment Rehberi

## HIZLI BAŞLANGAÇ (5 dakika)

### ADIM 1: GitHub'a Yükle

```bash
# 1. GitHub'da yeni repository oluştur
# Adı: insight-ai
# Public seç

# 2. Bilgisayarında terminal aç
cd /path/to/insight-ai

# 3. Git başlat
git init
git add .
git commit -m "InsightAI MVP - Production Ready"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/insight-ai.git
git push -u origin main
```

### ADIM 2: Vercel'e Deploy

#### Seçenek A: GitHub Üzerinden (En Kolay)

1. **Vercel.com** aç
2. **Sign up** → **Continue with GitHub**
3. **Authorize** tıkla
4. **Import Project** → **insight-ai** seç
5. **Deploy** tıkla
6. 3-5 dakika bekle
7. URL'yi al! 🎉

#### Seçenek B: CLI ile

```bash
# 1. Vercel CLI'ı indir
npm i -g vercel

# 2. Giriş yap
vercel login

# 3. Deploy et
cd insight-ai
vercel

# Follow prompts:
# Project name: insight-ai
# Directory: ./
# Build command: npm run build
# Output directory: .next
```

---

## DOSYA YAPISI

```
insight-ai/
├── src/
│   ├── app/
│   │   ├── page.tsx           ← Landing page
│   │   ├── layout.tsx         ← Root layout
│   │   ├── globals.css        ← Global styles
│   │   ├── upload/
│   │   │   └── page.tsx       ← Upload page
│   │   └── dashboard/
│   │       └── page.tsx       ← Dashboard page
│   ├── types.ts               ← TypeScript types
│   └── utilities.ts           ← Utility functions
├── public/                    ← Static files
├── package.json               ← Dependencies
├── next.config.js             ← Next.js config
├── tsconfig.json              ← TypeScript config
├── tailwind.config.js         ← Tailwind config
├── postcss.config.js          ← PostCSS config
└── .gitignore                 ← Git ignore rules
```

---

## LOKAL ÇALIŞMA

### Setup

```bash
# 1. Bağımlılıkları yükle
npm install

# 2. Dev sunucusu başlat
npm run dev

# 3. Tarayıcıda aç
http://localhost:3000
```

### Komutlar

```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## VERCEL AYARLARI

### Environment Variables (İsteğe bağlı)

Vercel dashboard'da:

1. **Settings** → **Environment Variables**
2. Ekle:
   ```
   NEXT_PUBLIC_API_URL=https://your-domain.com
   ```

### Domains

1. **Settings** → **Domains**
2. Custom domain ekle veya Vercel domain kullan

### Auto-Deploy

- GitHub'a push yap
- Vercel otomatik build ve deploy eder
- Live!

---

## SORUN GIDERILMESI

### "Build Error"

```bash
# Lokal olarak test et
npm install
npm run build

# Hataları düzelt
# Sonra push et
git add .
git commit -m "Fix build errors"
git push
```

### "Module not found"

```
Vercel dashboard'da:
Settings → Build & Development Settings
Build Command: npm install && npm run build
```

### Port 3000 meşgul?

```bash
npm run dev -- -p 3001
```

---

## GİTHUB PUSHLAMADıYSAN

```bash
# Repository oluştur
git init
git add .
git commit -m "Initial commit"
git branch -M main

# GitHub'da repo oluştur
# Sonra:
git remote add origin https://github.com/USERNAME/insight-ai.git
git push -u origin main
```

---

## SONRA NE?

### 1. Özelleştir
- `src/app/page.tsx` → Landing page'i değiştir
- `globals.css` → Renkler ve stileri değiştir
- Logo ve favicon değiştir

### 2. Deploy
- Push et: `git push`
- Vercel otomatik deploy eder

### 3. Share
```
https://insight-ai.vercel.app
```

---

## HIZLI KONTROL LİSTESİ

- [ ] GitHub hesabı var
- [ ] Repository oluşturdun
- [ ] Files push ettim
- [ ] Vercel.com'a gittim
- [ ] GitHub ile kaydol
- [ ] insight-ai import ettim
- [ ] Deploy ettim
- [ ] URL alındı
- [ ] Test ettim (Home → Upload → Dashboard)
- [ ] Paylaştım!

---

## VERCEL DASHBOARD

Deploy sonrası:
```
https://vercel.com/dashboard/project/insight-ai
```

Orada:
- Deployments history
- Environment variables
- Domains
- Analytics
- Logs

---

## YEREL DEVELOPMENT

### Code Editor

Tavsiye: **VS Code**

Extensions:
- Prettier
- ES Lint
- Tailwind IntelliSense

### Chrome DevTools

Test et:
- F12 → Device toolbar
- Responsive design test et
- Mobile/Tablet/Desktop

---

## İLERİ KONFIGÜRASYON

### Database (İsteğe bağlı)

Supabase, Firebase, MongoDB ile bağlan

### Authentication (İsteğe bağlı)

NextAuth.js, Auth0, Supabase Auth

### API Routes

```
src/app/api/route.ts
```

---

## KONTAKT

Sorular? Issues?
→ GitHub'da issue aç
→ Discussion başlat

---

**İşte! Vercel'de live!** 🚀

Artık:
- ✅ Production ready
- ✅ Auto-deploy enabled
- ✅ Custom domain ready
- ✅ HTTPS enabled
- ✅ Global CDN

**TEBRIKLER!** 🎉
