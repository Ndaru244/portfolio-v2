const SENSITIVE_KEYS = new Set(["adminKey", "admin_key", "secret", "password"]);

export function stripSensitiveFields<T extends object>(data: T): T {
  const cleaned = { ...data } as Record<string, unknown>;
  for (const key of SENSITIVE_KEYS) {
    if (key in cleaned) {
      delete cleaned[key];
    }
  }
  return cleaned as T;
}

export function toSafeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
