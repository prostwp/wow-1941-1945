import { Shield } from 'lucide-react';
import { Hero } from '../components/Hero';
import { COMMANDERS } from '../data/commanders';

export function CommandersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Hero
        title="Командующие"
        subtitle="Полководцы Великой Победы"
        description="Маршалы и генералы, чьи имена навсегда вписаны в историю Великой Отечественной войны."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COMMANDERS.map((c) => (
          <div
            key={c.id}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow fade-up"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-card-foreground mb-1">{c.name}</h3>
                <div className="text-sm text-accent font-bold">{c.rank}</div>
                <div className="text-sm text-muted-foreground">{c.years}</div>
              </div>
            </div>
            <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
              {c.bio}
            </p>
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                Ключевые операции
              </div>
              <div className="flex flex-wrap gap-2">
                {c.battles.map((b) => (
                  <span
                    key={b}
                    className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
