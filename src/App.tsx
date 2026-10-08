import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800",
    alt: "Elegant neutral curtains in a warm modern living room",
  },
  {
    src: "https://images.unsplash.com/photo-1691036562132-56a310d4b789?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800",
    alt: "Soft curtains framing a quiet reading corner",
  },
  {
    src: "https://images.unsplash.com/photo-1754611362309-71297e9f42fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800",
    alt: "Floor-length curtains in a modern neutral living room",
  },
  {
    src: "https://images.unsplash.com/photo-1754611331891-949e7838f199?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800",
    alt: "Light curtains in a cozy contemporary interior",
  },
  {
    src: "https://images.unsplash.com/photo-1754611380518-61a923cc47ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1800",
    alt: "Bright window beautifully framed by curtains",
  },
];

const tabs = [
  { label: "Overview", href: "#about" },
  { label: "Products", href: "#projects" },
  { label: "Our process", href: "#process" },
  { label: "Showroom", href: "#contact" },
];

const projects = [
  {
    number: "01",
    title: "Custom Curtains",
    category: "Made to measure",
    location: "Sheer · Dimout · Blackout",
    image:
      "https://images.unsplash.com/photo-1787684047668-58cbac5e5929?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1000",
    alt: "Soft sheer curtains glowing in natural daylight",
  },
  {
    number: "02",
    title: "Roman Shades",
    category: "Soft window treatment",
    location: "Classic · Contemporary",
    image:
      "https://images.unsplash.com/photo-1635360824644-9afdcf120d76?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1000",
    alt: "Warm window treatment in a comfortable living room",
  },
  {
    number: "03",
    title: "Roller Blinds",
    category: "Clean & practical",
    location: "Manual · Motorized",
    image:
      "https://images.unsplash.com/photo-1776261293170-66fd3b09273e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=1000",
    alt: "Minimal gray roller blind on a modern window",
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d={diagonal ? "M4 12 12 4M6 4h6v6" : "M2.5 8h11M9.5 4l4 4-4 4"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Mark() {
  return (
    <div
      aria-label="Gordynku"
      className="grid size-11 shrink-0 place-items-center rounded-full bg-[#ffcbb5] text-[#2d211c]"
    >
      <span className="text-lg font-semibold tracking-[-0.05em]">G</span>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [following, setFollowing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [currentSlide]);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f0e9] text-[#2d211c]">
      <header className="relative z-50 border-b border-black/10 bg-[#f5f0e9]">
        <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-12">
          <a className="flex items-center gap-3" href="#" aria-label="Gordynku home">
            <span className="grid size-8 place-items-center rounded-full border border-[#2d211c]">
              <span className="size-2 rounded-full bg-[#2d211c]" />
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              GORDYNKU
            </span>
          </a>
          <button
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="relative grid size-11 place-items-center rounded-full border border-black/15 bg-white/35 transition-colors hover:bg-white"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span className="sr-only">Menu</span>
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-300 ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>

          {menuOpen && (
            <nav
              aria-label="Company profile sections"
              className="absolute top-[calc(100%+12px)] right-5 left-5 overflow-hidden rounded-[20px] border border-black/10 bg-[#fffaf4] p-2 shadow-[0_24px_70px_rgba(45,33,28,0.18)] sm:right-8 sm:left-auto sm:w-80 lg:right-12"
              id="main-navigation"
            >
              {tabs.map((tab, index) => (
                <a
                  className={`group flex items-center justify-between rounded-[14px] px-4 py-4 text-sm transition-colors hover:bg-[#f5f0e9] ${
                    activeTab === tab.label ? "font-semibold" : "text-black/55"
                  }`}
                  href={tab.href}
                  key={tab.label}
                  onClick={() => {
                    setActiveTab(tab.label);
                    setMenuOpen(false);
                  }}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-[10px] font-normal text-black/30">
                      0{index + 1}
                    </span>
                    {tab.label}
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-8 lg:px-12 lg:pt-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(330px,.45fr)]">
          <div className="relative min-h-[510px] overflow-hidden rounded-[22px] bg-[#33483b] sm:min-h-[610px]">
            {heroImages.map((image, index) => (
              <img
                alt={image.alt}
                className={`absolute inset-0 size-full object-cover transition-all duration-1000 ease-out ${
                  index === currentSlide
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.03] opacity-0"
                }`}
                key={image.src}
                src={image.src}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d211c]/90 via-[#2d211c]/10 to-black/5" />
            <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/15 px-3 py-2 backdrop-blur-sm sm:bottom-8">
              {heroImages.map((image, index) => (
                <button
                  aria-label={`Show slide ${index + 1}: ${image.alt}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-white"
                      : "w-3 bg-white/40 hover:bg-white/70"
                  }`}
                  key={image.src}
                  onClick={() => setCurrentSlide(index)}
                  type="button"
                />
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-16 z-10 p-6 text-white sm:bottom-16 sm:p-9">
              <p className="mb-3 text-xs font-medium tracking-[0.16em] text-white/70 uppercase">
                Made for your space
              </p>
              <h1 className="max-w-[680px] text-[clamp(3.25rem,8vw,7.25rem)] leading-[0.84] font-medium tracking-[-0.07em] sm:pb-0">
                Gordynku
              </h1>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-[22px] bg-[#2d211c] p-6 text-white sm:p-8">
            <div>
              <div className="flex items-start justify-between">
                <Mark />
                <button
                  aria-label={following ? "Remove Gordynku from favorites" : "Save Gordynku to favorites"}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    following
                      ? "border-[#ffcbb5] bg-[#ffcbb5] text-[#2d211c]"
                      : "border-white/25 hover:border-white/60"
                  }`}
                  onClick={() => setFollowing(!following)}
                  type="button"
                >
                  {following ? "Saved" : "Save"}
                </button>
              </div>
              <p className="mt-10 text-[11px] tracking-[0.16em] text-white/45 uppercase">
                Curtains & window styling
              </p>
              <h2 className="mt-3 text-[2rem] leading-[1.04] font-medium tracking-[-0.04em]">
                Beautiful light,
                <br />
                beautifully framed.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-6 text-white/58">
                Custom curtains and blinds, thoughtfully selected, measured,
                and installed for homes that feel complete.
              </p>
            </div>

            <div className="mt-14 border-t border-white/15 pt-6">
              <dl className="grid grid-cols-2 gap-y-6 text-sm">
                <div>
                  <dt className="text-white/40">Showroom</dt>
                  <dd className="mt-1">Kota Wisata Cibubur</dd>
                </div>
                <div>
                  <dt className="text-white/40">Visit us at</dt>
                  <dd className="mt-1">Ruko Sentra Eropa</dd>
                </div>
              </dl>
              <a
                className="mt-8 flex w-full items-center justify-between rounded-full bg-[#ffcbb5] px-5 py-3.5 text-sm font-semibold text-[#2d211c] transition-transform hover:-translate-y-0.5"
                href="#contact"
              >
                Visit our showroom
                <ArrowIcon diagonal />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-28"
        id="about"
      >
        <div>
          <p className="section-label">About Gordynku</p>
        </div>
        <div>
          <p className="max-w-4xl text-[clamp(2rem,4.5vw,4.4rem)] leading-[1.04] font-medium tracking-[-0.055em]">
            The finishing touch that turns a room into your room.
          </p>
          <div className="mt-10 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-2">
            <p className="text-[15px] leading-7 text-black/60">
              Gordynku helps homeowners find the right curtain for every room.
              From airy sheers to restful blackout fabrics, every detail is
              tailored to your windows, your light, and the way you live.
            </p>
            <p className="text-[15px] leading-7 text-black/60">
              Visit our showroom at Ruko Sentra Eropa, Kota Wisata Cibubur, to
              see and feel our fabric collection. We make the process simple,
              from consultation and measurement to sewing and installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#ffcbb5]" id="process">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-20">
          {[
            ["01", "Free consultation"],
            ["100+", "Fabric choices"],
            ["03", "Simple steps"],
            ["100%", "Made to measure"],
          ].map(([value, label], index) => (
            <div
              className={`py-5 lg:py-0 ${
                index > 0 ? "lg:border-l lg:border-black/20 lg:pl-8" : ""
              } ${index % 2 ? "border-l border-black/20 pl-5 sm:pl-8" : ""}`}
              key={label}
            >
              <p className="text-[clamp(2.6rem,5vw,5rem)] leading-none font-medium tracking-[-0.06em]">
                {value}
              </p>
              <p className="mt-3 text-xs font-medium text-black/55 uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        id="projects"
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="section-label">Our collection</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
              A style for every window.
            </h2>
          </div>
          <a
            className="hidden items-center gap-2 text-sm font-semibold sm:flex"
            href="#projects"
          >
            Explore fabrics <ArrowIcon />
          </a>
        </div>
        <div className="mt-12 border-t border-black/15">
          {projects.map((project) => (
            <a
              className="group relative grid min-h-44 items-center gap-4 overflow-hidden border-b border-black/15 px-3 py-7 transition-colors hover:bg-white/35 sm:min-h-36 sm:grid-cols-[80px_1fr_1fr_auto]"
              href="#contact"
              key={project.number}
            >
              <img
                alt={project.alt}
                className="absolute inset-y-0 right-0 h-full w-[72%] object-cover opacity-25 saturate-[.75] transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-40 sm:w-[42%]"
                src={project.image}
              />
              <span className="absolute inset-0 bg-gradient-to-r from-[#f5f0e9] via-[#f5f0e9]/95 to-[#f5f0e9]/10 sm:via-[#f5f0e9]/80 sm:to-transparent" />
              <span className="relative z-10 text-xs text-black/35">
                {project.number}
              </span>
              <span className="relative z-10 text-xl font-medium tracking-[-0.025em] sm:text-2xl">
                {project.title}
              </span>
              <span className="relative z-10 text-sm text-black/45">
                {project.category}
              </span>
              <span className="relative z-10 flex items-center justify-between gap-6 text-sm">
                <span className="text-black/45">{project.location}</span>
                <span className="grid size-10 place-items-center rounded-full border border-black/20 transition-all group-hover:rotate-45 group-hover:bg-[#2d211c] group-hover:text-white">
                  <ArrowIcon diagonal />
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-[#2d211c] text-white" id="contact">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs tracking-[0.15em] text-white/45 uppercase">
                Visit our showroom
              </p>
              <a
                className="mt-5 block max-w-5xl text-[clamp(2.4rem,7vw,6.8rem)] leading-none font-medium tracking-[-0.065em] transition-colors hover:text-[#ffcbb5]"
                href="https://maps.google.com/?q=Ruko+Sentra+Eropa+Kota+Wisata+Cibubur"
                rel="noreferrer"
                target="_blank"
              >
                Ruko Sentra Eropa,
                <br />
                Kota Wisata Cibubur
              </a>
            </div>
            <Mark />
          </div>
          <div className="mt-20 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Gordynku</p>
            <div className="flex gap-6">
              <a className="hover:text-white" href="#">
                Instagram
              </a>
              <a className="hover:text-white" href="#">
                LinkedIn
              </a>
              <a className="hover:text-white" href="#">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
