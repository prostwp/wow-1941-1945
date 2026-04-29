import { Hero } from '../components/Hero';
import { TimelineView } from '../components/TimelineView';
import { EVENTS } from '../data/events';

export function TimelinePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Hero
        title="Хронология"
        subtitle="События войны в порядке дат"
        description="Полная хронология ключевых событий Великой Отечественной войны от первого дня до Победы."
      />
      <TimelineView events={EVENTS} />
    </div>
  );
}
