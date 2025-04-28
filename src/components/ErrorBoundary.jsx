import { Component } from "react";
import { toast } from "sonner";
import { Landing } from "../pages/Landing"; // Assuming path to Landing

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to render fallback UI
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // You can integrate logging to external service here
    // logErrorToService(error, errorInfo);
  }

  componentDidUpdate(prevProps, prevState) {
    // Only trigger toast when entering error state
    if (this.state.hasError && !prevState.hasError) {
      toast.error(
        this.state.errorMessage || this.props.fallbackMessage
      );
    }
  }

  render() {
    const { hasError, errorMessage } = this.state;
    const { fallbackMessage } = this.props;

    if (hasError) {
      return (
        <Landing errorMessage={errorMessage || fallbackMessage} />
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.defaultProps = {
  fallbackMessage: "Something went wrong. Please try again later.",
};

export default ErrorBoundary;