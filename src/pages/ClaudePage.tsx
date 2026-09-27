interface SkillDownload {
  label: string;
  name: string;
  references?: string[];
}

const skills: SkillDownload[] = [
  { label: "UI interaction design", name: "ui-interaction-design" },
  { label: "UI visual validation", name: "ui-visual-validation", references: ["scenario-matrix.md"] },
  { label: "CSS styling patterns", name: "css-styling-patterns" },
  { label: "TypeScript code standards", name: "typescript-code-standards" },
  { label: "Swift code standards", name: "swift-code-standards" },
  { label: "Go code standards", name: "go-code-standards" },
  { label: "Command-line tooling", name: "command-line-tooling" },
];

export function ClaudePage(): React.ReactElement {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 gradient-text">Claude Skills</h1>
      <p className="text-text-secondary text-lg mb-8">Download the skill files used for Claude workflows.</p>
      <p className="text-text-secondary mb-8">Save each SKILL.md in a folder matching the skill name shown below.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="card">
            <h2 className="text-lg font-semibold text-text-primary mb-3">{skill.label}</h2>
            <p className="text-text-secondary mb-3 break-all">{skill.name}/SKILL.md</p>
            <a href={`/skills/${skill.name}/SKILL.md`} download="SKILL.md" className="btn btn-primary inline-block">
              📥 Download SKILL.md
            </a>
            {skill.references?.map((fileName) => (
              <div key={fileName} className="mt-3">
                <p className="text-text-secondary mb-3 break-all">Save in {skill.name}/references/</p>
                <a href={`/skills/${skill.name}/references/${fileName}`} download={fileName} className="btn btn-primary inline-block">
                  📥 Download {fileName}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
