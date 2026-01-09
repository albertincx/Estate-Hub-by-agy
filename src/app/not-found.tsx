import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">404</h2>
            <h3 className="text-xl font-semibold mb-2">Страница не найдена</h3>
            <p className="text-muted-foreground mb-8">
                Извините, запрашиваемая вами страница не существует.
            </p>
            <Button asChild>
                <Link href="/">Вернуться на главную</Link>
            </Button>
        </div>
    )
}
