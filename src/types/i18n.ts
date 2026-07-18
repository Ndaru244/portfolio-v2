export type Locale = "en" | "id";

export type LocalizedFields<T> = Partial<Record<Locale, Partial<T>>>;
