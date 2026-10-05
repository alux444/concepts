import { execFileSync } from "node:child_process";
import type { IncomingMessage, ServerResponse } from "node:http";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";


const skillArchiveName = "skills/ui-visual-validation.zip";
const skillsDirectory = fileURLToPath(new URL("./public/skills/", import.meta.url));

function createSkillArchive(): Buffer {
  return execFileSync("zip", ["-q", "-r", "-", "ui-visual-validation"], {
    cwd: skillsDirectory,
  });
}

function skillDownloads(createArchive: () => Buffer): Plugin {
  return {
    name: "skill-downloads",

    configureServer(server: ViteDevServer): void {
      server.middlewares.use((
        request: IncomingMessage,
        response: ServerResponse,
        next: (error?: unknown) => void,
      ): void => {
        const requestPath = request.url?.split("?")[0];

        if (requestPath !== `/${skillArchiveName}`) {
          next();
          return;
        }

        try {
          const archive = createArchive();

          response.setHeader("Content-Type", "application/zip");
          response.end(archive);
        } catch (error: unknown) {
          next(error);
        }
      });
    },

    generateBundle(): void {
      this.emitFile({
        type: "asset",
        fileName: skillArchiveName,
        source: createArchive(),
      });
    },
  };
}

export default defineConfig({
  plugins: [
    skillDownloads(createSkillArchive),
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark-default",
              keepBackground: false,
            },
          ],
        ],
      }),
    },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    tailwindcss(),
  ],
  server: {
    port: 8789,
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
