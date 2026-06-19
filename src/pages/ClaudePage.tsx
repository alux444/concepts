interface SkillDownload {
  label: string;
  fileName: string;
  publicPath: string;
}

const skills: SkillDownload[] = [
  { label: "Coding", fileName: "coding.md", publicPath: "/skills/coding.md" },
  { label: "CSS Tricks", fileName: "css-tricks.md", publicPath: "/skills/css-tricks.md" },
  { label: "Decomposer", fileName: "decomposer.md", publicPath: "/skills/decomposer.md" },
  { label: "Planner", fileName: "planner.md", publicPath: "/skills/planner.md" },
  { label: "TypeScript", fileName: "standards-typescript.md", publicPath: "/skills/standards-typescript.md" },
  { label: "Swift", fileName: "standards-swift.md", publicPath: "/skills/standards-swift.md" },
  { label: "Golang", fileName: "standards-golang.md", publicPath: "/skills/standards-golang.md" },
  { label: "Better Tooling", fileName: "better-tooling.md", publicPath: "/skills/better-tooling.md" },
];

export function ClaudePage(): React.ReactElement {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 gradient-text">Claude Skills</h1>
      <p className="text-text-secondary text-lg mb-8">Download the skill files used for Claude workflows.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.fileName} className="card">
            <h2 className="text-lg font-semibold text-text-primary mb-3">{skill.label}</h2>
            <a href={skill.publicPath} download={skill.fileName} className="btn btn-primary inline-block">
              📥 Download {skill.fileName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
