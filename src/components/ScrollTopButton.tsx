import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition-all flex items-center justify-center"
      aria-label="Наверх"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
