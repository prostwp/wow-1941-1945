import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollTopButton } from './components/ScrollTopButton';
import { HomePage } from './pages/HomePage';
import { TimelinePage } from './pages/TimelinePage';
import { CommandersPage } from './pages/CommandersPage';
import { EventDetailPage } from './pages/EventDetailPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/commanders" element={<CommandersPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          <Route
            path="*"
            element={
              <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl mb-2">404</h1>
                <p className="text-muted-foreground">Страница не найдена</p>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
