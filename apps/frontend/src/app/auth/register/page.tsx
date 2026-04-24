import Link from "next/link";
import styles from "../auth.module.css";

export default function RegisterPage() {
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
              New cohort applications open
            </div>
            <h1 className={styles.heroTitle}>
              Build your next
              <span className={styles.heroAccent}> portfolio story.</span>
            </h1>
            <p className={styles.heroText}>
              Join TeamForge to get matched with developers, designers, and
              product managers in a sprint built for real collaboration.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoStat}>Role-based</div>
                <div className={styles.infoLabel}>Assessments that filter for fit</div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoStat}>WhatsApp-first</div>
                <div className={styles.infoLabel}>Fast team communication</div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoStat}>Shipped work</div>
                <div className={styles.infoLabel}>Real output for your portfolio</div>
              </div>
            </div>
          </div>

          <div className={styles.brandBottom}>
            <div className={styles.quoteCard}>
              <p className={styles.quote}>
                &ldquo;One sprint gave me better proof of work than months of
                solo tutorials.&rdquo;
              </p>
              <div className={styles.quoteMeta}>
                Aisha K. · Frontend Developer · Sprint 11
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formPanel}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <span className={styles.kicker}>Join the next cohort</span>
              <h2 className={styles.formTitle}>Create your account</h2>
              <p className={styles.formCopy}>
                Start your application, choose your role, and get ready for the
                assessment stage.
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.splitRow}>
                <div className={styles.field}>
                  <label htmlFor="firstName" className={styles.label}>
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className={styles.input}
                    placeholder="Jesse"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="lastName" className={styles.label}>
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={styles.input}
                    placeholder="Ukaegbu"
                  />
                </div>
              </div>

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
                <label htmlFor="role" className={styles.label}>
                  Primary role
                </label>
                <select id="role" name="role" className={styles.select} defaultValue="">
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="product-manager">Product Manager</option>
                </select>
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
                  placeholder="Create a secure password"
                />
              </div>

              <div className={styles.helperRow}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  I agree to the terms and cohort guidelines
                </label>
              </div>

              <button type="submit" className={styles.submitButton}>
                Start application
                <span aria-hidden="true">→</span>
              </button>
            </form>

            <p className={styles.subtleNote}>
              After signup, you will complete your profile, take a role-based
              assessment, and unlock team matching when you pass.
            </p>

            <p className={styles.switchText}>
              Already have an account?{" "}
              <Link href="/auth/login" className={styles.textLink}>
                Log in instead
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
