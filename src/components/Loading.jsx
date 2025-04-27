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
  height = "20px", // Default height for skeleton blocks
  width = "100%" // Default width for skeleton blocks
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