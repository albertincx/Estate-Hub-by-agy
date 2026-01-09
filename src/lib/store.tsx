"use client"

import React, { createContext, useContext, useState, useEffect } from "react";
import { CurrencyCode, DEFAULT_CURRENCY } from "./constants";
import { setPreferredCurrency } from "./actions";

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

    const setCurrency = async (code: CurrencyCode) => {
        setCurrencyCode(code);
        await setPreferredCurrency(code);
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
