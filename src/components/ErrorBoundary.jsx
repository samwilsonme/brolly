import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary">
          <div>😕</div>
          <p>Oops! Looks like we hit a snag.</p>
          <p>Best grab your brolly just in case!</p>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;