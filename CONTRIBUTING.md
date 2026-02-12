# Contributing to @totakit/icons

## Icon Requests

The fastest way to request a new icon:

1. Open an [Icon Request](https://github.com/totakit/icons/issues/new?template=icon_request.yml) issue
2. Describe the icon concept and intended use case
3. Reference existing icons from other libraries if helpful
4. Community upvotes help prioritize

## Reporting Rendering Issues

If an icon renders incorrectly in a specific style, size, or framework:

1. Open a [Rendering Bug](https://github.com/totakit/icons/issues/new?template=rendering_bug.yml) issue
2. Include the icon name, style, and size
3. Include a screenshot showing the issue
4. Specify the framework (React, Vue, Svelte, raw SVG, CDN)

## How Icons Are Built

This repository contains pre-generated output. The rendering engine, icon definitions, and build pipeline live in a separate private repository. Contributors do not need access to the engine to request icons or report issues.

The build pipeline generates:
- React components with `forwardRef` and full TypeScript types
- Raw SVG files for every icon in every style
- Metadata JSON for tooling and search

## Pull Requests

PRs to this repo are limited to:
- Documentation improvements (README, CHANGELOG)
- Package configuration fixes
- CI/CD improvements

Icon additions and rendering fixes are handled through the build pipeline. File an issue instead of a PR for those.

## Commit Convention

```
type(scope): description

Types: feat, fix, docs, chore
Scopes: components, svg, meta, build, ci, docs
```

## CLA

By submitting a pull request, you agree to the [Contributor License Agreement](https://totakit.com/cla).

## Questions

- [Discussions](https://github.com/orgs/totakit/discussions) for general questions
- [Issues](https://github.com/totakit/icons/issues) for bugs and requests
- [hello@totakit.com](mailto:hello@totakit.com) for private inquiries
