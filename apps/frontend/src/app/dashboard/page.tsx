import Link from "next/link";
import styles from "./page.module.css";

const teamMembers = [
  {
    initials: "JU",
    name: "Jesse U.",
    role: "Frontend Developer",
    color: "#f5c55a",
    tags: ["You", "React", "UI delivery"],
  },
  {
    initials: "AK",
    name: "Aisha K.",
    role: "Product Designer",
    color: "#c4b5fd",
    tags: ["Wireframes", "Design QA"],
  },
  {
    initials: "MT",
    name: "Marcus T.",
    role: "Product Manager",
    color: "#86efac",
    tags: ["Sprint lead", "Scope"],
  },
  {
    initials: "DN",
    name: "Daniel N.",
    role: "Backend Developer",
    color: "#93c5fd",
    tags: ["API", "Data layer"],
  },
];

const assessmentHistory = [
  {
    title: "Frontend Developer Assessment",
    date: "Submitted Apr 18, 2026",
    score: "84%",
    note: "Passed above the 70% benchmark and unlocked team assignment.",
  },
  {
    title: "Collaboration Readiness Review",
    date: "Completed Apr 19, 2026",
    score: "Ready",
    note: "Profile and motivation reviewed for Sprint 13 placement.",
  },
];

const timeline = [
  {
    title: "Kickoff call scheduled",
    meta: "Apr 25, 2026 · 7:00 PM WAT",
    note: "Meet your squad, confirm roles, and align on deliverables for the first three days.",
  },
  {
    title: "Discovery and scope lock",
    meta: "Apr 27, 2026",
    note: "Designer and PM finalize the first flow while engineering sets up the stack.",
  },
  {
    title: "Mid-sprint review",
    meta: "May 1, 2026",
    note: "Demo progress, tighten scope, and confirm what will ship by demo day.",
  },
];

const actionItems = [
  { step: "01", title: "Profile completed", note: "Role, level, and motivation submitted.", state: "Done" },
  { step: "02", title: "Assessment passed", note: "You cleared the score threshold for team placement.", state: "Done" },
  { step: "03", title: "Join WhatsApp group", note: "Enter the squad channel before kickoff starts.", state: "Pending" },
  { step: "04", title: "Review project brief", note: "Skim success metrics and delivery expectations.", state: "Pending" },
];

