import { useState, useRef, useEffect } from "react";

const logos = [
  { src: "./AirShow.jpg", alt: "Singapore Airshow" },
  { src: "./IMDEX.jpg", alt: "IMDEX" },
  { src: "./F1.jpg", alt: "Formula 1" },
  { src: "./Golf.jpg", alt: "Golf" },
  { src: "./SG_Water_Week.jpg", alt: "Singapore Water Week" },
  { src: "./WorldHealthSummit.jpg", alt: "World Health Summit" },
  { src: "./EnergyWeek.jpg", alt: "Energy Week" },
  { src: "./MediaCorp.jpg", alt: "MediaCorp" },
  { src: "./DBAccessAsia.jpeg", alt: "DB Access Asia" },
];

export default function Carousel() {
  const visibleCount = 3;
  const clonedStart = logos.slice(-visibleCount);
  const clonedEnd = logos.slice(0, visibleCount);
  const fullList = [...clonedStart, ...logos, ...clonedEnd];

  const [index, setIndex] = useState(visibleCount);
  const [transition, setTransition] = useState(true);
  const trackRef = useRef(null);

  // Move to next/previous slide
  const handleNext = () => {
    if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => prev + 1);
        setTransition(true);
    };

  const handlePrev = () => {
    if (isAnimating) return;
        setIsAnimating(true);
        setIndex((prev) => prev - 1);
        setTransition(true);
  };

  // Attach transitionend listener once
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = () => {
      if (index === fullList.length - visibleCount) {
        setTransition(false);
        setIndex(visibleCount);
      } else if (index === 0) {
        setTransition(false);
        setIndex(logos.length);
      }
    };

    track.addEventListener("transitionend", onTransitionEnd);
    return () => track.removeEventListener("transitionend", onTransitionEnd);
    // eslint-disable-next-line
  }, [index, fullList.length, visibleCount]);

  // Re-enable transition after jump (prevents flicker)
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  // Calculate transform and track width
  const translate = `translateX(-${(100 / fullList.length) * index}%)`;
  const transitionStyle = transition ? "transform 0.5s ease-in-out" : "none";
  const trackWidth = `${(100 / visibleCount) * fullList.length}%`;

  const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        const track = trackRef.current;
        const onTransitionEnd = () => {
            setIsAnimating(false);
            // ... existing logic for looping ...
        };
        track.addEventListener("transitionend", onTransitionEnd);
        return () => track.removeEventListener("transitionend", onTransitionEnd);
    }, []);


  return (
    <div className="w-full bg-base-200 py-8 overflow-hidden mb-8">
      <h2 className="text-center text-2xl font-bold mb-6">
        Events We've Served
      </h2>
      <div className="relative flex items-center justify-center">
        <button onClick={handlePrev} disabled={isAnimating} className="btn btn-circle btn-outline absolute left-10 z-10">
          ❮
        </button>
        <div className="overflow-hidden w-[80%]">
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: translate,
              transition: transitionStyle,
              width: trackWidth,
            }}
          >
            {fullList.map((logo, idx) => (
              <div
                key={idx}
                className="w-[calc(100%/3)] flex items-center justify-center p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} disabled={isAnimating} className="btn btn-circle btn-outline absolute right-10 z-10">
          ❯
        </button>
      </div>
    </div>
  );
}
