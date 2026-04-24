import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* NAV */}
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
          <Link href="/auth/login" className={styles.btnGhost}>Log in</Link>
          <Link href="/auth/register" className={styles.btnAmber}>Sign up <span>→</span></Link>
        </div>
      </header>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot}></span>
            Live Cohort Now Open
          </div>
          <h1 className={styles.heroH1}>
            Ship real work.<br />
            Build with a <em>real team.</em>
          </h1>
          <p className={styles.heroSub}>
            TeamForge matches developers, designers, and product managers into tight-knit squads for 2-week sprints. You don&apos;t study—you ship.
          </p>
          <div className={styles.heroCtaRow}>
            <Link href="/auth/register" className={styles.ctaPrimary}>Join the Next Cohort →</Link>
            <Link href="/how-it-works" className={styles.ctaSecondary}>See how it works <span className={styles.arrow}>→</span></Link>
          </div>
          <div className={styles.heroStats}>
            <div>
              <div className={styles.heroStatNum}>6</div>
              <div className={styles.heroStatLabel}>Members per team</div>
            </div>
            <div>
              <div className={styles.heroStatNum}>2 wks</div>
              <div className={styles.heroStatLabel}>Sprint duration</div>
            </div>
            <div>
              <div className={styles.heroStatNum}>3</div>
              <div className={styles.heroStatLabel}>Roles per team</div>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.liveCard}>
            <div className={styles.liveBadge}>
              <span className={styles.liveDot}></span> Live Cohort · Sprint 12
            </div>
            <h3>Collab Sprint: 2 Weeks</h3>
            <p>Match with a cross-functional squad, pass your role assessment, and get access to your private WhatsApp group.</p>

            <div className={styles.teamAvatars}>
              <div className={styles.avatar} style={{ background: "#3b82f6" }}>JK</div>
              <div className={styles.avatar} style={{ background: "#8b5cf6" }}>AL</div>
              <div className={styles.avatar} style={{ background: "#10b981" }}>RM</div>
              <div className={styles.avatar} style={{ background: "#f59e0b" }}>SP</div>
              <div className={styles.avatar} style={{ background: "#ef4444" }}>DN</div>
              <div className={`${styles.avatar} ${styles.avatarMore}`}>+1</div>
            </div>

            <div className={styles.rolePills}>
              <span className={`${styles.rolePill} ${styles.pillDev}`}>2 Developers</span>
              <span className={`${styles.rolePill} ${styles.pillDesign}`}>2 Designers</span>
              <span className={`${styles.rolePill} ${styles.pillPm}`}>2 PMs</span>
            </div>

            <div className={styles.cardStats}>
              <div className={styles.cardStat}>
                <div className={styles.cardStatNum}>6</div>
                <span className={styles.cardStatLabel}>Max Members</span>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatNum}>3</div>
                <span className={styles.cardStatLabel}>Roles</span>
              </div>
              <div className={styles.cardStat}>
                <div className={styles.cardStatNum}>1</div>
                <span className={styles.cardStatLabel}>Project</span>
              </div>
            </div>
          </div>

          <div className={styles.miniCard}>
            <div className={styles.miniIcon} style={{ background: "rgba(34,197,94,0.12)" }}>✅</div>
            <div>
              <h4>Assessment passed</h4>
              <p>You&apos;re in — WhatsApp group unlocked.</p>
            </div>
          </div>

          <div className={styles.miniCard}>
            <div className={styles.miniIcon} style={{ background: "rgba(232,160,32,0.12)" }}>🚀</div>
            <div>
              <h4>Sprint kicked off</h4>
              <p>Team building a fintech dashboard MVP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection}>
        <div className={styles.sectionInner}>
          <div className={styles.howHeader}>
            <div>
              <div className={styles.sectionLabel}>Process</div>
              <h2 className={styles.sectionH2}>From signup to shipping<br />in four steps</h2>
            </div>
            <p className={styles.howSub}>No fluff. No passive learning. Each cohort is structured for momentum — you start building within days of joining.</p>
          </div>

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNum}>01</div>
              <h4>Create your profile</h4>
              <p>Choose your role — Developer, Designer, or Product Manager — and tell us about your experience level.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>02</div>
              <h4>Pass the assessment</h4>
              <p>Take a short, role-specific assessment designed to measure real skills, not just book knowledge.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>03</div>
              <h4>Meet your team</h4>
              <p>Get matched into a balanced squad of up to 6 people across all three roles. Your WhatsApp group unlocks immediately.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>04</div>
              <h4>Build & ship together</h4>
              <p>Work through a 2-week sprint to deliver a tangible project you can showcase in your portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE / WHY */}
      <section className={styles.valueSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>Why TeamForge</div>
          <div className={styles.valueLayout}>
            <div className={styles.valueCards}>
              <div className={styles.valueCard}>
                <div className={styles.valueCardIcon} style={{ background: "rgba(232,160,32,0.1)" }}>⚡</div>
                <h4>Learn by doing, not watching</h4>
                <p>Traditional courses leave you passive. On TeamForge, every sprint pushes you to apply your skills with real deadlines and real teammates.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueCardIcon} style={{ background: "rgba(59,130,246,0.1)" }}>🧩</div>
                <h4>Balanced, complementary teams</h4>
                <p>Smart matching ensures every team has the right mix of roles. Devs, designers, and PMs need each other — we make sure they find each other.</p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueCardIcon} style={{ background: "rgba(34,197,94,0.1)" }}>📱</div>
                <h4>WhatsApp-first collaboration</h4>
                <p>Your group unlocks after you pass the assessment — no wasted invites, only committed teammates in one familiar, frictionless space.</p>
              </div>
            </div>

            <div className={styles.valueRight}>
              <p className={styles.bigQuote}>
                &ldquo;You don&apos;t learn to swim by reading about it. You learn by <em>getting in the water.</em>&rdquo;
              </p>
              <p className={styles.valueDetail}>That&apos;s the philosophy behind every cohort. We built TeamForge because real collaboration experience is the gap between landing a junior role and actually thriving in one.</p>
              <ul className={styles.checkList}>
                <li><span className={styles.checkIcon}></span> Role-based assessments that match your actual path</li>
                <li><span className={styles.checkIcon}></span> Small teams — max 6 — for real accountability</li>
                <li><span className={styles.checkIcon}></span> Cohort sprints that fit around your schedule</li>
                <li><span className={styles.checkIcon}></span> Portfolio-ready deliverables after every sprint</li>
                <li><span className={styles.checkIcon}></span> Built-in structure, so you don&apos;t have to wing it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className={styles.rolesSection}>
        <div className={styles.sectionInner}>
          <div className={styles.rolesHeader}>
            <div className={styles.sectionLabel}>Who It&apos;s For</div>
            <h2 className={styles.sectionH2}>Three roles. One team. Real output.</h2>
          </div>
          <div className={styles.rolesGrid}>
            <div className={styles.roleCard}>
              <div className={styles.roleIconWrap} style={{ background: "rgba(59,130,246,0.12)" }}>💻</div>
              <h3>Developer</h3>
              <p>Write real code in a cross-functional context. Work with designers on implementation, and PMs on scope — exactly like a real job.</p>
              <div className={styles.roleTags}>
                <span className={styles.roleTag}>Frontend</span>
                <span className={styles.roleTag}>Backend</span>
                <span className={styles.roleTag}>Full-Stack</span>
                <span className={styles.roleTag}>Mobile</span>
              </div>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleIconWrap} style={{ background: "rgba(168,85,247,0.12)" }}>🎨</div>
              <h3>Designer</h3>
              <p>Solve real UX problems and hand off real specs. Move from concept to shipped UI with developers who&apos;ll actually build your designs.</p>
              <div className={styles.roleTags}>
                <span className={styles.roleTag}>UI Design</span>
                <span className={styles.roleTag}>UX Research</span>
                <span className={styles.roleTag}>Prototyping</span>
              </div>
            </div>
            <div className={styles.roleCard}>
              <div className={styles.roleIconWrap} style={{ background: "rgba(34,197,94,0.12)" }}>📋</div>
              <h3>Product Manager</h3>
              <p>Define, prioritize, and own the product. Practice real stakeholder management and agile facilitation with a team that depends on your clarity.</p>
              <div className={styles.roleTags}>
                <span className={styles.roleTag}>Roadmapping</span>
                <span className={styles.roleTag}>Sprints</span>
                <span className={styles.roleTag}>User Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COHORT TIMELINE */}
      <section className={styles.cohortSection}>
        <div className={styles.sectionInner}>
          <div className={styles.cohortInner}>
            <div>
              <div className={styles.sectionLabel}>Sprint Structure</div>
              <h2 className={styles.sectionH2} style={{ marginBottom: "2rem" }}>Two weeks. One project. Shipped.</h2>
              <div className={styles.cohortTimeline}>
                <div className={styles.timelineLine}></div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}>D1</div>
                  <div className={styles.timelineContent}>
                    <h4>Team formation & kickoff</h4>
                    <p>Meet your team, align on roles, and agree on a project direction. WhatsApp group goes live.</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}>D3</div>
                  <div className={styles.timelineContent}>
                    <h4>Discovery & scoping</h4>
                    <p>PM drives research; designers create wireframes; devs set up the stack. Everyone in sync.</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}>D7</div>
                  <div className={styles.timelineContent}>
                    <h4>Mid-sprint check-in</h4>
                    <p>Review progress, unblock each other, adjust scope if needed. Stay tight to the goal.</p>
                  </div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}>D14</div>
                  <div className={styles.timelineContent}>
                    <h4>Ship & showcase</h4>
                    <p>Present your work. Get feedback. Add it to your portfolio. Celebrate what you built.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cohortRight}>
              <div className={styles.cohortBadgeCard}>
                <div className={styles.liveBadge} style={{ marginBottom: "1rem" }}>
                  <span className={styles.liveDot}></span> Next cohort forming
                </div>
                <h3>Collab Sprint #13</h3>
                <p>Applications are open. Teams will be finalized once slots fill — assessments run rolling.</p>
                <div className={styles.cohortFeatures}>
                  <div className={styles.cohortFeature}><span className={styles.featDot}></span> Max 6 members per team</div>
                  <div className={styles.cohortFeature}><span className={styles.featDot}></span> Balanced role mix guaranteed</div>
                  <div className={styles.cohortFeature}><span className={styles.featDot}></span> 2-week sprint cycle</div>
                  <div className={styles.cohortFeature}><span className={styles.featDot}></span> WhatsApp group on passing</div>
                  <div className={styles.cohortFeature}><span className={styles.featDot}></span> Portfolio-ready deliverable</div>
                </div>
              </div>

              <Link href="/auth/register" className={styles.ctaPrimary} style={{ alignSelf: "flexStart" }}>Apply for Sprint #13 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className={styles.socialSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>What Builders Say</div>
          <h2 className={styles.sectionH2}>Teams that shipped together</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialQuote}>
                &ldquo;I&apos;d done 3 bootcamps and still couldn&apos;t show real team experience. One TeamForge sprint later and I had a shipped product and two collaborators who became lifelong contacts.&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.tAvatar} style={{ background: "rgba(59,130,246,0.2)", color: "#93c5fd" }}>AK</div>
                <div>
                  <div className={styles.tName}>Aisha K.</div>
                  <div className={styles.tRole}>Frontend Developer</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialQuote}>
                &ldquo;The assessment kept the team quality high. Everyone showed up prepared. We shipped a real MVP in 14 days — something I couldn&apos;t have done alone or in a class setting.&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.tAvatar} style={{ background: "rgba(168,85,247,0.2)", color: "#c4b5fd" }}>MT</div>
                <div>
                  <div className={styles.tName}>Marcus T.</div>
                  <div className={styles.tRole}>Product Designer</div>
                </div>
              </div>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialQuote}>
                &ldquo;As a PM, I needed real delivery experience — not mock projects. TeamForge gave me a dev and a designer who took direction seriously. The sprint felt like a real startup week.&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.tAvatar} style={{ background: "rgba(34,197,94,0.2)", color: "#86efac" }}>SN</div>
                <div>
                  <div className={styles.tName}>Sade N.</div>
                  <div className={styles.tRole}>Product Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={styles.ctaBand}>
        <div className={styles.sectionInner}>
          <h2>Ready to build with<br />real people?</h2>
          <p>Get matched into a team and ship your first sprint. No passive learning — just real work with real collaborators.</p>
          <div className={styles.ctaBandActions}>
            <Link href="/auth/register" className={styles.ctaPrimary}>Join the Next Cohort →</Link>
            <Link href="/how-it-works" className={styles.ctaSecondary}>Learn more <span className={styles.arrow}>→</span></Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>TeamForge</div>
        <ul className={styles.footerLinks}>
          <li><Link href="/how-it-works">How it Works</Link></li>
          <li><Link href="/sample-projects">Projects</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/auth/login">Login</Link></li>
        </ul>
        <div className={styles.footerCopy}>© 2025 TeamForge</div>
      </footer>
    </div>
  );
}
