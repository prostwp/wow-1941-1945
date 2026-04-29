import { NavLink, Link } from 'react-router-dom';
import { Calendar, Home, Search, Shield } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Главная', icon: Home },
  { to: '/timeline', label: 'Хронология', icon: Calendar },
  { to: '/commanders', label: 'Командующие', icon: Shield },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded flex items-center justify-center text-2xl">
              ⭐
            </div>
            <div>
              <h1 className="text-xl font-serif text-primary-foreground leading-tight">
                1941–1945
              </h1>
              <p className="text-xs text-primary-foreground/70">
                Великая Отечественная война
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded transition-colors ${
                    isActive
                      ? 'bg-primary-foreground/10'
                      : 'hover:bg-primary-foreground/5'
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{label}</span>
              </NavLink>
            ))}
          </nav>

          <button
            className="p-2 rounded hover:bg-primary-foreground/10"
            aria-label="Поиск"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
