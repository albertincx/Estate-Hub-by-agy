"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function Clicker() {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col items-center gap-6 p-8 border rounded-2xl bg-card shadow-sm">
            <div className="text-6xl font-bold tracking-tight text-foreground">
                {count}
            </div>
            <Button
                size="lg"
                className="h-16 w-16 rounded-full"
                onClick={() => setCount(count + 1)}
            >
                <Plus className="h-8 w-8" />
                <span className="sr-only">Increment</span>
            </Button>
            <div className="text-sm text-muted-foreground">
                Keep clicking to increase the count!
            </div>
        </div>
    )
}
