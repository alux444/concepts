---
name: better-tooling
description: >
  Use this skill whenever you are about to perform file search, code search, file discovery,
  JSON/YAML parsing, diffing, repo analysis, or any shell-based file operation inside a coding
  agent task. This skill replaces slow default approaches (grep,
  find, cat, python -c json.load) with faster purpose-built CLI tools. Trigger whenever you
  would reach for grep, find, ls -R, cat, or python/node to parse config, even if not
  explicitly asked to be fast. Do not use this skill if the required tools are not installed;
  check first with "which tool-name".
---

# better-tooling

A drop-in set of faster CLI tools for coding agent workflows. **Only use these tools if they
are already installed.** Before using any tool, verify with `which <tool>`. If a tool is
missing, fall back to the standard equivalent silently — do not ask the user to install anything
unless they ask why.

## Availability check (run once per session, early)

```bash
which rg fd ast-grep tokei jq yq bat delta 2>/dev/null
```

If all eight respond with paths, all tools are available. Proceed with this skill fully.
If some are missing, use only the ones present and fall back for the rest.

---

## Tool Reference

### 1. `rg` — ripgrep (replaces `grep -r`)

Fast regex search. Always prefer over `grep`.

```bash
# Basic search
rg "pattern" path/

# Search specific file types only
rg "pattern" --type py

# Show context lines
rg "pattern" -C 3

# List only filenames with matches
rg -l "pattern"

# Fixed string (no regex), useful for symbols
rg -F "exact.method.name"

# Search hidden files/dirs too
rg --hidden "pattern"
```

**When to use**: Any "find where X is used / defined / referenced" task.

---

### 2. `fd` — fast find (replaces `find`)

```bash
# Find files by name pattern
fd "pattern"

# Find by extension
fd -e ts
fd -e py -e pyi

# Find in a specific directory
fd "config" src/

# Find directories only
fd -t d "components"

# Exclude directories
fd -e ts --exclude node_modules
```

**When to use**: Any file discovery task — locating configs, finding entry points, listing files of a type.

---

### 3. `ast-grep` (`sg`) — structural code search (replaces complex grep patterns)

Searches and rewrites code by AST structure, not text. More precise than regex for code.

```bash
# Find all calls to a function (JS/TS)
sg -p 'fetchData($$$)' --lang ts

# Find all class definitions (Python)
sg -p 'class $NAME:' --lang py

# Find all async functions
sg -p 'async function $NAME($$$) { $$$ }' --lang js

# Find specific import usage
sg -p 'import { $X } from "$MOD"' --lang ts

# Count matches (like grep -c)
sg -p 'console.log($$$)' --lang js | wc -l

# Replace pattern (dry-run first)
sg -p 'old_func($X)' -r 'new_func($X)' --lang py
```

**When to use**: Finding all usages of a function/class/pattern, refactoring across files, understanding call graphs. Far more reliable than regex for nested or multi-line patterns.

---

### 4. `tokei` — repo stats (replaces `wc -l` loops)

```bash
# Overview of entire repo by language
tokei

# Specific directory
tokei src/

# Machine-readable JSON output
tokei --output json

# Sort by lines of code
tokei --sort code
```

**When to use**: First thing when orienting to a new or unfamiliar repo. Gives language breakdown, file counts, and code/comment/blank ratios instantly.

---

### 5. `jq` — JSON processor (replaces python -c / node -e for JSON)

```bash
# Pretty-print
jq . file.json

# Extract a field
jq '.dependencies' package.json

# Filter array
jq '.[] | select(.status == "active")' data.json

# Get keys
jq 'keys' config.json

# Compact output (no whitespace)
jq -c '.items[]' data.json

# From stdin (e.g. API response)
curl ... | jq '.result.items[0].name'
```

**When to use**: Any time you're reading, filtering, or transforming JSON — configs, API responses, lock files, tsconfig, package.json.

---

### 6. `yq` — YAML processor (same idea as jq, for YAML)

```bash
# Read a field
yq '.name' Chart.yaml

# Read nested
yq '.spec.containers[0].image' deployment.yaml

# Update a value (in-place)
yq -i '.version = "2.0.0"' Chart.yaml

# Convert YAML to JSON
yq -o=json . config.yaml

# Multi-document YAML
yq 'select(.kind == "Deployment")' k8s.yaml
```

**When to use**: CI configs, Kubernetes manifests, Helm charts, docker-compose, any `.yaml`/`.yml` file.

---

### 7. `bat` — better cat (replaces `cat` for reading files)

```bash
# View file with syntax highlighting + line numbers
bat src/main.py

# Plain output (no decorations) — use when piping
bat -p src/main.py | rg "pattern"

# Show specific line range
bat -r 40:80 src/main.py

# Multiple files
bat src/*.ts
```

**When to use**: Reading source files to understand them. The line numbers make it easy to reference specific locations in follow-up tool calls.

---

### 8. `delta` — better diff (replaces raw `git diff` output)

```bash
# Use with git diff
git diff | delta

# Side-by-side view
git diff | delta --side-by-side

# Compare two files
delta file_a.py file_b.py

# Diff from a commit
git show HEAD~1 | delta
```

**When to use**: When reviewing or presenting code changes to the user, or when analyzing what changed between two versions of a file.

---

## Recommended Workflows

### Orient to a new repo

```bash
tokei                          # understand scope and languages
fd -e md README                # find readme
fd "package.json" -d 2         # find package roots
```

### Find where a function is defined and called

```bash
# Definition (structural)
sg -p 'function $NAME($$$)' --lang js src/

# All call sites
rg "myFunction(" --type js -l
```

### Parse a config before editing

```bash
yq . docker-compose.yml        # understand structure
jq '.scripts' package.json     # check available scripts
```

### Review a patch before applying

```bash
git diff HEAD | delta --side-by-side
```

---

## Fallback table

| Situation                | Preferred | Fallback                            |
| ------------------------ | --------- | ----------------------------------- | --------------- |
| `ast-grep` not installed | `sg`      | `rg` with careful regex             |
| `fd` not installed       | `fd`      | `find . -name "pattern"`            |
| `jq` not installed       | `jq`      | `python3 -c "import json,sys; ..."` |
| `yq` not installed       | `yq`      | `python3 -c "import yaml,sys; ..."` |
| `bat` not installed      | `bat`     | `cat`                               |
| `tokei` not installed    | `tokei`   | `find . -name "\*.py"               | wc -l` per type |
