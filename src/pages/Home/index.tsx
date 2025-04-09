import React, { useEffect, useRef, useCallback, useState } from "react";
import "./index.css";
import ImagescrollContainer from "../../components/ImageScrollContainer";
import HeroCarousel from "../../components/HeroCarousel";
// import { movies } from "../../utils/Home/movies";
// import { kids } from "../../utils/Home/kids";
// import { top10 } from "../../utils/Home/Top10";
// import { actors } from "../../utils/Home/Actors";
// import { upcomingOnAha } from "../../utils/Home/UpcomingOnAha";
// import { genres } from "../../utils/Home/genres";
// import { heroCarousel } from "../../utils/Home/HeroCarousel";
import { useLandingScreenData } from "../../hooks/useLandingScreenData";

const Home = () => {
  const { data, loading, error, loadMoreData, hasMore } =
    useLandingScreenData();
  const observer = useRef<IntersectionObserver | null>(null);
  const lastContainerRef = useRef<HTMLDivElement>(null);
  const debounceTimeoutRef = useRef<number | null>(null);

  const setupObserver = useCallback(() => {
    console.log("Setting up observer:", { loading, hasMore });

    if (loading || !hasMore) {
      console.log(
        "Not setting up observer - loading:",
        loading,
        "hasMore:",
        hasMore
      );
      return;
    }

    if (observer.current) {
      console.log("Disconnecting existing observer");
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        console.log("Intersection observed:", entries[0].isIntersecting);
        if (entries[0].isIntersecting && hasMore && !loading) {
          console.log("Triggering load more...");
          // Clear any existing timeout
          if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
          }

          // Set a new timeout
          debounceTimeoutRef.current = window.setTimeout(() => {
            console.log("Loading more data...");
            loadMoreData();

            // Disconnect observer after triggering load more
            if (observer.current) {
              observer.current.disconnect();
              console.log("Observer disconnected after triggering load more");
            }
          }, 300);
        }
      },
      {
        root: null,
        rootMargin: "300px",
        threshold: 0.1,
      }
    );

    // Small delay to ensure DOM is updated
    setTimeout(() => {
      if (lastContainerRef.current) {
        console.log("Observing last container");
        observer.current?.observe(lastContainerRef.current);
      } else {
        console.log("No last container to observe");
      }
    }, 100);
  }, [loading, hasMore, loadMoreData]);

  // Setup observer when data changes
  useEffect(() => {
    console.log("Data changed, setting up observer");
    setupObserver();
  }, [setupObserver, data]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  if (loading && !data) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data?.t?.[0]?.c) return <p>No data available</p>;

  function containerData(containerNum: number) {
    return data.t[0].c[containerNum];
  }

  // Log current data state
  console.log("Current data in Home:", data);
  console.log("Number of containers:", data.t[0].c.length);

  return (
    <div>
      {data.t[0].c[0] && <HeroCarousel heroCarousel={containerData(0)} />}

      {data.t[0].c.slice(1).map((container: any, index: number) => {
        // Log each container being rendered
        console.log(`Rendering container ${index + 1}:`, container);

        // Skip rendering if container is invalid or cd array is not present
        if (
          !container ||
          !container.cd ||
          !Array.isArray(container.cd) ||
          container.cd.length === 0
        ) {
          console.log(
            `Skipping container ${index + 1} - invalid data or empty cd array`
          );
          return null;
        }

        // Find all valid containers
        const validContainers = data.t[0].c
          .slice(1)
          .filter(
            (c: { cd?: any[] }) =>
              c?.cd && Array.isArray(c.cd) && c.cd.length > 0
          );

        // Get the current container's index in the valid containers array
        const currentValidIndex = validContainers.findIndex(
          (c: { cd?: any[] }) => c === container
        );
        const isLastValidContainer =
          currentValidIndex === validContainers.length - 1;

        console.log(
          `Container ${index + 1} is last valid:`,
          isLastValidContainer,
          "Valid containers count:",
          validContainers.length
        );

        return (
          <div
            key={`container-${index + 1}`}
            className="container-row"
            ref={isLastValidContainer ? lastContainerRef : undefined}
            style={{ minHeight: "200px" }}
          >
            <ImagescrollContainer
              movies={container}
              className={"sample-class"}
            />
          </div>
        );
      })}

      <div style={{ height: "20px", margin: "20px 0", textAlign: "center" }}>
        {loading && <p>Loading more...</p>}
        {/* {!hasMore && (
          <p style={{ fontFamily: "proximaNova,sans-serif" }}>
            No more content to load
          </p>
        )} */}
      </div>

      {/* <HeroCarousel heroCarousel={containerData(0)} />
      <ImagescrollContainer
        movies={containerData(1)}
        className={"sample-class"}
      />
      <ImagescrollContainer
        movies={containerData(2)}
        className={"sample-class"}
      />
      <ImagescrollContainer
        movies={containerData(3)}
        className={"sample-class"}
      />
      <ImagescrollContainer
        movies={containerData(4)}
        className={"sample-class"}
      /> */}

      {/* <ImagescrollContainer movies={kids} className={"kids-class"} />
      <ImagescrollContainer movies={top10} className={"top10-class"} />
      <ImagescrollContainer movies={actors} className={"actor-class"} />
      <ImagescrollContainer
        movies={upcomingOnAha}
        className={"upcoming-aha-class"}
      />
      <ImagescrollContainer movies={genres} className={"genres"} /> */}
    </div>
  );
};

export default Home;
