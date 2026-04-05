/**
 * ServicesHero.jsx — Sección hero de la página de servicios
 *
 * Muestra el título principal, descripción y estadísticas.
 *
 * ¿Qué es un componente?
 * Es simplemente una función de JavaScript que devuelve HTML (llamado JSX).
 * Puedes reutilizarlo en cualquier parte del proyecto solo importándolo.
 */

// Importamos los estilos CSS de este mismo componente.
// Con CSS Modules, los estilos SOLO afectan a este componente —
// no hay conflictos con otros archivos aunque usen el mismo nombre de clase.
import styles from "./ServicesHero.module.css";

// Las estadísticas también las separamos como datos,
// así son fáciles de editar sin tocar el HTML.
const stats = [
  { number: "48+",  label: "Proyectos entregados" },
  { number: "100%", label: "Clientes satisfechos" },
  { number: "3",    label: "Años de experiencia" },
];

export default function ServicesHero() {
  return (
    <section className={styles.hero}>

      {/* Etiqueta decorativa pequeña arriba del título */}
      <span className={styles.tag}>Lo que hacemos</span>

      {/* Título principal. <br /> en JSX es el salto de línea */}
      <h1 className={styles.title}>
        Construimos<br />
        {/* <span> permite aplicar el gradiente solo a esta palabra */}
        <span className={styles.titleGradient}>experiencias</span><br />
        digitales.
      </h1>

      <p className={styles.description}>
        Cada proyecto es una oportunidad de redefinir cómo se ve y se siente
        una marca en la web. Nada genérico, todo a medida.
      </p>

      {/* Estadísticas: usamos .map() para no repetir código */}
      <div className={styles.statsRow}>
        {stats.map((stat) => (
          // "key" es requerido por React cuando usas .map()
          <div key={stat.label} className={styles.stat}>
            <span className={styles.statNumber}>{stat.number}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

