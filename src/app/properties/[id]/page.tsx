import { PROPERTIES } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PriceDisplay } from "@/components/price-display";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, MapPin, Maximize2, Bed, Bath, Home, Star } from "lucide-react";
import { CurrencySwitcher } from "@/components/currency-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Metadata } from "next";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const property = PROPERTIES.find((p) => p.id === id);

    if (!property) {
        return {
            title: "Property Not Found | EstateHub",
        };
    }

    return {
        title: `${property.name} | EstateHub`,
        description: `${property.name} в ${property.location}. Площадь: ${property.area} м².`,
    };
}

export default async function PropertyPage({ params }: Props) {
    const { id } = await params;
    const property = PROPERTIES.find((p) => p.id === id);

    if (!property) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Button variant="ghost" size="icon" className="group">
                                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                            </Button>
                        </Link>
                        <h1 className="text-xl font-bold tracking-tight hidden sm:block">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src={property.image}
                            alt={property.name}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col space-y-8 py-4">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">
                                    <Home className="h-3 w-3 mr-1" />
                                    Недвижимость
                                </Badge>
                                <Badge variant="secondary" className="px-3 py-1">
                                    <Star className="h-3 w-3 mr-1 fill-current" />
                                    Рекомендуем
                                </Badge>
                            </div>
                            <h2 className="text-4xl font-bold tracking-tight mb-4">{property.name}</h2>
                            <div className="flex items-center text-muted-foreground gap-2">
                                <MapPin className="h-4 w-4" />
                                <span className="text-lg">{property.location}</span>
                            </div>
                        </div>

                        <Separator />

                        <div className="p-6 bg-muted/30 rounded-xl border border-muted/50 flex items-center justify-between shadow-xs">
                            <div className="flex flex-col">
                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Стоимость</span>
                                <PriceDisplay
                                    amountThb={property.priceThb}
                                    className="text-4xl font-black text-primary"
                                />
                            </div>
                            <Badge className="h-fit py-1.5 px-4 text-sm">
                                Доступно
                            </Badge>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div className="flex flex-col items-center p-4 bg-muted/20 rounded-xl border border-muted/30 transition-colors hover:bg-muted/30">
                                <Maximize2 className="h-6 w-6 text-primary mb-2" />
                                <span className="text-sm text-muted-foreground">Площадь</span>
                                <span className="font-bold">{property.area} м²</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-muted/20 rounded-xl border border-muted/30 transition-colors hover:bg-muted/30">
                                <Bed className="h-6 w-6 text-primary mb-2" />
                                <span className="text-sm text-muted-foreground">Спальни</span>
                                <span className="font-bold">2</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-muted/20 rounded-xl border border-muted/30 transition-colors hover:bg-muted/30">
                                <Bath className="h-6 w-6 text-primary mb-2" />
                                <span className="text-sm text-muted-foreground">Ванные</span>
                                <span className="font-bold">2</span>
                            </div>
                        </div>

                        <Separator />

                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                Описание
                                <Badge variant="outline" className="font-normal text-[10px] uppercase tracking-widest px-2 py-0 h-5">
                                    Официально
                                </Badge>
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Прекрасная возможность приобрести недвижимость в одном из самых живописных районов Таиланда.
                                Этот объект предлагает современный дизайн, качественную отделку и удобное расположение.
                                Идеально подходит как для собственного проживания, так и для инвестиций с целью сдачи в аренду.
                            </p>
                            <ul className="list-disc pl-5 mt-6 text-muted-foreground space-y-3">
                                <li>Полностью меблировано</li>
                                <li>Система кондиционирования</li>
                                <li>Охраняемая территория 24/7</li>
                                <li>Общий бассейн и фитнес-центр</li>
                            </ul>
                        </div>

                        <Separator className="my-4" />

                        <div className="pt-4 mt-auto">
                            <Button className="w-full h-14 text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all" size="lg">
                                Связаться с агентом
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t mt-12 bg-muted/30">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xs text-muted-foreground font-sans">
                        © 2026 EstateHub. Все права защищены.
                    </p>
                </div>
            </footer>
        </div>
    );
}

// Generate static params for faster initial load
export async function generateStaticParams() {
    return PROPERTIES.map((property) => ({
        id: property.id,
    }));
}
