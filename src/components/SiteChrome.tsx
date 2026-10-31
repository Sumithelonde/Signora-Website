'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { brand, navigation } from '@/data/content';
import { sound } from './SoundEngine';

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Technology', href: '/technology' },
  { label: 'Industries', href: '/industries' },
  { label: 'Research', href: '/research' },
  { label: 'Impact', href: '/impact' },
  { label: 'Future Scope', href: '/future' },
  { label: 'About', href: '/about' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }
      if (event.key !== 'Tab') return;
      const navItems = mobileNavRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      const focusable = [menuButtonRef.current, ...(navItems ? Array.from(navItems) : [])].filter((item): item is HTMLElement => Boolean(item));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.requestAnimationFrame(() => mobileNavRef.current?.querySelector<HTMLElement>('a[href]')?.focus());
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    const main = document.querySelector<HTMLElement>('main');
    const footer = document.querySelector<HTMLElement>('footer');
    if (main) main.inert = open;
    if (footer) footer.inert = open;
    return () => {
      document.body.classList.remove('nav-open');
      if (main) main.inert = false;
      if (footer) footer.inert = false;
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="shell header-inner">
        <Link
          className="wordmark"
          href="/"
          aria-label="SIGNORA AI home"
          onClick={() => sound.playClick(1400)}
        >
          <span className="wordmark-mark" aria-hidden="true">S</span>
          <span className="wordmark-text">
            SIGNORA <span className="wordmark-highlight">AI</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href || pathname === `${href}/`;
            return (
              <Link
                key={label}
                href={href}
                className={isActive ? 'is-current' : ''}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => sound.playClick(1200)}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <Link
            className="header-cta button button--primary"
            href="/partners"
            onClick={() => sound.playClick(1500)}
          >
            <span>Partner with us</span>
            <span className="cta-arrow" aria-hidden="true">↗</span>
          </Link>

          <button
            ref={menuButtonRef}
            className={`menu-toggle${open ? ' is-active' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => {
              sound.playClick(open ? 900 : 1300);
              setOpen(!open);
            }}
          >
            <span className="menu-bar" />
            <span className="menu-bar" />
          </button>
        </div>
      </div>

      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        className={`mobile-nav${open ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-nav-inner">
          <div className="mobile-nav-links">
            {navigation.map(({ label, href }, index) => {
              const isActive = pathname === href || pathname === `${href}/`;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`mobile-nav-item${isActive ? ' is-current' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => {
                    sound.playClick(1000 + index * 60);
                    setOpen(false);
                  }}
                >
                  <span className="mobile-item-index">0{index + 1}</span>
                  <span className="mobile-item-label">{label}</span>
                  <span className="mobile-item-arrow" aria-hidden="true">↗</span>
                </Link>
              );
            })}
          </div>
          <div className="mobile-nav-footer">
            <p className="mobile-footer-tagline">{brand.tagline}</p>
            <a
              href={`mailto:${brand.email}`}
              className="mobile-footer-email"
              onClick={() => sound.playClick(1200)}
            >
              {brand.email} ↗
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="wordmark wordmark--footer" href="/">
            <span className="wordmark-mark" aria-hidden="true">S</span>
            <span className="wordmark-text">
              SIGNORA <span className="wordmark-highlight">AI</span>
            </span>
          </Link>
          <p className="footer-description">
            Advancing Indian Sign Language spatial and visual communication for essential public information through verified, retrieval-first AI architecture.
          </p>
          <div className="footer-status-pill">
            <span className="status-live-dot" />
            <span>Research-led prototype · Not yet legally registered</span>
          </div>
        </div>

        <div className="footer-links-group">
          <span className="footer-heading">Platform directory</span>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navigation.slice(1).map(({ label, href }) => (
              <Link key={label} href={href} className="footer-nav-link">
                <span>{label}</span>
                <span className="link-hover-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-contact">
          <span className="footer-heading">Start a conversation</span>
          <p className="footer-contact-copy">
            We collaborate with transit authorities, accessibility researchers, Deaf community educators, and display manufacturers.
          </p>
          <a
            className="footer-email-link"
            href={`mailto:${brand.email}`}
            onClick={() => sound.playClick(1400)}
          >
            <span>{brand.email}</span>
            <span className="email-arrow" aria-hidden="true">↗</span>
          </a>
          <span className="footer-location-tag">Nagpur, Maharashtra, India</span>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span className="footer-copy-text">
          © {new Date().getFullYear()} SIGNORA AI. Designed with precision for sensory accessibility.
        </span>
        <span className="footer-disclaimer-text">
          All architectural concepts are clearly distinguished from production deployments. Research assets released upon verification.
        </span>
      </div>
    </footer>
  );
}

export function ScrollEnhancer() {
  const progressRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (reduced) {
      elements.forEach(element => element.classList.add('is-revealed'));
      return;
    }

    document.documentElement.classList.add('motion-ready');
    const siblingPositions = new Map<Element, number>();
    elements.forEach(element => {
      const parent = element.parentElement;
      if (!parent) return;
      const position = siblingPositions.get(parent) ?? 0;
      element.style.setProperty('--reveal-delay', `${Math.min(position * 80, 240)}ms`);
      siblingPositions.set(parent, position + 1);
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reduced.matches) return;

    let frame = 0;
    let x = 50;
    let y = 36;
    const update = () => {
      frame = 0;
      document.documentElement.style.setProperty('--pointer-x', `${x.toFixed(2)}%`);
      document.documentElement.style.setProperty('--pointer-y', `${y.toFixed(2)}%`);
    };
    const handlePointer = (event: PointerEvent) => {
      x = (event.clientX / window.innerWidth) * 100;
      y = (event.clientY / window.innerHeight) * 100;
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('pointermove', handlePointer, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointer);
    };
  }, []);

  return (
    <>
      <div className="page-grain" aria-hidden="true" />
      <div className="page-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
    </>
  );
}
