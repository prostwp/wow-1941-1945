import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import type { WarEvent } from '../data/events';

const POSITIONS: Record<number, { x: number; y: number }> = {
  1: { x: 28, y: 50 },
  2: { x: 50, y: 35 },
  3: { x: 45, y: 18 },
  4: { x: 60, y: 55 },
  5: { x: 47, y: 47 },
  6: { x: 38, y: 55 },
  7: { x: 45, y: 18 },
  8: { x: 38, y: 38 },
  9: { x: 18, y: 32 },
  10: { x: 50, y: 35 },
};

export function MapView({ events }: { events: WarEvent[] }) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Ничего не найдено по выбранным фильтрам
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="text-sm text-muted-foreground mb-4">
        Места ключевых событий (схематично)
      </div>
      <div
        className="relative w-full bg-[#e8e0d0] rounded-lg overflow-hidden"
        style={{ aspectRatio: '16/9' }}
      >
        {/* схематичные «материки» */}
        <svg
          viewBox="0 0 100 56"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M5,30 Q15,15 30,18 Q50,10 65,18 Q80,15 95,25 L95,45 Q80,52 60,48 Q40,52 20,45 Q5,42 5,30 Z"
            fill="#c8bfa8"
            stroke="#a89e85"
            strokeWidth="0.3"
          />
        </svg>

        {events.map((e) => {
          const pos = POSITIONS[e.id];
          if (!pos) return null;
          return (
            <Link
              key={e.id}
              to={`/event/${e.id}`}
              className="absolute -translate-x-1/2 -translate-y-full group"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            >
              <div className="flex flex-col items-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap mb-1 max-w-[200px] truncate shadow-lg">
                  {e.title}
                </div>
                <MapPin className="w-6 h-6 text-accent fill-accent/30 drop-shadow" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-4 text-xs text-muted-foreground">
        Наведите курсор на маркер, чтобы увидеть название события. Кликните,
        чтобы открыть подробности.
      </div>
    </div>
  );
}
