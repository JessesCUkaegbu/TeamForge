import Link from "next/link";
import styles from "../auth.module.css";

export default function LoginPage() {
  return (
    <main className={styles.pageShell}>
      <div className={styles.frame}>
        <section className={styles.brandPanel}>
          <div className={styles.brandTop}>
            <Link href="/" className={styles.brandLink}>
              <span className={styles.brandMark}></span>
              TeamForge
            </Link>
            <Link href="/" className={styles.backLink}>
              Back home
            </Link>
          </div>

          <div className={styles.brandBody}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot}></span>
              Return to your sprint
            </div>
            <h1 className={styles.heroTitle}>
              Pick up where your
              <span className={styles.heroAccent}> team left off.</span>
            </h1>
            <p className={styles.heroText}>
              Log in to check your cohort, continue your assessment, and get back
              into the work with your squad.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoStat}>2 weeks</div>
                <div className={styles.infoLabel}>Sprint rhythm</div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoStat}>6 builders</div>
                <div className={styles.infoLabel}>Per matched team</div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoStat}>1 dashboard</div>
                <div className={styles.infoLabel}>Everything in one place</div>
              </div>
            </div>
          </div>

          <div className={styles.brandBottom}>
            <div className={styles.quoteCard}>
              <p className={styles.quote}>
                &ldquo;The structure kept our team moving. No ghosting, no vague
                goals, just momentum.&rdquo;
              </p>
              <div className={styles.quoteMeta}>
                Marcus T. · Product Designer · Sprint 12
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formPanel}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <span className={styles.kicker}>Welcome back</span>
              <h2 className={styles.formTitle}>Log in to TeamForge</h2>
              <p className={styles.formCopy}>
                Enter your details to access your team dashboard and cohort
                updates.
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="you@example.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={styles.input}
                  placeholder="Enter your password"
                />
              </div>

              <div className={styles.helperRow}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  Keep me signed in
                </label>
                <Link href="/auth/register" className={styles.textLink}>
                  Forgot password?
                </Link>
              </div>

              <button type="submit" className={styles.submitButton}>
                Enter dashboard
                <span aria-hidden="true">→</span>
              </button>
            </form>

            <ul className={styles.bulletList}>
              <li className={styles.bulletItem}>
                <span className={styles.bulletIcon}></span>
                Resume your role assessment if you have not completed it yet.
              </li>
              <li className={styles.bulletItem}>
                <span className={styles.bulletIcon}></span>
                Review cohort announcements and sprint milestones in one place.
              </li>
            </ul>

            <p className={styles.switchText}>
              New to TeamForge?{" "}
              <Link href="/auth/register" className={styles.textLink}>
                Create your account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
