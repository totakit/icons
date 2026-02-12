# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in `@totakit/icons`, report it responsibly.

**Email:** [security@totakit.com](mailto:security@totakit.com)

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Response Timeline

| Action | Timeframe |
|--------|-----------|
| Acknowledgment | 48 hours |
| Initial assessment | 5 business days |
| Fix and disclosure | 30 days (or sooner) |

## Scope

This policy covers the `@totakit/icons` npm package and all generated output (React components, SVG files, metadata JSON).

### In Scope

- XSS vectors in generated SVG output
- Malicious content in SVG strings (script injection, event handlers, external references)
- Supply chain attacks (compromised dependencies, build pipeline)
- Package integrity issues (mismatched checksums, unsigned publishes)

### Out of Scope

- Vulnerabilities in React itself (report upstream)
- Issues in consumer applications using the package
- Social engineering attacks

## Security Guarantees

Every SVG produced by this package is sanitized:

- No `<script>` elements
- No `on*` event handler attributes
- No external references (`xlink:href`, `href="http..."`)
- No `data:` URIs in attributes
- `xmlns="http://www.w3.org/2000/svg"` always present

These guarantees are enforced by automated tests in the build pipeline and verified on every release.

## Supported Versions

Only the latest release is supported with security updates.

## Provenance

Published packages include npm provenance attestations generated via GitHub Actions. Verify with:

```bash
npm audit signatures
```

## Our Commitment

- No legal action against researchers who follow this policy
- Credit in the advisory (unless anonymity is preferred)
- Confirmed vulnerabilities are fixed with priority
