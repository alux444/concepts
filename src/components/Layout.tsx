import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Layout(): React.ReactElement {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center h-12 px-4 border-b border-border-muted bg-bg-primary lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-1 text-text-secondary hover:text-text-primary bg-transparent border-none cursor-pointer text-xl leading-none"
          aria-label="Open sidebar"
        >
          ☰
        </button>
        <span className="ml-3 text-sm font-semibold gradient-text">Concepts</span>
      </div>

      {/* Main content */}
      <main className="lg:ml-64 pt-12 lg:pt-0">
        <div className="max-w-4xl mx-auto px-6 py-8 lg:py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
