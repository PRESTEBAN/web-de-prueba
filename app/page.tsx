"use client";

import { useEffect, useRef } from "react";
import ScrollVideo from "@/components/ScrollVideo";
import styles from "./page.module.css";

/* ── Datos de cada sección ── */
const services = [
  { num: "01", title: "Estrategia Visual",   desc: "Antes de diseñar, entendemos tu negocio. Cada decisión visual tiene un porqué comercial.", icon: "◈", tag: "Strategy"    },
  { num: "02", title: "Desarrollo Front-end", desc: "De Figma a producción sin pérdida. React, Next.js, animaciones reales, rendimiento real.",  icon: "⬡", tag: "Engineering" },
  { num: "03", title: "Optimización CRO",     desc: "Diseño basado en datos. Testeamos, iteramos y medimos cada cambio en conversión.",           icon: "◎", tag: "Growth"      },
];

const stats = [
  { num: "98%",  label: "Retención de clientes"  },
  { num: "+140", label: "Proyectos entregados"    },
  { num: "3×",   label: "Aumento en conversión"  },
  { num: "<24h", label: "Tiempo de respuesta"     },
];

const navItems = ["Trabajo", "Servicios", "Proceso", "Contacto"];

/* ── Helpers de fuente (usados en estilos inline puntuales) ── */
const bebas = { fontFamily: "'Bebas Neue', cursive" } as React.CSSProperties;
const mono  = { fontFamily: "'Space Mono', monospace" } as React.CSSProperties;
const dm    = { fontFamily: "'DM Sans', sans-serif" } as React.CSSProperties;

