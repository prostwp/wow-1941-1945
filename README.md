# 1941–1945 · Великая Отечественная война

Образовательный проект для школьников: интерактивная хронология ключевых
событий ВОВ, страницы командующих и подробные карточки сражений.

Сделано по макету [fact-cyprus-29979831.figma.site](https://fact-cyprus-29979831.figma.site).

## Стек

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4
- React Router 7
- lucide-react (иконки)
- PT Serif / PT Sans (Google Fonts)

## Запуск

```bash
npm install
npm run dev      # http://localhost:5179
npm run build    # production build → dist/
npm run preview  # serve dist/
```

## Структура

```
src/
├── components/      # Header, Footer, EventCard, Hero, TimelineView, MapView, ScrollTopButton
├── pages/           # HomePage, TimelinePage, CommandersPage, EventDetailPage
├── data/            # events.ts (10 событий), commanders.ts (6 полководцев)
├── App.tsx          # router
└── index.css        # Tailwind + CSS-переменные темы

public/img/events/   # фотографии событий (event-1.jpg … event-10.jpg)
```

## Содержимое

10 ключевых событий (от 22 июня 1941 до 9 мая 1945), 6 маршалов, три вида
отображения (карточки / хронология / карта), фильтры по году и типу события.
