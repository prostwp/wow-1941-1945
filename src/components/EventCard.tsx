import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';
import type { WarEvent } from '../data/events';

export function EventCard({ event }: { event: WarEvent }) {
  return (
    <Link to={`/event/${event.id}`} className="block h-full fade-up">
      <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
        <div className="h-48 md:h-56 lg:h-48 overflow-hidden bg-muted relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <h3 className="mb-2 text-card-foreground line-clamp-2 text-lg">
            {event.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-3 flex-1">
            {event.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
              {event.type}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="w-3 h-3" />
              <span className="truncate max-w-[120px] sm:max-w-[150px]">
                {event.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
