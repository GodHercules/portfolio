# Main Agent Workflow

Use the main agent as the single entrypoint for all future modifications in this repository.

## Required Roles

For broad requests, the main agent should coordinate these specialist roles in parallel when relevant:

- backend
- frontend
- database
- frontend tester
- backend tester
- integration tester
- performance tester
- UI/UX tester
- UI/UX designer
- performance analyst
- best practices analyst
- AI and API integration analyst

If any specialist or validation step finds a defect, the main agent must trigger a narrow correction agent for the affected area, rerun the failed checks, and only finish when the repository is clean or a real blocker is documented.

## Repository Scope

This repository is primarily a localized Next.js frontend. There is no dedicated backend or database layer today, so those roles should confirm that status unless future changes introduce them.

Key areas:

- `src/app`: routes and layouts
- `src/components`: UI, layout, and section components
- `src/data`: portfolio content and profile data
- `src/lib`: GitHub integration, i18n, and shared helpers

## Verification Gate

Before closing any task, the main agent should run:

```powershell
npm run lint
npm run typecheck
npm run build
```

Prefer the combined entrypoint when possible:

```powershell
npm run main-agent:verify
```

If a local Next lock blocks `build`, the main agent should confirm whether it is an active process or a stale artifact, then rerun verification before closing.

## Closeout Rule

Do not say the task is complete while any required check is failing or blocked without explanation. Once the repo is clean, explicitly ask whether the code can be sent to GitHub.
