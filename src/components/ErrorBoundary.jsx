import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Optionally log to an external service
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { errorMessage } = this.state;
      return (
        <div className="ErrorBoundary">
          <div>😕</div>
          <p>{this.props.fallbackMessage || "Oops! Looks like we hit a snag."}</p>
          <p>{errorMessage || "Best grab your brolly just in case!"}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.defaultProps = {
  fallbackMessage: "Something went wrong. Please try again later.",
};

export default ErrorBoundary;