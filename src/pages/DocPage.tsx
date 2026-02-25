import { useParams } from "react-router-dom";
import { getDocBySlug } from "../lib/docs";

export function DocPage(): React.ReactElement {
  const { "*": slug } = useParams();

  if (!slug) {
    return <p className="text-text-muted">No document specified.</p>;
  }

  const doc = getDocBySlug(slug);

  if (!doc) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">Not Found</h1>
        <p className="text-text-secondary">
          No document found for <code className="text-primary">{slug}</code>.
        </p>
      </div>
    );
  }

  const { Component, title, description } = doc;

  return (
    <article>
      <header className="mb-8 pb-6 border-b border-border-muted">
        <h1 className="text-3xl font-bold text-text-primary mb-1">{title}</h1>
        {description && (
          <p className="text-text-secondary text-lg">{description}</p>
        )}
      </header>
      <div className="prose">
        <Component />
      </div>
    </article>
  );
}
