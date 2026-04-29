import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Award } from 'lucide-react';
import { EVENTS } from '../data/events';

export function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS.find((e) => String(e.id) === id);

  if (!event) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl mb-4">Событие не найдено</h1>
        <Link to="/" className="text-accent hover:underline">
          ← Вернуться к списку
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 fade-up">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Все события
      </Link>

      <div className="rounded-lg overflow-hidden mb-6 max-h-[420px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-3 mb-3 flex-wrap">
        <span className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground uppercase tracking-wide">
          {event.type}
        </span>
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {event.date}
        </span>
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {event.location}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl mb-4">{event.title}</h1>

      <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
        {event.description}
      </p>

      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-base leading-relaxed text-foreground/90">
          {event.fullDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {event.commanders && event.commanders.length > 0 && (
          <InfoBlock icon={Users} title="Командующие">
            <ul className="space-y-1 text-foreground/90">
              {event.commanders.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </InfoBlock>
        )}
        {event.result && (
          <InfoBlock icon={Award} title="Итоги">
            <p className="text-foreground/90">{event.result}</p>
          </InfoBlock>
        )}
        {event.losses && (
          <InfoBlock icon={Users} title="Потери">
            <p className="text-foreground/90">{event.losses}</p>
          </InfoBlock>
        )}
      </div>
    </article>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Calendar;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-5">
      <div className="flex items-center gap-2 text-accent mb-3">
        <Icon className="w-5 h-5" />
        <h3 className="text-base">{title}</h3>
      </div>
      {children}
    </div>
  );
}
