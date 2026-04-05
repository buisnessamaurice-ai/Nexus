import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-2 text-accent hover:opacity-80 transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-secondary border border-border rounded-xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-muted-foreground" />
          </div>

          <h1 className="text-5xl font-bold text-foreground mb-3">404</h1>

          <p className="text-xl text-muted-foreground mb-2">
            Page Not Found
          </p>

          <p className="text-sm text-muted-foreground mb-8">
            This page doesn't exist yet. Tell us what you'd like to build here, and we'll create it for you!
          </p>

          <div className="space-y-3">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center w-full px-6 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-secondary transition"
            >
              Return Home
            </Link>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Path: <code className="bg-secondary rounded px-2 py-1 font-mono">{location.pathname}</code>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
