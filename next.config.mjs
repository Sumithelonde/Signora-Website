
/**
 * SIGNORA AI — Next.js Configuration
 *
 * Website: Cinematic, multi-page static experience
 * Architecture: Next.js App Router
 * Deployment: Static export
 *
 * Design reference: design.md
 *
 * The website uses client-side cinematic animations,
 * GSAP ScrollTrigger, interactive visual storytelling,
 * and optional locally hosted media assets.
 *
 * No production backend is required.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Generate a completely static website.
   *
   * Run `npm run build` to create the /out directory.
   * Deploy /out to any static hosting provider.
   */
  output: 'export',

  /**
   * Enable additional React development checks.
   */
  reactStrictMode: true,

  /**
   * Generate directory-style routes.
   *
   * Example:
   * /technology/
   * /solutions/
   * /research/
   * /about/
   */
  trailingSlash: true,

  /**
   * Disable server-side image optimization.
   *
   * Required for static exports.
   * Use optimized WebP/AVIF assets and responsive
   * image sizing for cinematic illustrations.
   */
  images: {
    unoptimized: true,
  },

  /**
   * Disable the X-Powered-By response header
   * when applicable.
   */
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
