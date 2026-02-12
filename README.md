# @totakit/icons

Open-source icons with 6 styles — outline, solid, duotone, thin, bold, micro.

Built with mathematical precision. Optical corrections. Pixel-perfect at every size.

## Install

```bash
npm install @totakit/icons
```

## Usage

```tsx
import { ArrowRight, Check, Plus } from '@totakit/icons'

function App() {
  return (
    <div>
      <ArrowRight size={24} />
      <Check size={24} color="green" />
      <Plus size={24} />
    </div>
  )
}
```

### Styles

```tsx
// Default (outline)
import { ArrowRight } from '@totakit/icons'

// Specific style
import { ArrowRight } from '@totakit/icons/solid'
import { ArrowRight } from '@totakit/icons/duotone'
import { ArrowRight } from '@totakit/icons/thin'
import { ArrowRight } from '@totakit/icons/bold'
import { ArrowRight } from '@totakit/icons/micro'
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Icon size in pixels |
| `color` | `string` | `'currentColor'` | Icon color |
| `strokeWidth` | `number` | Style-dependent | Stroke width |

Plus all standard `SVGProps<SVGSVGElement>`.

## CDN

```html
<img src="https://icons.totakit.com/svg/arrow-right.svg" alt="Arrow Right" />
<img src="https://icons.totakit.com/svg/arrow-right.svg?style=solid&size=32" alt="Arrow Right" />
```

## License

MIT © [totakit](https://totakit.com)
