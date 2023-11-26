export const getPrice = async (address: string) => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY!;

  try {
    const response = await fetch(
      `https://public-api.birdeye.so/public/price?address=${address}`,
      {
        method: "GET",
        headers: { "X-API-KEY": api_key },
      }
    );
    const data = await response.json();
    return data.data.value;
  } catch (error) {
    console.error(error);
    return 0;
  }
};