export default function Home() {
  const servicesSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = servicesSectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll<HTMLElement>(`.${styles.revealDown}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Entra: baja suavemente
            entry.target.classList.add(styles.visible);
            entry.target.classList.remove(styles.exitUp);
          } else {
            // Sale: sube y desaparece
            entry.target.classList.remove(styles.visible);
            entry.target.classList.add(styles.exitUp);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Textura de grano sobre toda la página */}
      <div className={styles.noise} aria-hidden="true" />

      <main style={{ background: "var(--ink)", minHeight: "100vh" }}>

        {/* ── Keyframes globales para el nav y el botón ── */}
        <style>{`
          @keyframes navLightSweep {
            0%   { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translateX(400%) skewX(-15deg); opacity: 0; }
          }
          @keyframes btnLightLoop {
            0%   { transform: translateX(-120%) skewX(-20deg); }
            100% { transform: translateX(320%) skewX(-20deg); }
          }
          @keyframes btnPulseGlow {
            0%, 100% { box-shadow: 0 4px 24px rgba(0,178,255,0.35), 0 0 0 1px rgba(0,178,255,0.3); }
            50%       { box-shadow: 0 8px 40px rgba(0,178,255,0.65), 0 0 0 1px rgba(0,178,255,0.6); }
          }
        `}</style>

        {/* ── NAV ── */}
        <nav
          className={styles.nav}
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* Barrido de luz sobre el nav completo */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "30%",
              height: "100%",
              background: "linear-gradient(90deg, transparent 0%, rgba(0,178,255,0.12) 50%, transparent 100%)",
              animation: "navLightSweep 3.5s ease-in-out infinite",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Logo */}
          <span style={{ ...bebas, fontSize: "1.5rem", letterSpacing: "0.1em", color: "var(--white)", position: "relative", zIndex: 1 }}>
            STUDI<span style={{ color: "var(--cyan)" }}>O</span>
          </span>

          {/* Links */}
          <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", position: "relative", zIndex: 1 }}>
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={styles.navLink}>{item}</a>
              </li>
            ))}
          </ul>

          {/* Botón Hablemos — redondeado, elevado, con luz RGB azul en loop */}
          <a
            href="#contacto"
            style={{
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
              display: "inline-block",
              padding: "10px 28px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #0033cc 0%, #00B2FF 100%)",
              color: "#fff",
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              animation: "btnPulseGlow 2.4s ease-in-out infinite",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px) scale(1.04)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
          >
            {/* Barrido de luz RGB azul en loop sobre el botón */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-20%",
                left: 0,
                width: "40%",
                height: "140%",
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
                animation: "btnLightLoop 1.8s linear infinite",
                pointerEvents: "none",
              }}
            />
            Hablemos
          </a>
        </nav>

        {/* ── HERO ── */}
        <ScrollVideo />

        <hr className={styles.hrAccent} />

        {/* ── SERVICIOS ── */}
        <section id="servicios" className={styles.servicesSection} ref={servicesSectionRef}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

            {/* Label de sección */}
            <p className={`${styles.sectionLabel} ${styles.revealDown} ${styles.revealDownDelay1}`}>Servicios</p>

            {/* Título */}
            <h2 className={`${styles.revealDown} ${styles.revealDownDelay2}`} style={{
              ...bebas,
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              color: "var(--white)",
              marginBottom: "4rem",
            }}>
              Lo que hacemos<br />
              <span style={{ color: "rgba(242,242,242,0.18)", WebkitTextStroke: "1px rgba(242,242,242,0.2)" }}>
                mejor que nadie
              </span>
            </h2>

            {/* Grid de cards */}
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <div
                  key={s.num}
                  className={`${styles.serviceCard} ${styles.revealDown} ${
                    i === 0 ? styles.revealDownDelay4 :
                    i === 1 ? styles.revealDownDelay5 :
                              styles.revealDownDelay6
                  }`}
                  style={{
                    animationName: "cardFloat",
                    animationDuration: "5s",
                    animationDelay: `${i * 1.5}s`,
                    animationTimingFunction: "ease-in-out",
                    animationFillMode: "none",
                    animationIterationCount: "infinite",
                  } as React.CSSProperties}
                >
                  {/* Número decorativo de fondo */}
                  <span style={{
                    position: "absolute", top: "1.5rem", right: "1.5rem",
                    ...bebas, fontSize: "5rem",
                    color: "rgba(0,178,255,0.05)", lineHeight: 1, userSelect: "none",
                  }}>
                    {s.num}
                  </span>

                  {/* Badge de categoría */}
                  <span className={styles.tagBadge}>{s.tag}</span>

                  {/* Ícono */}
                  <div className={styles.serviceIcon}>{s.icon}</div>

                  {/* Título del servicio */}
                  <h3 style={{ ...bebas, fontSize: "1.7rem", letterSpacing: "0.03em", color: "var(--white)", marginBottom: "0.8rem" }}>
                    {s.title}
                  </h3>

                  {/* Descripción */}
                  <p style={{ ...dm, fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(242,242,242,0.38)" }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className={styles.hrAccent} />

        {/* ── STATS ── */}
        <section className={styles.statsSection}>
          <div className={styles.statsGrid} style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {stats.map((s) => (
              <div key={s.num} className={styles.statCard}>
                {/* Número grande */}
                <div style={{ ...bebas, fontSize: "3.8rem", color: "var(--blue)", lineHeight: 1, marginBottom: "0.5rem" }}>
                  {s.num}
                </div>
                {/* Etiqueta */}
                <div style={{ ...mono, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(242,242,242,0.28)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className={styles.hrAccent} />

        {/* ── VIDEO SHOWCASE ── */}
        <section
          id="proceso"
          style={{
            padding: "120px 60px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Label */}
          <p className={`${styles.sectionLabel} ${styles.fadeUp}`}>Proceso</p>

          {/* Título */}
          <h2
            className={`${styles.fadeUp} ${styles.delay1}`}
            style={{
              ...bebas,
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 0.95,
              color: "var(--white)",
              marginBottom: "3rem",
            }}
          >
            Así trabajamos<br />
            <span style={{ color: "rgba(242,242,242,0.18)", WebkitTextStroke: "1px rgba(242,242,242,0.2)" }}>
              de principio a fin
            </span>
          </h2>

          {/* Contenedor del video */}
          <div
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid rgba(0,178,255,0.15)",
              boxShadow: "0 0 80px rgba(0,178,255,0.07)",
            }}
          >
            {/* Brillo decorativo superior */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(to right, transparent, rgba(0,178,255,0.6), transparent)",
                zIndex: 2,
              }}
            />

            <video
              src="/showcase-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </section>

        <hr className={styles.hrAccent} />

        {/* ── CTA FINAL ── */}
        <section id="contacto" className={styles.ctaSection} style={{ position: "relative", overflow: "hidden" }}>

          {/* Video de fondo */}
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src="/fondo_final.mp4" type="video/mp4" />
          </video>

          {/* Overlay oscuro para legibilidad */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(5,5,20,0.62)",
              zIndex: 1,
            }}
          />

          {/* Contenido sobre el video */}
          <div style={{ position: "relative", zIndex: 2 }}>

            {/* Label */}
            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "1.5rem" }}>
              // Siguiente paso
            </p>

            {/* Título */}
            <h2 style={{ ...bebas, fontSize: "clamp(3.5rem, 7vw, 7rem)", lineHeight: 0.93, color: "#fff", marginBottom: "1.5rem" }}>
              Construyamos algo<br />
              <span style={{ opacity: 0.55 }}>que no se olvide.</span>
            </h2>

            {/* Subtítulo */}
            <p style={{ ...dm, fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", maxWidth: "420px", margin: "0 auto 3rem", lineHeight: 1.7, fontWeight: 300 }}>
              Primera consulta sin costo. Sin formularios infinitos. Solo una conversación.
            </p>

            {/* Botón de contacto */}
            <a href="mailto:hola@studio.com" className={styles.ctaBtn}>
              hola@studio.com →
            </a>

          </div>

        </section>

      </main>
    </>
  );
}