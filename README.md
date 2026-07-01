# DGHR Portal

React + Vite implementation of the DGHR (Dubai Government Human Resources Department) homepage, built from Figma design.

## Stack
- React 19 + Vite
- lucide-react (icons)
- Plain CSS with a small design-token system (`src/index.css`)

## Structure
```
src/
  components/
    UtilityBar/        top "Home" tab bar
    Breadcrumb/         "Home" breadcrumb
    Hero/                hero banner, nav, headline, service cards
    AccessibilityPanel/  contrast / screen reader / text size controls
    ImpactSection/       DGHR Impact stats + link columns
    Footer/               site footer
  pages/
    Home/                 composes the homepage from the components above
```

## Getting started
```bash
npm install
npm run dev       
npm run build     
npm run preview   