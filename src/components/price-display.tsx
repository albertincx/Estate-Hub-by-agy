"use client"

import { useCurrency } from "@/lib/store";
import { CURRENCIES } from "@/lib/constants";

interface PriceDisplayProps {
    amountThb: number;
    className?: string;
}

export function PriceDisplay({ amountThb, className }: PriceDisplayProps) {
    const { currencyCode } = useCurrency();
    const currency = CURRENCIES[currencyCode];

    const convertedAmount = amountThb * currency.rate;

    const formatter = new Intl.NumberFormat(currency.locale, {
        style: "currency",
        currency: currency.code,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <span className={className}>
            {formatter.format(convertedAmount)}
        </span>
    );
}
