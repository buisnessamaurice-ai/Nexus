import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, CheckCircle2, Clock, BarChart3, Sparkles, Plus, X } from "lucide-react";

export default function Dashboard() {
  const [focusActive, setFocusActive] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design new features", completed: false, priority: "high" },
    { id: 2, title: "Review code changes", completed: true, priority: "medium" },
    { id: 3, title: "Optimize performance", completed: false, priority: "high" },
    { id: 4, title: "Update documentation", completed: false, priority: "low" },
  ]);
  const [newTask, setNewTask] = useState("");

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Math.max(...tasks.map(t => t.id), 0) + 1,
        title: newTask,
        completed: false,
        priority: "medium"
      }]);
      setNewTask("");
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const completionRate = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-lg text-foreground">Nexus Dashboard</span>
          </div>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground">Your productivity command center is ready</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Focus Mode Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-accent/10 to-background border border-accent/20 rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Focus Mode</h2>
                <p className="text-muted-foreground">Eliminate distractions, maximize productivity</p>
              </div>
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Session Duration
                </label>
                <div className="flex gap-2">
                  {[15, 25, 45, 90].map(minutes => (
                    <button
                      key={minutes}
                      className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition"
                    >
                      {minutes}m
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setFocusActive(!focusActive)}
                className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                  focusActive
                    ? "bg-destructive text-destructive-foreground hover:opacity-90"
                    : "bg-accent text-accent-foreground hover:opacity-90"
                }`}
              >
                {focusActive ? (
                  <>
                    <X className="w-5 h-5" />
                    Stop Focus Session
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Start Focus Session
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-secondary border border-border rounded-xl p-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Task Completion</p>
              <p className="text-3xl font-bold text-foreground">{completionRate}%</p>
            </div>
            <div className="w-full h-2 bg-background rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Completed</span>
                <span className="font-semibold text-foreground">{completedCount}/{tasks.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Focus Sessions</span>
                <span className="font-semibold text-foreground">5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Quick Tasks */}
          <div className="bg-background border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">Today's Tasks</h3>
            </div>

            <div className="space-y-3 mb-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg group hover:bg-secondary/80 transition"
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-5 h-5 rounded border-2 transition flex items-center justify-center ${
                        task.completed
                          ? "bg-accent border-accent"
                          : "border-border hover:border-accent"
                      }`}
                    >
                      {task.completed && <CheckCircle2 className="w-4 h-4 text-accent-foreground" />}
                    </div>
                  </button>
                  <span
                    className={`flex-1 ${
                      task.completed
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }`}
                  >
                    {task.title}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      task.priority === "high"
                        ? "bg-destructive/10 text-destructive"
                        : task.priority === "medium"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {task.priority}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
                placeholder="Add a new task..."
                className="flex-1 px-3 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                onClick={addTask}
                className="px-3 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Insights */}
          <div className="bg-background border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-semibold text-foreground">Insights</h3>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Peak Productivity Hours</p>
                <div className="flex gap-1 h-16 items-end">
                  {[35, 42, 28, 65, 58, 45, 52, 38].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-accent/30 rounded-t transition hover:bg-accent/50"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Weekly Progress</p>
                <p className="text-2xl font-bold text-foreground mb-2">24 tasks completed</p>
                <p className="text-sm text-accent font-medium">↑ 15% from last week</p>
              </div>

              <button className="w-full px-4 py-2 bg-secondary border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary/80 transition">
                View Detailed Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Mac Control Center */}
        <div className="bg-secondary border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground">Mac Control Center</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {macControls.map((control, index) => (
              <button
                key={index}
                className="bg-background border border-border rounded-lg p-4 hover:shadow-lg transition hover:border-accent/50 text-center"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <control.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-sm font-medium text-foreground">{control.name}</p>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const macControls = [
  { name: "Settings", icon: Sparkles },
  { name: "System", icon: BarChart3 },
  { name: "Shortcuts", icon: Zap },
  { name: "Apps", icon: Sparkles },
  { name: "Files", icon: Clock },
  { name: "Search", icon: BarChart3 },
  { name: "Notifications", icon: Zap },
  { name: "Display", icon: Sparkles },
];
