<p align="center">
  <a href="https://icons.totakit.com">
    <img src="https://raw.githubusercontent.com/totakit/brand/main/logos/logo-transparent-512.png" width="120" alt="totakit" />
  </a>
</p>

<h1 align="center">totakit icons</h1>

<p align="center">
  The icon library that treats every pixel like it matters.<br/>
  <strong>6 styles. Optical precision. Built for humans and AI agents.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@totakit/icons"><img src="https://img.shields.io/npm/v/@totakit/icons?color=0a0a0a&label=npm&labelColor=0a0a0a" alt="npm version" /></a>
  <a href="https://github.com/totakit/icons/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-0a0a0a?labelColor=0a0a0a" alt="MIT License" /></a>
  <a href="https://icons.totakit.com"><img src="https://img.shields.io/badge/browse-icons.totakit.com-0a0a0a?labelColor=0a0a0a" alt="Browse Icons" /></a>
</p>

<p align="center">
  <a href="https://icons.totakit.com">Browse Icons</a> ·
  <a href="#install">Install</a> ·
  <a href="#usage">Usage</a> ·
  <a href="#styles">6 Styles</a> ·
  <a href="#cdn">CDN</a> ·
  <a href="#why-totakit">Why totakit?</a>
</p>

---

## What makes this different

Every icon library gives you SVGs. We give you SVGs that are **mathematically correct**.

- **Optical stroke compensation** — curved strokes are perceived thinner than straight ones. We compensate automatically. The same science used in professional typeface design (Helvetica, Inter, SF Pro), applied to icons.
- **6 styles from 1 definition** — outline, solid, duotone, thin, bold, micro. Every icon works in every style. No gaps. No "coming soon."
- **Micro variants** — at 12–16px, most icons become blobs. Ours have hand-tuned simplified geometry that stays readable at tiny sizes.
- **Weight normalization** — a thin arrow and a heavy shield appear side by side without one screaming louder than the other.
- **Pixel hinting** — at non-multiple sizes (16px, 20px, 32px), coordinates snap to pixel boundaries. No fuzzy lines.
- **AI-native** — every icon is searchable by meaning, available via MCP server, and works headlessly via CLI.

None of this is marketing. It's math. Every formula is documented in our [design docs](https://github.com/totakit/icons-base/docs/MATH.md).

---

## Install

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

function Toolbar() {
  return (
    <nav>
      <Check size={20} color="green" />
      <X size={20} color="red" />
      <Plus />
      <Minus />
      <ArrowRight />
    </nav>
  )
}
```

Every icon is a React component with `forwardRef`, full TypeScript support, and all standard SVG props.

## Styles

Import from the style you need. Tree-shaking ensures you only ship what you use.

```tsx
import { ArrowRight } from '@totakit/icons'           // outline (default)
import { ArrowRight } from '@totakit/icons/solid'
import { ArrowRight } from '@totakit/icons/duotone'
import { ArrowRight } from '@totakit/icons/thin'
import { ArrowRight } from '@totakit/icons/bold'
import { ArrowRight } from '@totakit/icons/micro'
```

| Style | Stroke | Best for |
|-------|--------|----------|
| **Outline** | 1.5px | Default UI, navigation, toolbars |
| **Solid** | Filled | Buttons, active states, emphasis |
| **Duotone** | Two-tone | Dashboards, illustrations, marketing |
| **Thin** | 1.0px | Elegant interfaces, large sizes |
| **Bold** | 2.0px | Small sizes, dark backgrounds, high contrast |
| **Micro** | 2.0px + simplified | 12–16px rendering, favicons, badges |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `color` | `string` | `'currentColor'` | Stroke/fill color |
| `strokeWidth` | `number` | Style-dependent | Override stroke width |

Plus every prop from `SVGProps<SVGSVGElement>` — `className`, `style`, `onClick`, `aria-label`, etc.

## CDN

No build step. No npm. Just a URL.

```html
<!-- SVG (default: outline, 24px) -->
<img src="https://icons.totakit.com/svg/arrow-right.svg" alt="" />

<!-- With options -->
<img src="https://icons.totakit.com/svg/arrow-right.svg?style=solid&size=32&color=ef4444" alt="" />

<!-- In CSS -->
.icon {
  mask-image: url('https://icons.totakit.com/svg/check.svg');
  mask-size: contain;
  background-color: currentColor;
}
```

Served from Cloudflare's edge. Cached forever. Free.

## Raw SVG

Don't use React? Import the SVG string directly.

```js
// Vite / webpack with ?raw
import svg from '@totakit/icons/svg/outline/arrow-right.svg?raw'
```

Or use the metadata for tooling:

```js
import icons from '@totakit/icons/meta/icons.json'
// → [{ name: 'arrow-right', category: 'arrows', tags: [...] }, ...]
```

## For AI Agents

totakit icons ship with an MCP server. AI agents can search and retrieve icons by meaning — no npm install required.

```bash
npx @totakit/mcp-server
```

```
Agent: "I need an icon that represents danger"
→ search_icons({ query: "danger" })
→ Returns: alert-triangle, shield-alert, zap, flame, skull
→ Each with full SVG, ready to embed
```

## Why totakit?

We built this because existing icon libraries are collections of hand-drawn SVGs. They look great at 24px in a Figma mockup. Then you render them at 16px on a dark background and half of them turn into blurry mush.

totakit icons separate **definition** from **rendering**. Icons are stored as geometric primitives with optical metadata. The rendering engine computes the right stroke weight, the right pixel alignment, the right simplification — for every size, every style, every context.

The result: icons that look consistent whether they're 12px in a mobile tab bar or 64px in a hero section. Whether they're outline or solid. Whether they're rendered by React, a CDN, or an AI agent.

This is what icon infrastructure looks like when you treat it as an engineering problem, not a design problem.

## Contributing

We welcome contributions. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Icon requests and votes: [icons.totakit.com/request](https://icons.totakit.com/request)

## License

[MIT](LICENSE) © [totakit](https://totakit.com)

---

<p align="center">
  <sub>Your files never leave your device. · <a href="https://totakit.com">totakit.com</a></sub>
</p>
