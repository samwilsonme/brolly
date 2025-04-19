import "./Loading.css";

export function Loading(page) {
  return (
    <div className={page}>
      <div className="classic-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export function Skeleton({ section, blocks = 1, type = "column", margin = "none" }) {
  return (
    <div className={section}>
      <div className={`skeleton-${type} skeleton-${margin}`}>
      {Array.from({ length: blocks }).map((_, index) => (
        <div key={index} className="skeleton">
        </div>
      ))}
      </div>
    </div>
  );
}