import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PriceDisplay } from "./price-display";
import { Maximize2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PropertyCardProps {
    property: Property;
    index?: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
    return (
        <Link href={`/properties/${property.id}`} className="block h-full group">
            <Card className="overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 border-muted/50 group-hover:border-primary/30 bg-card">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        priority={index === 0}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 flex gap-2 z-10">
                        {index === 0 && (
                            <Badge className="bg-primary/90 hover:bg-primary shadow-lg backdrop-blur-sm border-none">
                                Премиум
                            </Badge>
                        )}
                        <Badge variant="secondary" className="backdrop-blur-sm bg-background/60 border-none shadow-sm text-foreground">
                            Новое
                        </Badge>
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                        <span className="text-white text-sm font-medium">Посмотреть детали</span>
                    </div>
                </div>
                <CardHeader className="p-4 space-y-1">
                    <CardTitle className="text-lg line-clamp-1 group-hover:text-primary transition-colors">{property.name}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{property.location}</span>
                    </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Maximize2 className="h-4 w-4" />
                        <span>{property.area} м²</span>
                    </div>
                </CardContent>
                <Separator />
                <CardFooter className="p-4 flex items-center justify-between mt-auto bg-muted/5 group-hover:bg-primary/5 transition-colors">
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground uppercase font-semibold">Цена</span>
                        <PriceDisplay
                            amountThb={property.priceThb}
                            className="text-xl font-bold text-primary"
                        />
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}
