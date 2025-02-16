// components/SpotifyWidget.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../app/spotifywidget.module.css";
import { FaSpotify } from "react-icons/fa";

interface Track {
  name: string;
  artist: string;
  url: string;
  image: string;
}

interface Recommendation {
  track: string;
  artist: string;
  reason: string;
}

interface RecommendationState {
  recommendations: Recommendation[];
  error?: string;
  isCached?: boolean;
}

// Skeleton loading component
const SkeletonLoader = () => (
  <div className={styles.skeletonContainer}>
    <div className={styles.skeletonImage} />
    <div className={styles.skeletonText}>
      <div className={styles.skeletonLine} />
      <div className={styles.skeletonLineShort} />
    </div>
  </div>
);

export default function SpotifyWidget() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [lastTrack, setLastTrack] = useState<Track | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [recommendationState, setRecommendationState] =
    useState<RecommendationState>({
      recommendations: [],
      error: undefined,
      isCached: false,
    });
  const [isLoading, setIsLoading] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  // error handling for recommendations

  useEffect(() => {
    // Load last played track from localStorage
    const savedTrack = localStorage.getItem("lastSpotifyTrack");
    if (savedTrack) setLastTrack(JSON.parse(savedTrack));
  }, []);

  useEffect(() => {
    if (!isExpanded) return;

    const fetchCurrentTrack = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/spotify/current-track");

        if (res.status === 204) {
          // No content
          setCurrentTrack(null);
          return;
        }

        const data = await res.json();
        setCurrentTrack(data);
        localStorage.setItem("lastSpotifyTrack", JSON.stringify(data));

        // Get recommendations with fallback
        try {
          const recRes = await fetch("/api/recommendations", {
            method: "POST",
            body: JSON.stringify({ track: data.name, artist: data.artist }),
          });

          if (!recRes.ok) throw new Error("API Error");

          const recData = await recRes.json();
          setRecommendationState({
            recommendations: recData.recommendations,
            error: undefined,
            isCached: false,
          });

          // Cache successful recommendations
          localStorage.setItem(
            "lastRecommendations",
            JSON.stringify(recData.recommendations)
          );
        } catch (error) {
          console.error("Recommendation error:", error);
          const cached = localStorage.getItem("lastRecommendations");
          setRecommendationState({
            recommendations: cached ? JSON.parse(cached) : [],
            error: "Failed to get fresh recommendations",
            isCached: !!cached,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentTrack();
  }, [isExpanded]);

  const displayTrack = currentTrack || lastTrack;

  return (
    <motion.div
      className={styles.widgetContainer}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.button
        onClick={toggleExpand}
        className={styles.toggleButton}
        animate={{ rotate: isExpanded ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <FaSpotify />
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {isLoading ? (
              <div className={styles.loading}>
                <SkeletonLoader />
                <div className={styles.recommendationsSkeleton}>
                  {[...Array(3)].map((_, i) => (
                    <SkeletonLoader key={i} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className={styles.nowPlaying}>
                  <h3>{currentTrack ? "Right now listening to" : "Last Played"}</h3>
                  {displayTrack ? (
                    <motion.div
                      className={styles.trackInfo}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {/* <img
                        src={displayTrack.image}
                        alt={displayTrack.name}
                        width={64}
                        height={64}
                      />
                      <div>
                        <h4>{displayTrack.name}</h4>
                        <p>{displayTrack.artist}</p>
                      </div> */}
                      <iframe
                        src={`https://open.spotify.com/embed/track/${displayTrack.url}?utm_source=generator`}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="encrypted-media"
                      />
                    </motion.div>
                  ) : (
                    <p>No recent tracks found</p>
                  )}
                </div>

                {recommendationState.recommendations.length > 0 && (
                  <motion.div
                    className={styles.recommendations}
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                  >
                    <h3>
                      Recommendations
                      {recommendationState.isCached && (
                        <span className={styles.cachedBadge}> (Cached)</span>
                      )}
                    </h3>

                    {recommendationState.error && (
                      <div className={styles.recommendationError}>
                        <p>⚠️ {recommendationState.error}</p>
                        {recommendationState.recommendations.length === 0 && (
                          <p>No cached recommendations available</p>
                        )}
                      </div>
                    )}

                    {recommendationState.recommendations.map((rec, index) => (
                      <motion.div
                        key={index}
                        className={styles.recItem}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <h4>{rec.track}</h4>
                        <p>{rec.artist}</p>
                        <p className={styles.reason}>{rec.reason}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
