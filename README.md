# Bloomcard

## Educational Purpose

This project was created primarily for **educational and learning purposes**.  
While it is well-structured and could technically be used in production, it is **not intended for commercialization**.  
The main goal is to explore and demonstrate best practices, patterns, and technologies in software development.

## Description

**Bloomcard** is an interactive image gallery built entirely with vanilla TypeScript — no frameworks, no runtime dependencies. It presents a collection of full-height photo cards laid out side by side in a horizontal strip. Each card displays a background image and a title label. When the user clicks on a card, it smoothly expands to take up the majority of the available space while the remaining cards shrink down to slim vertical slivers, keeping the full gallery visible at all times.

The active card is tracked exclusively through CSS classes (`card--touched`) toggled by DOM event listeners, meaning there is no external state management layer — the DOM itself is the source of truth. Clicking a different card collapses the currently expanded one and expands the new selection in a single interaction. Only one card can be active at any given time.

The project is structured around a factory-function component pattern: `Card` produces individual card elements with their own encapsulated click handler and a `cleanup()` method for proper listener teardown, while `BloomcardPage` composes those cards into the full gallery layout and delegates lifecycle management to each child. This architecture makes the data flow explicit and keeps every piece of UI self-contained.

On the tooling side, the codebase enforces TypeScript strict mode with `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`, uses ESLint with `typescript-eslint` strict rules, formats with Prettier, and is tested with Jest 30 + jsdom + Testing Library. Pre-commit hooks (Husky + lint-staged) ensure that no unformatted or unlinted code reaches the repository. A GitHub Actions CI pipeline runs lint, type-check, tests, and build on every push and pull request to `main`.

## Technologies used

1. Typescript
2. CSS3
3. HTML5
4. Vite

## Libraries used

#### Dependencies

```
No production dependencies - Pure Vanilla TypeScript
```

#### devDependencies

```
"@eslint/js": "^9.39.2"
"@testing-library/dom": "^10.4.0"
"@testing-library/jest-dom": "^6.6.3"
"@testing-library/user-event": "^14.5.2"
"@types/jest": "^30.0.0"
"@types/node": "^22.0.0"
"eslint": "^9.39.2"
"eslint-config-prettier": "^10.1.8"
"eslint-plugin-prettier": "^5.5.5"
"globals": "^17.3.0"
"husky": "^9.1.7"
"jest": "^30.3.0"
"jest-environment-jsdom": "^30.3.0"
"lint-staged": "^16.2.7"
"prettier": "^3.8.1"
"ts-jest": "^29.4.6"
"typescript": "^5.2.2"
"typescript-eslint": "^8.14.0"
"vite": "^7.1.6"
```

## Getting Started

With the toolchain above in mind, follow these steps to run the gallery locally:

> **Requires Node.js >= 22.** Use `.nvmrc` with `nvm use` to set the correct version automatically.

1. Clone the repository
2. Navigate to the project folder
3. Execute: `npm install`
4. Execute: `npm run dev`

The application will open automatically at `http://localhost:3000`

## Testing

Once the app runs locally, verify behavior with the Jest + jsdom suite:

1. Navigate to the project folder
2. Execute: `npm test`

For coverage report:

```bash
npm run test:coverage
```

## Continuous Integration

The repository ships with a **GitHub Actions** pipeline defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). It runs automatically on every `push` and `pull_request` targeting the `main` branch.

### Pipeline overview

```
                      ┌─── PR or push to main ───┐
                      ▼                          ▼
┌──────────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   lint-and-audit     │─▶│     testing      │─▶│      build       │
│ eslint · type-check  │  │  jest + jsdom    │  │ vite production  │
└──────────────────────┘  └──────────────────┘  └──────────────────┘
```

### Validation jobs (run on every PR and push)

1. **`lint-and-audit`** — `npm run lint` (ESLint with `typescript-eslint` strict + type-checked rules) followed by `npm run type-check` (`tsc --noEmit` against `tsconfig.app.json`).
2. **`testing`** — runs the full Jest 30 + jsdom + Testing Library suite via `npm run test`. Depends on `lint-and-audit`.
3. **`build`** — runs `npm run build` to produce the Vite production bundle (type-check + bundling). Depends on `testing`.

All three jobs run on `ubuntu-latest`, install Node from the version declared in [`.nvmrc`](.nvmrc), and cache `npm` dependencies via `actions/setup-node@v4`.

### Where the pipeline outputs live

| Output                          | Location                                                 |
| ------------------------------- | -------------------------------------------------------- |
| Lint, type-check, and test logs | **Actions** tab on GitHub                                |
| Production bundle (`dist/`)     | Ephemeral, inside the runner (not published as artifact) |

### Running the same checks locally

```bash
# lint-and-audit
npm run lint
npm run type-check

# testing
npm run test

# build
npm run build
```

## Security Audit

### npm audit

Check for vulnerabilities in dependencies:

```bash
npm audit
```

## Known Issues

None at the moment.

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/bloomcard`](https://www.diegolibonati.com.ar/#/project/bloomcard)