export default function DashboardPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}></span>
            TeamForge
          </Link>

          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/onboarding" className={styles.navLink}>
              Onboarding
            </Link>
            <Link href="/assessment" className={styles.navLink}>
              Assessment
            </Link>
            <Link href="/dashboard" className={`${styles.navLink} ${styles.navLinkActive}`}>
              Dashboard
            </Link>
          </nav>

          <div className={styles.actions}>
            <Link href="/auth/login" className={styles.ghostButton}>
              Switch account
            </Link>
            <Link href="/assessment" className={styles.primaryButton}>
              Open assessment
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroCard}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot}></span>
                Sprint 13 dashboard
              </div>
              <h1 className={styles.heroTitle}>
                You&apos;re matched and
                <span className={styles.accent}> ready to ship.</span>
              </h1>
              <p className={styles.heroCopy}>
                Your assessment is cleared, your team is formed, and your next
                milestone is joining the squad channel before kickoff. Everything
                you need for this sprint is tracked here.
              </p>

              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>84%</div>
                  <div className={styles.metricLabel}>Latest assessment score</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>Team Alpha-3</div>
                  <div className={styles.metricLabel}>Current squad</div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricValue}>4 / 4</div>
                  <div className={styles.metricLabel}>Current team seats filled</div>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.statusRail}>
            <div className={styles.statusHeader}>
              <h2 className={styles.statusTitle}>Current status</h2>
              <span className={styles.statusBadge}>Matched</span>
            </div>

            <div className={styles.progressCard}>
              <div className={styles.progressLabelRow}>
                <span>Sprint readiness</span>
                <strong>78%</strong>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: "78%" }}></div>
              </div>
            </div>

            <div className={styles.stack}>
              <div className={styles.miniStat}>
                <div>
                  <div className={styles.miniLabel}>Role</div>
                  <div className={styles.miniValue}>Frontend Developer</div>
                </div>
                <span className={styles.statePill}>Confirmed</span>
              </div>
              <div className={styles.miniStat}>
                <div>
                  <div className={styles.miniLabel}>WhatsApp access</div>
                  <div className={styles.miniValue}>Unlocked after joining</div>
                </div>
                <span className={styles.statePill}>Pending</span>
              </div>
              <div className={styles.miniStat}>
                <div>
                  <div className={styles.miniLabel}>Next live event</div>
                  <div className={styles.miniValue}>Kickoff in 1 day</div>
                </div>
                <span className={styles.scorePill}>On track</span>
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.grid}>
          <div className={styles.leftColumn}>
            <div className={styles.teamCard}>
              <div className={styles.sectionTop}>
                <div>
                  <span className={styles.sectionLabel}>Team details</span>
                  <h2 className={styles.sectionTitle}>Your sprint squad</h2>
                </div>
                <p className={styles.sectionText}>
                  Group assignment, live channel access, and the people you are
                  building with this cycle.
                </p>
              </div>

              <div className={styles.teamHeaderCard}>
                <div>
                  <h3 className={styles.teamName}>Team Alpha-3 · Fintech Pulse</h3>
                  <div className={styles.teamMeta}>
                    Building a portfolio-ready dashboard MVP for finance
                    analytics. Sprint window: Apr 25 to May 8, 2026.
                  </div>
                </div>
                <a href="https://chat.whatsapp.com" className={styles.linkButton}>
                  Join WhatsApp
                </a>
              </div>

              <div className={styles.membersGrid}>
                {teamMembers.map((member) => (
                  <div key={member.name} className={styles.memberCard}>
                    <div className={styles.memberTop}>
                      <div
                        className={styles.avatar}
                        style={{ background: member.color }}
                      >
                        {member.initials}
                      </div>
                      <div>
                        <div className={styles.memberName}>{member.name}</div>
                        <div className={styles.memberRole}>{member.role}</div>
                      </div>
                    </div>
                    <div className={styles.pillRow}>
                      {member.tags.map((tag) => (
                        <span key={tag} className={styles.pill}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.splitPanels}>
              <div className={styles.historyCard}>
                <div className={styles.sectionTop}>
                  <div>
                    <span className={styles.sectionLabel}>Assessment history</span>
                    <h2 className={styles.sectionTitle}>Recent attempts</h2>
                  </div>
                </div>

                <div className={styles.historyList}>
                  {assessmentHistory.map((item) => (
                    <div key={item.title} className={styles.historyItem}>
                      <div>
                        <div className={styles.itemValue}>{item.title}</div>
                        <div className={styles.historyMeta}>{item.date}</div>
                        <div className={styles.itemSubtle}>{item.note}</div>
                      </div>
                      <span className={styles.scorePill}>{item.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.timelineCard}>
                <div className={styles.sectionTop}>
                  <div>
                    <span className={styles.sectionLabel}>Timeline</span>
                    <h2 className={styles.sectionTitle}>Upcoming moments</h2>
                  </div>
                </div>

                <div className={styles.timelineList}>
                  {timeline.map((item) => (
                    <div key={item.title} className={styles.timelineItem}>
                      <div>
                        <div className={styles.itemValue}>{item.title}</div>
                        <div className={styles.timelineMeta}>{item.meta}</div>
                        <div className={styles.itemSubtle}>{item.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.rightColumn}>
            <div className={styles.profileCard}>
              <div className={styles.sectionTop}>
                <div>
                  <span className={styles.sectionLabel}>Profile summary</span>
                  <h2 className={styles.sectionTitle}>Account snapshot</h2>
                </div>
                <Link href="/onboarding" className={styles.secondaryButton}>
                  Edit profile
                </Link>
              </div>

              <div className={styles.profileList}>
                <div className={styles.profileItem}>
                  <div>
                    <div className={styles.itemLabel}>Full name</div>
                    <div className={styles.itemValue}>Jesse Ukaegbu</div>
                  </div>
                </div>
                <div className={styles.profileItem}>
                  <div>
                    <div className={styles.itemLabel}>Email</div>
                    <div className={styles.itemValue}>jesse@example.com</div>
                  </div>
                </div>
                <div className={styles.profileItem}>
                  <div>
                    <div className={styles.itemLabel}>Role and level</div>
                    <div className={styles.itemValue}>
                      Frontend Developer · Intermediate
                    </div>
                    <div className={styles.itemSubtle}>
                      Interested in product thinking, polished UI, and shipping
                      under sprint deadlines.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.sectionTop}>
                <div>
                  <span className={styles.sectionLabel}>Next actions</span>
                  <h2 className={styles.sectionTitle}>What to do now</h2>
                </div>
              </div>

              <div className={styles.actionList}>
                {actionItems.map((item) => (
                  <div key={item.step} className={styles.actionItem}>
                    <div className={styles.actionStep}>{item.step}</div>
                    <div>
                      <div className={styles.itemValue}>{item.title}</div>
                      <div className={styles.itemSubtle}>{item.note}</div>
                    </div>
                    <div
                      className={
                        item.state === "Done"
                          ? styles.actionStateDone
                          : styles.actionStatePending
                      }
                    >
                      {item.state}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.rightRailCard}>
              <h3 className={styles.smallTitle}>Sprint notes</h3>
              <div className={styles.bulletList}>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot}></span>
                  Team capacity and WhatsApp access are only shown after passing
                  the assessment.
                </div>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot}></span>
                  Your dashboard should help you see profile, team status, and
                  assessment progress at a glance.
                </div>
                <div className={styles.bullet}>
                  <span className={styles.bulletDot}></span>
                  Sample data is used here for now, so this page is ready to be
                  connected to real API responses next.
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
