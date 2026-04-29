interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <div className="relative text-center mb-12 py-16 bg-gradient-to-b from-secondary/50 to-transparent rounded-lg overflow-hidden fade-up">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">{title}</h1>
      {subtitle && (
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          {subtitle}
        </h2>
      )}
      {description && (
        <p className="text-lg max-w-3xl mx-auto text-foreground/80 px-4">
          {description}
        </p>
      )}
    </div>
  );
}
