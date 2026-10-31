import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found wrap" aria-labelledby="not-found-title">
      <div className="not-found__panel glass-panel">
        <span className="chapter-label-text">404 / Route not found</span>
        <h1 id="not-found-title">This signal did not reach a page.</h1>
        <p>The address may have changed, or the destination may no longer exist.</p>
        <div className="not-found__actions">
          <Link className="button button--primary" href="/">Return home</Link>
          <Link className="button button--outline" href="/solutions">Explore solutions</Link>
        </div>
      </div>
    </section>
  );
}
