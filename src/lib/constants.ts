export type CurrencyCode = "THB" | "USD" | "EUR" | "RUB";

export interface Currency {
    code: CurrencyCode;
    symbol: string;
    rate: number;
    locale: string;
}

export const CURRENCIES: Record<CurrencyCode, Currency> = {
    THB: {
        code: "THB",
        symbol: "฿",
        rate: 1,
        locale: "th-TH",
    },
    USD: {
        code: "USD",
        symbol: "$",
        rate: 0.0286,
        locale: "en-US",
    },
    EUR: {
        code: "EUR",
        symbol: "€",
        rate: 0.0263,
        locale: "de-DE",
    },
    RUB: {
        code: "RUB",
        symbol: "₽",
        rate: 2.57,
        locale: "ru-RU",
    },
};

export const DEFAULT_CURRENCY: CurrencyCode = "THB";
export const CURRENCY_COOKIE_NAME = "preferred_currency";
