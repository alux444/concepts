interface SkillDownload {
  label: string;
  name: string;
  archive?: boolean;
}

const skills: SkillDownload[] = [
  { label: "UI interaction design", name: "ui-interaction-design" },
  { label: "UI visual validation", name: "ui-visual-validation", archive: true },
  { label: "CSS styling patterns", name: "css-styling-patterns" },
  { label: "TypeScript code standards", name: "typescript-code-standards" },
  { label: "Swift code standards", name: "swift-code-standards" },
  { label: "Go code standards", name: "go-code-standards" },
  { label: "Command-line tooling", name: "command-line-tooling" },
];

export function AiSkillsPage(): React.ReactElement {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 gradient-text">AI Skills</h1>
      <p className="text-text-secondary text-lg mb-8">
        Download reusable skills for AI coding assistants.
      </p>
      <p className="text-text-secondary mb-8">
        Save each SKILL.md in a folder matching its skill name. Extract ZIP downloads
        to keep the skill and its reference files together.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="card">
            <h2 className="text-lg font-semibold text-text-primary mb-3">{skill.label}</h2>
            <p className="text-text-secondary mb-3 break-all">
              {skill.archive ? `${skill.name}.zip` : `${skill.name}/SKILL.md`}
            </p>
            <a
              href={skill.archive ? `/skills/${skill.name}.zip` : `/skills/${skill.name}/SKILL.md`}
              download={skill.archive ? `${skill.name}.zip` : "SKILL.md"}
              className="btn btn-primary inline-block"
            >
              📥 {skill.archive ? "Download ZIP" : "Download SKILL.md"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
