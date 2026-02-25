import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNavTree } from "../lib/docs";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps): React.ReactElement {
  const location = useLocation();
  const navTree = getNavTree();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string): void => {
    setCollapsed((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const isActive = (slug: string): boolean => {
    return location.pathname === `/docs/${slug}`;
  };

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 border-r border-border-muted bg-bg-primary p-4 overflow-y-auto transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          to="/"
          className="block mb-6 text-lg font-bold gradient-text no-underline"
          onClick={onClose}
        >
          Concepts
        </Link>

        <nav className="flex flex-col gap-1">
          {navTree.map(({ category, items }) => (
            <div key={category} className="mb-2">
              <button
                onClick={() => toggleCategory(category)}
                className="flex items-center justify-between w-full px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-text-muted hover:text-text-secondary bg-transparent border-none cursor-pointer"
              >
                {category}
                <span
                  className={`transition-transform duration-150 ${
                    collapsed[category] ? "-rotate-90" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {!collapsed[category] && (
                <div className="flex flex-col gap-0.5 mt-0.5">
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/docs/${item.slug}`}
                      onClick={onClose}
                      className={`block px-3 py-1.5 text-sm rounded-md no-underline transition-colors duration-150 ${
                        isActive(item.slug)
                          ? "bg-bg-secondary text-primary font-medium"
                          : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
