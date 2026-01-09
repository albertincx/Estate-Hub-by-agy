import { PROPERTIES } from "@/lib/data";
import { PropertyCard } from "@/components/property-card";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              EstateHub
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <CurrencySwitcher />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 font-sans">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Недвижимость</h2>
          <p className="text-muted-foreground">
            Найдите свою идеальную недвижимость в Таиланде.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>

      <footer className="py-12 border-t mt-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js 16, Tailwind CSS 4, and Shadcn UI.
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-sans">
            © 2026 EstateHub. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
