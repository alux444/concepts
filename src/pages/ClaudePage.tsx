import codingContent from "../assets/coding.md?raw";
import cssTricksContent from "../assets/css-tricks.md?raw";
import decomposerContent from "../assets/decomposer.md?raw";
import plannerContent from "../assets/planner.md?raw";
import standardsContent from "../assets/standards.md?raw";

interface SkillDownload {
  label: string;
  fileName: string;
  content: string;
}

const skills: SkillDownload[] = [
  { label: "Coding", fileName: "coding.md", content: codingContent },
  { label: "CSS Tricks", fileName: "css-tricks.md", content: cssTricksContent },
  { label: "Decomposer", fileName: "decomposer.md", content: decomposerContent },
  { label: "Planner", fileName: "planner.md", content: plannerContent },
  { label: "Standards", fileName: "standards.md", content: standardsContent },
];

function downloadSkillFile(skill: SkillDownload): void {
  const fileBlob = new Blob([skill.content], { type: "text/markdown;charset=utf-8" });
  const objectUrl = URL.createObjectURL(fileBlob);

  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = skill.fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  URL.revokeObjectURL(objectUrl);
}

export function ClaudePage(): React.ReactElement {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 gradient-text">Claude Skills</h1>
      <p className="text-text-secondary text-lg mb-8">
        Download the skill files used for Claude workflows.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.fileName} className="card">
            <h2 className="text-lg font-semibold text-text-primary mb-3">{skill.label}</h2>
            <button
              type="button"
              onClick={() => downloadSkillFile(skill)}
              className="btn btn-primary"
            >
              📥 Download {skill.fileName}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}