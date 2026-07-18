const CACHE_KEY = "portfolio_data_v2";
const BUST_KEY = "portfolio_cache_bust";
const CHANNEL = "portfolio-cache";

export { CACHE_KEY, BUST_KEY };

export function invalidatePortfolioCache() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.setItem(BUST_KEY, String(Date.now()));
    if ("BroadcastChannel" in window) {
      const channel = new BroadcastChannel(CHANNEL);
      channel.postMessage({ type: "invalidate", at: Date.now() });
      channel.close();
    }
  } catch {
    // ignore quota / private mode
  }
}

export function subscribePortfolioCacheInvalidation(onInvalidate: () => void) {
  if (typeof window === "undefined") return () => {};

  const onStorage = (event: StorageEvent) => {
    if (event.key === BUST_KEY || event.key === CACHE_KEY) {
      onInvalidate();
    }
  };

  window.addEventListener("storage", onStorage);

  let channel: BroadcastChannel | null = null;
  if ("BroadcastChannel" in window) {
    channel = new BroadcastChannel(CHANNEL);
    channel.onmessage = () => onInvalidate();
  }

  return () => {
    window.removeEventListener("storage", onStorage);
    channel?.close();
  };
}
