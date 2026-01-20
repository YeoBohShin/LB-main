import { useState, useRef, useEffect } from "react";

const logos = [
  { src: "./Aramco_Team_Series.png", alt: "Aramco Team Series" },
  { src: "./Asia_Clean_Energy_Summit.png", alt: "Asia Clean Energy Summit" },
  { src: "./Barclays_Singapore_Open.jpg", alt: "Barclays Singapore Open" },
  { src: "./IMDEX.jpg", alt: "IMDEX" },
  { src: "./LivGolf.png", alt: "LivGolf" },
  { src: "./Moutai_Singapore_Open.png", alt: "Moutai Singapore Open" },
  { src: "./Porsche.png", alt: "Porsche" },
  { src: "./Screen_Singapore.jpg", alt: "Screen Singapore" },
  { src: "./Singapore_Airshow.png", alt: "Singapore Airshow" },
  { src: "./Singapore_Arts_Festival.jpg", alt: "Singapore Arts Festival" },
  { src: "./Singapore_International_Cyber_Week.jpg", alt: "Singapore International Cyber Week" },
  { src: "./Singapore_International_Energy_Week.png", alt: "Singapore International Energy Week" },
  { src: "./Singapore_International_Water_Week.png", alt: "Singapore International Water Week" },
  { src: "./SMBC_Singapore_Open.png", alt: "SMBC Singapore Open" },
  { src: "./Women_Tennis_Association.png", alt: "Women Tennis Association" },
  { src: "./World_Cities_Summit.png", alt: "World Cities Summit" },
  { src: "./World_Table_Tennis.png", alt: "World Table Tennis" }
];

export default function Carousel() {
  const [visibleCount, setVisibleCount] = useState(3);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleCount(1); // Small screens
      } else {
        setVisibleCount(3); // Wide screens
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate transform and track width
  const translate = `translateX(-${(100 / fullList.length) * index}%)`;
  const transitionStyle = transition ? "transform 0.5s ease-in-out" : "none";
  const trackWidth = `${(100 / visibleCount) * fullList.length}%`;

  const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        const track = trackRef.current;
        const onTransitionEnd = () => {
            setIsAnimating(false);
        };
        track.addEventListener("transitionend", onTransitionEnd);
        return () => track.removeEventListener("transitionend", onTransitionEnd);
    }, []);


  return (
    <div className="w-full bg-base-200 py-8 overflow-hidden mb-8 relative top-20">
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
                  className="h-32 object-contain bg-white p-4 rounded-2xl shadow-md"
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
