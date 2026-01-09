import { PropertyGridSkeleton } from "@/components/property-skeleton";

export default function Loading() {
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="mb-8 animate-pulse">
                <div className="h-9 bg-muted rounded w-48 mb-2" />
                <div className="h-5 bg-muted rounded w-64" />
            </div>
            <PropertyGridSkeleton />
        </main>
    );
}
