import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { education, experience, profile, projects, skillGroups } from "./data";
import { asset } from "./media";
import { ProjectVideo } from "./ProjectVideo";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
      <span className="opacity-60">{index} /</span> {children}
    </p>
  );
}

export function Portfolio() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to projects
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-sm text-background">
              AR
            </span>
            {profile.shortName}
          </a>
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={asset(profile.cv)}
            download
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> CV
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.25fr_1fr] md:pt-20">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success" /> Open to new roles
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Full stack products for how Africa <span className="text-primary">pays</span> &{" "}
              <span className="italic text-plum">plays.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm {profile.name}, a {profile.role.toLowerCase()}. {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                See my work <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 font-medium transition-colors hover:bg-secondary"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {profile.location}
              </span>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm animate-in fade-in zoom-in-95 duration-700">
            <div className="absolute -inset-4 -z-10 rounded-t-full bg-secondary" />
            <img
              src={asset(profile.photo)}
              alt={`Portrait of ${profile.name}`}
              className="aspect-[3/4] w-full rounded-t-full object-cover object-top"
              width={682}
              height={909}
            />
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-card">
              <p className="font-display text-2xl font-bold">5+ yrs</p>
              <p className="text-xs text-muted-foreground">building with code & data</p>
            </div>
          </div>
        </section>

        {/* Stack strip */}
        <div className="border-y border-border bg-card">
          <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-2 px-5 py-5 font-mono text-sm text-muted-foreground">
            {["Node.js", "React", "React Native", "FastAPI", "PostgreSQL", "AWS S3", "Stripe"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rotate-45 bg-primary" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Work */}
        <section id="work" className="scroll-mt-16 bg-foreground py-24 text-background">
          <div className="mx-auto max-w-6xl px-5">
            <SectionLabel index="01">Selected work</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Products I've designed, built and shipped.
            </h2>

            <div className="mt-16 space-y-28">
              {projects.map((project, i) => (
                <article key={project.id} className="grid items-center gap-12 md:grid-cols-2">
                  <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                    <ProjectVideo src={project.video} poster={project.poster} title={project.name} />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-primary">0{i + 1} — {project.tagline}</p>
                    <h3 className="mt-3 font-display text-5xl font-extrabold tracking-tight">{project.name}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-background/75">{project.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-background/90">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {f}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tech stack">
                      {project.stack.map((s) => (
                        <li key={s} className="rounded-full border border-background/20 px-3 py-1 font-mono text-xs">
                          {s}
                        </li>
                      ))}
                    </ul>
                    {(project.liveUrl || project.repoUrl) && (
                      <div className="mt-8 flex gap-4">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                            Visit live <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium hover:underline">
                            Source code <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-24">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionLabel index="02">About</SectionLabel>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                A developer with a data analyst's instincts.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Education</p>
                <p className="mt-2 font-display text-xl font-bold text-foreground">{education.degree}</p>
                <p className="text-sm">{education.school} · {education.period}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1">
                <h3 className="font-display text-xl font-bold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-16 border-t border-border bg-secondary/50 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionLabel index="03">Experience</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Where I've worked.</h2>
            <ol className="mt-12 divide-y divide-border border-y border-border">
              {experience.map((job) => (
                <li key={job.role} className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
                  <p className="font-mono text-sm text-muted-foreground">{job.period}</p>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{job.role}</h3>
                    <p className="text-primary">{job.org}</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      {job.points.map((pt) => (
                        <li key={pt} className="flex gap-3">
                          <span className="mt-2.5 h-px w-4 shrink-0 bg-foreground/40" /> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-5 py-28 text-center">
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            Let's build something <span className="text-primary">people use.</span>
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-flex items-center gap-2 break-all font-display text-2xl font-bold underline decoration-primary decoration-4 underline-offset-8 sm:text-3xl"
          >
            {profile.email}
          </a>
          <p className="mt-6 text-muted-foreground">{profile.phone} · {profile.location}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 font-medium hover:bg-secondary">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 font-medium hover:bg-secondary">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href={asset(profile.cv)} download className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-medium text-background">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {year} {profile.name}</p>
          <p className="font-mono text-xs">Built with React · Deployed on GitHub Pages</p>
        </div>
      </footer>
    </div>
  );
}
