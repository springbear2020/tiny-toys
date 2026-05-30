# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, proxies /self-hub → localhost:8888)
npm run build     # Production build (output: dist/)
npm run preview   # Preview production build locally
```

No test suite or linter is configured.

## Architecture

**Stack:** Vue 3 (Composition API + `<script setup>`) · Vite 8 · Tailwind CSS 3 (class-based dark mode) · Pinia 3 · Vue Router 5 · Axios · Font Awesome 7

**Routing:** Hash-based history (`createWebHashHistory`). All page routes are lazy-loaded. Page transitions use a router-view `<transition>` wrapper in `PageBody.vue`. A global loading indicator (300ms debounce) shows on navigation via `router.beforeEach`/`afterEach` in `App.vue`.

**API layer** (`src/utils/request.js`): Axios instance with `VITE_APP_BASE_API` as base URL. Request interceptor attaches `X-Open-Token` from env. Response interceptor unwraps `res.data.data` when `res.data.code === 0`, throws on non-zero codes. All API functions live in `src/api/`.

**State management:** Single Pinia store — `dictStore` (`src/stores/dictStore.js`). Fetches category and tag dictionaries on app mount (`App.vue` calls `initDict()`). Uses a `loaded` flag to prevent re-fetching. Maps are consumed by card components (e.g., `BlogCard`) to resolve category/tag IDs to display names.

**Composables (3):**
- `useDarkMode` — reads/writes `localStorage.theme`, toggles `dark` class on `<html>`, falls back to `prefers-color-scheme`
- `usePagination(fetchApi, pageSize)` — generic pagination + infinite scroll state machine. Exposes `list`, `loading`, `loadingMore`, `hasMore`, `loadMore()`. Calls `fetchApi(page, pageSize)` expecting `{ list, total }`
- `useGlobalSearch` — debounces keyword input (300ms), calls `searchMineResources`, exposes `visible`, `results`, keyboard navigation helpers

**InfiniteSection pattern** (`src/components/InfiniteSection.vue`): The core reusable component for listing pages. Composes `usePagination` with an `IntersectionObserver` (200px rootMargin for pre-loading). Accepts `apiFn`, `pageSize`, `gridClass`, and two scoped slots: `#skeleton` (shown during initial load) and `#content` (receives `{ list }`). Every list view (Blog, Project, Book) follows this pattern — see `src/views/blog/index.vue` for the canonical example.

**Global search:** `GlobalSearchModal` triggers via `Ctrl+K` or the search button in the header. `PageHeader` dispatches a `global-search-open` custom event on the window, which the modal listens for.

**Dark mode float:** A draggable floating button (`DarkModeFloat.vue`) that auto-snaps to the nearest screen edge on drag release. Position persists in `localStorage`.

**Environment variables** (Vite prefix `VITE_APP_`):
| Variable | Development | Production |
|---|---|---|
| `VITE_APP_TITLE` | `春天熊の知行录(DEV)` | `春天熊の知行录` |
| `VITE_APP_BASE_API` | `/self-hub/open` (proxied) | `https://api.springbear.cn/self-hub/open` |
| `VITE_APP_OPEN_TOKEN` | set | not set (prod expects backend auth) |

**Placeholder views:** `src/views/sentence/` and `src/views/archive/` are stubs with expected API response shapes documented in comments — they need full implementations.
