<h1 align="center">@totakit/icons</h1>

<p align="center">
  <strong>Open-source icons with optical precision — 6 styles, one definition.</strong><br/>
  <em>Stroke-compensated. Weight-normalized. Pixel-hinted.</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@totakit/icons"><img src="https://img.shields.io/npm/v/@totakit/icons?style=flat-square&label=npm" alt="npm"></a>
  <a href="https://github.com/totakit/icons/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/totakit/icons/ci.yml?style=flat-square&label=CI" alt="CI"></a>
  <a href="https://github.com/totakit/icons/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License"></a>
  <a href="https://icons.totakit.com"><img src="https://img.shields.io/badge/Browse-icons.totakit.com-6366f1?style=flat-square" alt="Browse"></a>
</p>

---

## Installation

```bash
npm install @totakit/icons
```

```bash
pnpm add @totakit/icons
```

```bash
yarn add @totakit/icons
```

## Usage

```tsx
import { ArrowRight, Check, Plus, X, Minus } from '@totakit/icons'

function App() {
  return (
    <nav>
      <ArrowRight size={20} />
      <Check size={20} color="green" />
      <X size={20} color="red" />
      <Plus />
      <Minus />
    </nav>
  )
}
```

Every icon is a React component with `forwardRef`, full TypeScript types, and all standard `SVGProps<SVGSVGElement>`.

## Styles

Each icon ships in 6 styles. Import from the style subpath — tree-shaking ensures you only bundle what you use.

```tsx
import { ArrowRight } from '@totakit/icons'           // outline (default)
import { ArrowRight } from '@totakit/icons/solid'
import { ArrowRight } from '@totakit/icons/duotone'
import { ArrowRight } from '@totakit/icons/thin'
import { ArrowRight } from '@totakit/icons/bold'
import { ArrowRight } from '@totakit/icons/micro'
```

| Style | Stroke | Use case |
|-------|--------|----------|
| Outline | 1.5px | Default UI, navigation, toolbars |
| Solid | Filled | Buttons, active states, emphasis |
| Duotone | Two-tone | Dashboards, illustrations |
| Thin | 1.0px | Elegant interfaces, large sizes |
| Bold | 2.0px | Small sizes, dark backgrounds |
| Micro | 2.0px simplified | 12–16px rendering, favicons, badges |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `color` | `string` | `'currentColor'` | Stroke/fill color |
| `strokeWidth` | `number` | Style-dependent | Override stroke width |

All `SVGProps<SVGSVGElement>` are also accepted — `className`, `style`, `onClick`, `aria-label`, etc.

## Raw SVG

For non-React usage, import SVG strings directly:

```js
import svg from '@totakit/icons/svg/outline/arrow-right.svg?raw'
```

## Metadata

Icon metadata is available as JSON for tooling and search:

```js
import icons from '@totakit/icons/meta/icons.json'
import categories from '@totakit/icons/meta/categories.json'
```

## CDN

Use icons without a build step:

```html
<img src="https://icons.totakit.com/svg/arrow-right.svg" alt="" />
<img src="https://icons.totakit.com/svg/check.svg?style=solid&size=32" alt="" />
```

Served from Cloudflare edge. Cached immutably.

## Package Structure

```
@totakit/icons/
├── dist/
│   ├── index.js              ← Barrel (re-exports outline/*)
│   ├── outline/              ← Default style
│   ├── solid/
│   ├── duotone/
│   ├── thin/
│   ├── bold/
│   ├── micro/
│   ├── svg/                  ← Raw SVG files
│   │   ├── outline/
│   │   ├── solid/
│   │   └── ...
│   └── meta/                 ← Metadata JSON
│       ├── icons.json
│       ├── categories.json
│       └── aliases.json
├── package.json
├── README.md
├── CHANGELOG.md
└── LICENSE
```

## Related

| Repository | Description |
|------------|-------------|
| [icons.totakit.com](https://icons.totakit.com) | Browse, search, and preview icons |
| [`@totakit/cli`](https://github.com/totakit/cli) | Command-line interface |
| [`@totakit/mcp-server`](https://github.com/totakit/mcp-server) | AI agent tool layer (MCP) |
| [`@totakit/sdk`](https://github.com/totakit/sdk) | JavaScript/TypeScript SDK |

## Contributing

We welcome contributions. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Icon requests: [icons.totakit.com/request](https://icons.totakit.com/request)

## License

MIT © [totakit](https://totakit.com)

---

<p align="center">
  <sub>© 2026 totakit · <a href="https://totakit.com">totakit.com</a></sub>
</p>
