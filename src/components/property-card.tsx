"use client"

import Image from "next/image";
import { Property } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PriceDisplay } from "./price-display";
import { Maximize2, MapPin } from "lucide-react";

interface PropertyCardProps {
    property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardHeader className="p-4 space-y-1">
                <CardTitle className="text-lg line-clamp-1">{property.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{property.location}</span>
                </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Maximize2 className="h-4 w-4" />
                    <span>{property.area} м²</span>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between border-t mt-auto bg-muted/5">
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase font-semibold">Цена</span>
                    <PriceDisplay
                        amountThb={property.priceThb}
                        className="text-xl font-bold text-primary"
                    />
                </div>
            </CardFooter>
        </Card>
    );
}
