import "./Loading.css";

// Classic Loading Dots
export function Loading({ section }) {
  return (
    <div className={`loading-container ${section}`}>
      <div className="classic-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

// Skeleton Loader
export function Skeleton({
  section,
  blocks = 1,
  type = "column",
  margin = "none",
  height,
  width
}) {
  return (
    <div className={`${section}`}>
      <div className={`skeleton-${type} skeleton-${margin}`}>
        {Array.from({ length: blocks }).map((_, index) => (
          <div
            key={index}
            className="skeleton"
            style={{ height: height, width: width }}
          ></div>
        ))}
      </div>
    </div>
  );
}