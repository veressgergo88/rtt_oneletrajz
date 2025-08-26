import { create } from "zustand";

type Lang = "hu" | "en"

type LangState = {
    language: Lang,
    setLanguage: (lang: Lang) => void
}

export const useLanguageStore = create<LangState>((set) => ({
    language: "hu",
    setLanguage: (lang) => set( { language: lang } )
}))