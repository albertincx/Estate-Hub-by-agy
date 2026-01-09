"use client"

import { useMemo } from "react";
import { useCurrency } from "@/lib/store";
import { CURRENCIES } from "@/lib/constants";

interface PriceDisplayProps {
    amountThb: number;
    className?: string;
}

export function PriceDisplay({ amountThb, className }: PriceDisplayProps) {
    const { currencyCode } = useCurrency();
    const currency = CURRENCIES[currencyCode];

    const convertedAmount = useMemo(() => amountThb * currency.rate, [amountThb, currency.rate]);

    const formattedPrice = useMemo(() => {
        return new Intl.NumberFormat(currency.locale, {
            style: "currency",
            currency: currency.code,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(convertedAmount);
    }, [currency.locale, currency.code, convertedAmount]);

    return (
        <span className={`transition-all duration-300 ${className} animate-in fade-in zoom-in-95`}>
            {formattedPrice}
        </span>
    );
}
