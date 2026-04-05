import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Clock, Target, BarChart3, Sparkles, Settings } from "lucide-react";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">Nexus</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition">
              Dashboard
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="inline-block mb-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
            style={{ opacity: 1 - scrollY / 500 }}
          >
            ✨ Built for MacBook Neo
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Unlock Your Mac's{" "}
            <span className="text-accent">Full Potential</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Nexus is your intelligent companion for macOS. Organize your workflow, boost productivity, and experience Mac like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Enter Nexus
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg font-semibold text-foreground hover:bg-secondary transition"
            >
              Learn More
            </a>
          </div>

          {/* Hero Image/Graphic */}
          <div
            className="relative mt-16 h-96 bg-gradient-to-b from-secondary to-background rounded-2xl border border-border overflow-hidden"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-accent" />
                </div>
                <p className="text-muted-foreground font-medium">Your productivity hub awaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
            Powerful Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Your Productivity Dashboard
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Real-time insights and powerful controls at your fingertips
          </p>

          <div className="bg-secondary border border-border rounded-2xl p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Focus Mode</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Minimize distractions and maximize output with intelligent focus sessions
                </p>
                <div className="w-full h-20 bg-gradient-to-r from-accent/10 to-accent/5 rounded flex items-center justify-center text-xs text-muted-foreground">
                  Session Progress
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Analytics</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Track your productivity patterns and identify optimization opportunities
                </p>
                <div className="w-full h-20 bg-gradient-to-r from-accent/10 to-accent/5 rounded flex items-center justify-center text-xs text-muted-foreground">
                  Your Stats
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Quick Tasks</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Organize and track your daily tasks with intelligent prioritization
                </p>
                <div className="w-full h-20 bg-gradient-to-r from-accent/10 to-accent/5 rounded flex items-center justify-center text-xs text-muted-foreground">
                  Your Tasks
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground">Mac Control</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Access your Mac settings and shortcuts from one elegant interface
                </p>
                <div className="w-full h-20 bg-gradient-to-r from-accent/10 to-accent/5 rounded flex items-center justify-center text-xs text-muted-foreground">
                  Quick Access
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
            >
              Open Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Mac Experience?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of MacBook Neo users who are already boosting their productivity
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-muted-foreground text-sm">
          <p>© 2024 Nexus. Built for MacBook Neo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for macOS to deliver instant performance and smooth interactions",
  },
  {
    icon: Target,
    title: "Focus Sessions",
    description: "Create distraction-free work environments with customizable focus modes",
  },
  {
    icon: BarChart3,
    title: "Productivity Insights",
    description: "Understand your work patterns with beautiful analytics and recommendations",
  },
  {
    icon: Clock,
    title: "Smart Task Management",
    description: "Intelligently organize and prioritize your daily objectives",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Get intelligent suggestions to optimize your workflow and Mac usage",
  },
  {
    icon: Settings,
    title: "Mac Integration",
    description: "Seamlessly control your Mac settings and access system features",
  },
];
