import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-primary-foreground mb-3">О проекте</h4>
            <p className="text-sm text-primary-foreground/70">
              Образовательный проект, посвящённый ключевым событиям Великой
              Отечественной войны 1941–1945 годов.
            </p>
          </div>
          <div>
            <h4 className="text-primary-foreground mb-3">Навигация</h4>
            <nav className="space-y-2 text-sm">
              <Link
                to="/"
                className="block text-primary-foreground/70 hover:text-primary-foreground"
              >
                Главная
              </Link>
              <Link
                to="/timeline"
                className="block text-primary-foreground/70 hover:text-primary-foreground"
              >
                Хронология
              </Link>
              <Link
                to="/commanders"
                className="block text-primary-foreground/70 hover:text-primary-foreground"
              >
                Командующие
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-primary-foreground mb-3">Контакты</h4>
            <p className="text-sm text-primary-foreground/70">
              Проект создан в образовательных целях
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/70">
          <p>© 2026 Великая Отечественная война 1941–1945</p>
        </div>
      </div>
    </footer>
  );
}
