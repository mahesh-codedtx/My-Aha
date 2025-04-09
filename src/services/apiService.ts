export const fetchLandingScreenData = async (pageNumber: number = 1) => {
  try {
    const response = await fetch(
      `https://catalog-service-cdn.api.aha.firstlight.ai/catalog/storefront/landingscreen?ipr=true&ivg=false&sfInfo=true&itvod=true&acl=ta&reg=in&dt=web&cPageNumber=${pageNumber}&cPageSize=5`,
      {
        method: "GET",
        headers: {
          "sec-uh-ua-platform": "Android",
          Referer: "https://www.aha.video",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
          "sec-ch-ua":
            '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
          "sec-ch-ua-mobile": "?1",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const result = await response.json();
    return result.data; // Return only the data needed
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
