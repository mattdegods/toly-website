let cache: any = {};

export const getPrice = async (address: string) => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY!;
  const cacheDuration = 300000; // Cache duration in milliseconds (e.g., 300000ms = 5 minutes)

  // Check if data is in cache and not expired
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
    const data = await response.json();
    const value = data.data.value;

    // Update cache
    cache[address] = {
      value: value,
      timestamp: Date.now(),
    };

    return value;
  } catch (error) {
    console.error(error);
    return 0;
  }
};
