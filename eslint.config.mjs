
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

/**
 * SIGNORA AI — ESLint Configuration
 *
 * Framework: Next.js 15
 * Language: TypeScript
 * ESLint: 9 (Flat Config)
 *
 * Design reference: design.md
 *
 * Ensures code quality across cinematic components,
 * GSAP animations, interactive sections, and
 * accessible UI implementations.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "node_modules/**",
      "next-env.d.ts",
    ],
  },

  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),
];

export default eslintConfig;
