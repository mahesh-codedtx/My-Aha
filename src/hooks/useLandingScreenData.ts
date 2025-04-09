import { useEffect, useState, useCallback, useRef } from "react";
import { fetchLandingScreenData } from "../services/apiService";

export const useLandingScreenData = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const isFetchingRef = useRef(false);

  const fetchData = useCallback(async (pageNumber: number) => {
    if (isFetchingRef.current) {
      console.log('Already fetching data, skipping...');
      return;
    }

    try {
      isFetchingRef.current = true;
      setLoading(true);
      console.log(`Fetching page ${pageNumber}`);
      
      const result = await fetchLandingScreenData(pageNumber);
      console.log('API Response:', result);
      
      // Check if we have data and if it's not empty
      if (!result?.t?.[0]?.c || result.t[0].c.length === 0) {
        console.log('No more content available');
        setHasMore(false);
        return;
      }

      // Check if the new data has any containers with cd arrays
      const hasValidContainers = result.t[0].c.some((container: any) => 
        container?.cd && Array.isArray(container.cd) && container.cd.length > 0
      );

      if (!hasValidContainers) {
        console.log('No valid containers in response');
        setHasMore(false);
        return;
      }

      setData((prevData: any) => {
        if (!prevData) {
          console.log('Setting initial data');
          return result;
        }
        
        console.log('Previous data:', prevData);
        console.log('New data:', result);
        
        // Create a new object with the same structure
        const newData = {
          ...prevData,
          t: [{
            ...prevData.t[0],
            c: [...prevData.t[0].c, ...result.t[0].c]
          }]
        };
        
        console.log('Merged data:', newData);
        return newData;
      });

      // Always set hasMore to true after successful fetch
      setHasMore(true);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError("Failed to fetch data");
      setHasMore(false);
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    fetchData(1);
  }, []);

  const loadMoreData = useCallback(() => {
    console.log('loadMoreData called:', { loading, hasMore, page, isFetching: isFetchingRef.current });
    
    if (!loading && hasMore && !isFetchingRef.current) {
      console.log(`Loading more data, current page: ${page}`);
      const nextPage = page + 1;
      setPage(nextPage);
      fetchData(nextPage);
    } else {
      console.log(`Not loading more. Loading: ${loading}, HasMore: ${hasMore}, IsFetching: ${isFetchingRef.current}`);
    }
  }, [loading, hasMore, page, fetchData]);

  return { data, loading, error, loadMoreData, hasMore };
};
