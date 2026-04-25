import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <header className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <div className={styles.navBrandMark}></div>
          TeamForge
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/how-it-works">How it Works</Link>
          <Link href="/sample-projects">Projects</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
        <div className={styles.navActions}>
          <Link href="/auth/login" className={styles.btnGhost}>
            Log in
          </Link>
          <Link href="/auth/register" className={styles.btnAmber}>
            Sign up <span>→</span>
          </Link>
        </div>
      </header>

      <main className={styles.hero}>
        <section className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot}></span>
            Error 404
          </div>
          <p className={styles.errorCode}>Lost in the sprint queue?</p>
          <h1 className={styles.heroH1}>
            This page isn&apos;t on the <em>board.</em>
          </h1>
          <p className={styles.heroSub}>
            The link may be outdated, the route may have moved, or this page was never part of the current cohort.
            Let&apos;s get you back to somewhere useful.
          </p>
          <div className={styles.heroCtaRow}>
            <Link href="/" className={styles.ctaPrimary}>
              Back to homepage →
            </Link>
            <Link href="/how-it-works" className={styles.ctaSecondary}>
              See how TeamForge works <span className={styles.arrow}>→</span>
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div>
              <div className={styles.heroStatNum}>404</div>
              <div className={styles.heroStatLabel}>Missing route</div>
            </div>
            <div>
              <div className={styles.heroStatNum}>3</div>
              <div className={styles.heroStatLabel}>Helpful paths</div>
            </div>
            <div>
              <div className={styles.heroStatNum}>1</div>
              <div className={styles.heroStatLabel}>Way back in</div>
            </div>
          </div>
        </section>

        <section className={styles.heroRight}>
          <div className={styles.liveCard}>
            <div className={styles.liveBadge}>
              <span className={styles.liveDot}></span> Recovery hub
            </div>
            <h3>Pick up the right thread</h3>
            <p>
              Jump back into the product from one of the most common starting points. Everything below matches
              the current TeamForge flow.
            </p>

            <div className={styles.routeList}>
              <Link href="/" className={styles.routeItem}>
                <span className={styles.routeLabel}>Homepage</span>
                <span className={styles.routeMeta}>Overview and cohort details</span>
              </Link>
              <Link href="/auth/register" className={styles.routeItem}>
                <span className={styles.routeLabel}>Create account</span>
                <span className={styles.routeMeta}>Join the next sprint</span>
              </Link>
              <Link href="/faq" className={styles.routeItem}>
                <span className={styles.routeLabel}>FAQ</span>
                <span className={styles.routeMeta}>Answers to common questions</span>
              </Link>
            </div>

            <div className={styles.cardStats}>
              <div className={styles.cardStat}>
                <div className={styles.cardStatNum}>Home</div>
                <span className={styles.cardStatLabel}>Best first stop</span>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatNum}>Fast</div>
                <span className={styles.cardStatLabel}>No dead ends</span>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatNum}>Live</div>
                <span className={styles.cardStatLabel}>Current routes only</span>
              </div>
            </div>
          </div>

          <div className={styles.miniCard}>
            <div className={styles.miniIcon} style={{ background: "rgba(232,160,32,0.12)" }}>
              ↺
            </div>
            <div>
              <h4>Try a fresh path</h4>
              <p>Use the main navigation or head back home to restart from a known route.</p>
            </div>
          </div>

          <div className={styles.miniCard}>
            <div className={styles.miniIcon} style={{ background: "rgba(34,197,94,0.12)" }}>
              ✓
            </div>
            <div>
              <h4>Everything else is intact</h4>
              <p>Your app shell, typography, and core routes stay consistent with the rest of TeamForge.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>TeamForge</div>
        <ul className={styles.footerLinks}>
          <li>
            <Link href="/how-it-works">How it Works</Link>
          </li>
          <li>
            <Link href="/sample-projects">Projects</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/auth/login">Login</Link>
          </li>
        </ul>
        <div className={styles.footerCopy}>© 2025 TeamForge</div>
      </footer>
    </div>
  );
}
