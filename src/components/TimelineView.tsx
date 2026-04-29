import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import type { WarEvent } from '../data/events';

export function TimelineView({ events }: { events: WarEvent[] }) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        Ничего не найдено по выбранным фильтрам
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />

      <ol className="space-y-10">
        {events.map((event, idx) => (
          <li key={event.id} className="relative fade-up">
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

            <div
              className={`md:grid md:grid-cols-2 md:gap-8 ${
                idx % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'
              }`}
            >
              <Link
                to={`/event/${event.id}`}
                className={`block ml-16 md:ml-0 ${
                  idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}
              >
                <div className="bg-card border border-border rounded-lg p-5 hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div
                    className={`flex items-center gap-2 text-sm text-muted-foreground mb-2 ${
                      idx % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="mb-2 text-card-foreground text-lg">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  <div
                    className={`flex items-center gap-3 text-xs ${
                      idx % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <span className="px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {event.type}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
