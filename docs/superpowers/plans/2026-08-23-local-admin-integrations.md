# Local Admin And Integrations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a local admin gate and WorkBuddy-style service configuration with direct-local and backend runtime modes.

**Architecture:** Keep the existing single-page shell and backend task APIs. Add a small auth/config layer in `app.js`, render configuration cards from one schema, and branch product/production calls on a persisted runtime mode. Use CSS grid for responsive service cards.

**Tech Stack:** Vanilla HTML/CSS/JavaScript, browser Web Crypto, existing Node HTTP backend.

## Global Constraints
- Never commit real API keys.
- Local admin is UI gating only; show the security limitation.
- Preserve existing backend endpoints and demo fallback behavior.
- Mobile layout must not introduce horizontal scrolling.

### Task 1: Add local auth state and gate
**Files:** Modify `index.html`, `app.js`, `styles.css`.
- Add a login/setup overlay container before the app shell.
- Implement `sha256`, `getAuthState`, `showAuthGate`, `setupAdmin`, `loginAdmin`, `logoutAdmin` in `app.js`.
- On startup call `initAuth()` before rendering dashboard; avatar click opens a menu with logout.
- Add compact overlay/form styles and a warning that this is local-only.
- Verify first-run setup, refresh-login, failed password, and logout in browser.

### Task 2: Replace interface center with unified service cards
**Files:** Modify `app.js`, `styles.css`.
- Define service schema for `seedance`, `llm`, `tts`, `rpa`, plus backend fields and `mode`.
- Render two-column cards with URL, secret, model/voice fields, per-card test, save-all, clear-local-config.
- Mask secrets by default with a show/hide control; persist under `latam-integrations-v2`.
- Display direct-mode warning and backend service status area.
- Verify save/reload, test-button validation, and 390px layout.

### Task 3: Route calls through selected runtime mode
**Files:** Modify `app.js`.
- Add `getRuntimeConfig`, `getRuntimeMode`, `getServiceConfig`, `authHeaders` helpers.
- Keep backend mode in `syncProducts`, `executeProduction`, `publishRun`, and `testBackend`.
- In direct mode, call configured product/LLM/TTS/video/RPA endpoints with JSON payloads and auth header; normalize product arrays and task responses.
- Return clear errors for missing URL/key/model without claiming success.
- Verify missing-config errors and backend-mode regression with the existing local server.

### Task 4: Documentation and verification
**Files:** Modify `README.md`, `progress.md`, `task_plan.md`.
- Document local setup, admin reset, direct-vs-backend security, and exact field mapping.
- Run `node --check app.js`, `node --check server/server.js`, start backend health check, and Playwright desktop/mobile smoke checks.
- Commit changes with a focused message and report actual verification output.
