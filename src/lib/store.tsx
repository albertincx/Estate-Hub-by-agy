"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { CurrencyCode, DEFAULT_CURRENCY, CURRENCY_COOKIE_NAME, CURRENCIES } from "./constants";

interface CurrencyContextType {
    currencyCode: CurrencyCode;
    setCurrency: (code: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({
    children,
    initialCurrency,
}: {
    children: React.ReactNode;
    initialCurrency: CurrencyCode;
}) {
    const [currencyCode, setCurrencyCode] = useState<CurrencyCode>(initialCurrency);

    useEffect(() => {
        // Read cookie on client side for hydration
        const cookies = document.cookie.split("; ");
        const currencyCookie = cookies.find((c) => c.startsWith(`${CURRENCY_COOKIE_NAME}=`));
        if (currencyCookie) {
            const value = currencyCookie.split("=")[1] as CurrencyCode;
            if (Object.keys(CURRENCIES).includes(value)) {
                setCurrencyCode(value);
            }
        }
    }, []);

    const setCurrency = (code: CurrencyCode) => {
        setCurrencyCode(code);
        // Set cookie on client side for static export compatibility
        document.cookie = `${CURRENCY_COOKIE_NAME}=${code}; max-age=${60 * 60 * 24 * 30}; path=/; SameSite=Lax`;
    };

    return (
        <CurrencyContext.Provider value={{ currencyCode, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
}
