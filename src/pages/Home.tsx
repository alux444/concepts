import { Link } from "react-router-dom";
import { getNavTree } from "../lib/docs";

export function Home(): React.ReactElement {
  const navTree = getNavTree();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 gradient-text">Concepts</h1>
      <p className="text-text-secondary text-lg mb-8">
        Technical learnings, notes, and interactive examples.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {navTree.map(({ category, items }) => (
          <div key={category} className="card">
            <h2 className="text-lg font-semibold text-text-primary mb-1">
              {category}
            </h2>
            <p className="text-sm text-text-muted mb-3">
              {items.length} {items.length === 1 ? "entry" : "entries"}
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/docs/${item.slug}`}
                    className="text-sm text-text-secondary hover:text-primary no-underline transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
