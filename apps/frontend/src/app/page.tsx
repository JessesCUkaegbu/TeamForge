import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <div className={styles.brand}>
          <span className={styles.spark} />
          TeamFormation
        </div>
        <nav className={styles.links}>
          <a href="/how-it-works">How it Works</a>
          <a href="/sample-projects">Sample Projects</a>
          <a href="/faq">FAQ</a>
        </nav>
        <div className={styles.actions}>
          <a className={styles.ghost} href="/auth/login">Login</a>
          <a className={styles.solid} href="/auth/register">Sign up</a>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <p className={styles.eyebrow}>Build real skills with real teams</p>
          <h1>
            Find your crew. Ship real projects. Grow faster together.
          </h1>
          <p className={styles.sub}>
            A team formation platform that matches developers, designers, and product managers into
            real-world collaboration groups. You learn by building, not by waiting.
          </p>
          <div className={styles["cta-row"]}>
            <a className={styles.cta} href="/auth/register">Get Started</a>
            <a className={styles.secondary} href="/how-it-works">How it Works</a>
          </div>
        </div>
        <div className={styles["hero-card"]}>
          <div className={styles["card-top"]}>
            <div className={styles.pill}>Live Cohort</div>
            <div className={styles.pulse} />
          </div>
          <div className={styles["card-body"]}>
            <h3>Collab Sprint: 2 Weeks</h3>
            <p>Match with a small team, complete a short assessment, and join your WhatsApp group.</p>
            <div className={styles.stats}>
              <div>
                <span className={styles.stat}>6</span>
                <span className={styles.label}>Max Members</span>
              </div>
              <div>
                <span className={styles.stat}>3</span>
                <span className={styles.label}>Roles</span>
              </div>
              <div>
                <span className={styles.stat}>1</span>
                <span className={styles.label}>Project</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.value}>
        <div className={styles["value-card"]}>
          <h3>Why this exists</h3>
          <p>
            Learning alone is hard. We bring structure, accountability, and collaboration so you can
            grow with a team that complements your strengths.
          </p>
        </div>
        <div className={styles["value-card"]}>
          <h3>What you get</h3>
          <ul>
            <li>Role-based assessments to match your path</li>
            <li>Small, balanced teams with clear slots</li>
            <li>WhatsApp groups unlocked only after passing</li>
          </ul>
        </div>
        <div className={styles["value-card"]}>
          <h3>Made for builders</h3>
          <p>
            Developers, designers, and PMs learn faster by shipping together. You will ship something
            you can show.
          </p>
        </div>
      </section>

      <section className={styles.explore}>
        <div className={styles["explore-left"]}>
          <h2>Explore before you join</h2>
          <p>Get a clear picture of what the platform does in 60 seconds.</p>
          <div className={styles["explore-links"]}>
            <a href="/how-it-works">How it Works</a>
            <a href="/sample-projects">Sample Projects</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
        <div className={styles["explore-right"]}>
          <div className={styles.tile}>
            <h4>Step 1</h4>
            <p>Create your profile and pick your role.</p>
          </div>
          <div className={styles.tile}>
            <h4>Step 2</h4>
            <p>Take a quick assessment and pass.</p>
          </div>
          <div className={styles.tile}>
            <h4>Step 3</h4>
            <p>Join your WhatsApp group and build.</p>
          </div>
        </div>
      </section>

      <section className={styles["cta-band"]}>
        <div>
          <h2>Ready to build with real people?</h2>
          <p>Get matched into a team and start your first sprint.</p>
        </div>
        <a className={styles.cta} href="/auth/register">Join the Next Cohort</a>
      </section>
    </main>
  );
}
