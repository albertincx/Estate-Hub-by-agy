import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PropertySkeleton() {
    return (
        <Card className="overflow-hidden flex flex-col h-full">
            <Skeleton className="aspect-[4/3] w-full rounded-none" />
            <CardHeader className="p-4 space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
                <Skeleton className="h-4 w-1/3 mb-4" />
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between border-t mt-auto bg-muted/5">
                <div className="flex flex-col space-y-1">
                    <Skeleton className="h-3 w-8" />
                    <Skeleton className="h-6 w-24" />
                </div>
            </CardFooter>
        </Card>
    );
}

export function PropertyGridSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <PropertySkeleton key={i} />
            ))}
        </div>
    );
}
