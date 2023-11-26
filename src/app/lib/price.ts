interface CacheItem {
  value: number;
  timestamp: number;
}

let cache: Record<string, CacheItem> = {};

// Function to clear cache
const clearCache = () => {
  cache = {};
};

const cacheClearInterval = 3600000; // 1 hour in milliseconds
setInterval(clearCache, cacheClearInterval);

const cacheDuration = 300000; // Cache duration in milliseconds (5 minutes)

export const getPrice = async (address: string): Promise<number> => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  if (!api_key) {
    throw new Error("API key is not set in environment variables.");
  }

  const cachedData = cache[address];
  if (cachedData && Date.now() - cachedData.timestamp < cacheDuration) {
    return cachedData.value;
  }

  try {
    const response = await fetch(
      `https://public-api.birdeye.so/public/price?address=${address}`,
      {
        method: "GET",
        headers: { "X-API-KEY": api_key },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const value = data.data.value;

    cache[address] = { value, timestamp: Date.now() };

    return value;
  } catch (error) {
    console.error("Error fetching price data:", error);
    return 0;
  }
};
