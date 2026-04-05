"use client";

import ScrollVideo from "@/components/ScrollVideo";

export default function Home() {
  return (
    <main style={{ background: "#0D0D0D", minHeight: "100vh" }}>

      {/* Nav flotante */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.4rem 3.5rem",
        borderBottom: "1px solid rgba(242,242,242,0.05)",
        background: "rgba(13,13,13,0.75)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "1.5rem",
          letterSpacing: "0.1em",
          color: "#F2F2F2",
        }}>
          STUDI<span style={{ color: "#00B2FF" }}>O</span>
        </span>

        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {["Trabajo", "Servicios", "Proceso", "Contacto"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(242,242,242,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#00B2FF"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(242,242,242,0.45)"; }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.6rem 1.4rem",
            border: "1px solid #0000EE",
            color: "#00B2FF",
            textDecoration: "none",
            background: "transparent",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0000EE";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#00B2FF";
          }}
        >
          Hablemos
        </a>
      </nav>

      {/* Hero con scroll video */}
      <ScrollVideo />

      {/* === SECCIÓN: SERVICIOS === */}
      <section id="servicios" style={{
        background: "#111",
        padding: "8rem 4rem",
        borderTop: "1px solid rgba(242,242,242,0.05)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#0000EE",
            marginBottom: "1.5rem",
          }}>
            // Servicios
          </p>
          <h2 style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            lineHeight: 0.95,
            color: "#F2F2F2",
            marginBottom: "4rem",
          }}>
            Lo que hacemos<br />
            <span style={{ color: "#4A5464" }}>mejor que nadie</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(242,242,242,0.05)",
          }}>
            {[
              { num: "01", title: "Estrategia Visual", desc: "Antes de diseñar, entendemos tu negocio. Cada decisión visual tiene un porqué comercial.", icon: "◈" },
              { num: "02", title: "Desarrollo Front-end", desc: "De Figma a producción sin pérdida. React, Next.js, animaciones reales, rendimiento real.", icon: "⬡" },
              { num: "03", title: "Optimización CRO", desc: "Diseño basado en datos. Testeamos, iteramos y medimos cada cambio en conversión.", icon: "◎" },
            ].map((s) => (
              <div
                key={s.num}
                style={{
                  background: "#111",
                  padding: "3rem 2.5rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  borderBottom: "2px solid transparent",
                  transition: "background 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,0,238,0.04)";
                  e.currentTarget.style.borderBottomColor = "#0000EE";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#111";
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                <span style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "4rem",
                  color: "rgba(0,178,255,0.08)",
                  lineHeight: 1,
                }}>
                  {s.num}
                </span>
                <div style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(0,178,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: "1rem",
                  color: "#00B2FF",
                }}>
                  {s.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "1.6rem",
                  letterSpacing: "0.03em",
                  color: "#F2F2F2",
                  marginBottom: "0.8rem",
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "rgba(242,242,242,0.4)",
                  margin: 0,
                }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECCIÓN: STATS === */}
      <section style={{
        background: "#0D0D0D",
        padding: "6rem 4rem",
        borderTop: "1px solid rgba(242,242,242,0.05)",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2px",
          background: "rgba(242,242,242,0.04)",
        }}>
          {[
            { num: "98%", label: "Retención de clientes" },
            { num: "+140", label: "Proyectos entregados" },
            { num: "3×", label: "Aumento promedio en conversión" },
            { num: "<24h", label: "Tiempo de respuesta" },
          ].map((s) => (
            <div key={s.num} style={{
              background: "#0D0D0D",
              padding: "3rem 2.5rem",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "3.8rem",
                color: "#0000EE",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(242,242,242,0.3)",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === SECCIÓN: CTA FINAL === */}
      <section id="contacto" style={{
        background: "#0000EE",
        padding: "8rem 4rem",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          marginBottom: "1.5rem",
        }}>
          // Siguiente paso
        </p>
        <h2 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(3.5rem, 7vw, 7rem)",
          lineHeight: 0.93,
          color: "#fff",
          marginBottom: "1.5rem",
        }}>
          Construyamos algo<br />que no se olvide.
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "480px",
          margin: "0 auto 3rem",
          lineHeight: 1.6,
        }}>
          Primera consulta sin costo. Sin formularios infinitos. Solo una conversación.
        </p>
        <a
          href="mailto:hola@studio.com"
          style={{
            display: "inline-block",
            padding: "1rem 3rem",
            background: "#0D0D0D",
            color: "#F2F2F2",
            fontFamily: "'Space Mono', monospace",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "2px",
            border: "1px solid #0D0D0D",
            transition: "background 0.25s, color 0.25s, border-color 0.25s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#0D0D0D";
            e.currentTarget.style.color = "#F2F2F2";
            e.currentTarget.style.borderColor = "#0D0D0D";
          }}
        >
          hola@studio.com →
        </a>
      </section>

    </main>
  );
}