"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { setCookie } from "cookies-next";
import { CurrencyCode, DEFAULT_CURRENCY, CURRENCY_COOKIE_NAME } from "./constants";

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

    const setCurrency = (code: CurrencyCode) => {
        setCurrencyCode(code);
        setCookie(CURRENCY_COOKIE_NAME, code, { maxAge: 60 * 60 * 24 * 30 }); // 30 days
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
