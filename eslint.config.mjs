import { defineConfig, globalIgnores } from "eslint/config"
import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"

export default defineConfig([
  // Next.js core rules (performance + best practices)
  ...nextCoreWebVitals,

  // TypeScript + React (Next.js)
  ...nextTypeScript,

  // Ignore patterns
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),
])
