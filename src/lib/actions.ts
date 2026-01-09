"use server"

import { cookies } from "next/headers";
import { CURRENCY_COOKIE_NAME, CurrencyCode } from "./constants";

export async function setPreferredCurrency(code: CurrencyCode) {
    const cookieStore = await cookies();
    cookieStore.set(CURRENCY_COOKIE_NAME, code, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
    });
}
