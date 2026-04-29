import { useMemo, useState } from 'react';
import { Filter as Funnel, Grid3x3, Clock, Map as MapIcon } from 'lucide-react';
import { Hero } from '../components/Hero';
import { EventCard } from '../components/EventCard';
import { EVENTS, type EventType } from '../data/events';
import { TimelineView } from '../components/TimelineView';
import { MapView } from '../components/MapView';

type ViewMode = 'cards' | 'timeline' | 'map';

const YEARS = [1941, 1942, 1943, 1944, 1945] as const;
const TYPES: EventType[] = ['операция', 'битва', 'блокада'];

export function HomePage() {
  const [view, setView] = useState<ViewMode>('cards');
  const [selectedYears, setSelectedYears] = useState<Set<number>>(new Set());
  const [selectedTypes, setSelectedTypes] = useState<Set<EventType>>(new Set());

  const toggleYear = (year: number) => {
    const next = new Set(selectedYears);
    next.has(year) ? next.delete(year) : next.add(year);
    setSelectedYears(next);
  };

  const toggleType = (type: EventType) => {
    const next = new Set(selectedTypes);
    next.has(type) ? next.delete(type) : next.add(type);
    setSelectedTypes(next);
  };

  const filtered = useMemo(() => {
    return EVENTS.filter((e) => {
      if (selectedYears.size > 0) {
        const matches =
          selectedYears.has(e.year) ||
          (e.endYear !== undefined && selectedYears.has(e.endYear));
        if (!matches) return false;
      }
      if (selectedTypes.size > 0 && !selectedTypes.has(e.type)) return false;
      return true;
    });
  }, [selectedYears, selectedTypes]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Hero
        title="1941–1945"
        subtitle="Великая Отечественная война"
        description="Интерактивная хронология ключевых событий, изменивших ход истории. Изучайте события, знакомьтесь с героями и погружайтесь в историю великой победы."
      />

      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        <ViewButton active={view === 'cards'} onClick={() => setView('cards')} icon={Grid3x3}>
          Карточки
        </ViewButton>
        <ViewButton active={view === 'timeline'} onClick={() => setView('timeline')} icon={Clock}>
          Хронология
        </ViewButton>
        <ViewButton active={view === 'map'} onClick={() => setView('map')} icon={MapIcon}>
          Карта
        </ViewButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-20">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4">
                <Funnel className="w-5 h-5 text-accent" />
                <h3 className="text-lg">Фильтры</h3>
              </div>
              <div className="space-y-4">
                <FilterGroup label="Год">
                  {YEARS.map((y) => (
                    <FilterChip
                      key={y}
                      active={selectedYears.has(y)}
                      onClick={() => toggleYear(y)}
                    >
                      {y}
                    </FilterChip>
                  ))}
                </FilterGroup>
                <FilterGroup label="Тип события">
                  {TYPES.map((t) => (
                    <FilterChip
                      key={t}
                      active={selectedTypes.has(t)}
                      onClick={() => toggleType(t)}
                    >
                      {t}
                    </FilterChip>
                  ))}
                </FilterGroup>
                {(selectedYears.size > 0 || selectedTypes.size > 0) && (
                  <button
                    onClick={() => {
                      setSelectedYears(new Set());
                      setSelectedTypes(new Set());
                    }}
                    className="text-sm text-accent hover:underline"
                  >
                    Сбросить фильтры
                  </button>
                )}
              </div>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="mb-4 text-muted-foreground">
            Найдено событий: {filtered.length}
          </div>

          {view === 'cards' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  Ничего не найдено по выбранным фильтрам
                </div>
              )}
            </div>
          )}

          {view === 'timeline' && <TimelineView events={filtered} />}
          {view === 'map' && <MapView events={filtered} />}
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
        <StatCard value="1418" label="дней войны" />
        <StatCard value="10" label="ключевых событий" />
        <StatCard value="27М" label="потерь СССР" />
      </div>
    </div>
  );
}

function ViewButton({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Grid3x3;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded transition-colors px-4 py-2 ${
        active
          ? 'bg-accent text-accent-foreground hover:bg-accent/90'
          : 'hover:bg-muted text-foreground'
      }`}
    >
      <Icon className="w-4 h-4" />
      {children}
    </button>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-sm text-muted-foreground mb-2">{label}</div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm rounded transition-colors ${
        active
          ? 'bg-accent text-accent-foreground'
          : 'bg-muted hover:bg-muted/70 text-foreground'
      }`}
    >
      {children}
    </button>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center">
      <div className="text-4xl mb-2 text-accent font-serif font-bold">
        {value}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}
