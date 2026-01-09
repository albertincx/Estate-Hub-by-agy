"use client"

import { useCurrency } from "@/lib/store";
import { CURRENCIES, CurrencyCode } from "@/lib/constants";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function CurrencySwitcher() {
    const { currencyCode, setCurrency } = useCurrency();

    return (
        <Select
            value={currencyCode}
            onValueChange={(value: string) => setCurrency(value as CurrencyCode)}
        >
            <SelectTrigger className="w-[100px] bg-background">
                <SelectValue placeholder="Валюта" />
            </SelectTrigger>
            <SelectContent>
                {Object.values(CURRENCIES).map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                        {c.code} ({c.symbol})
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
