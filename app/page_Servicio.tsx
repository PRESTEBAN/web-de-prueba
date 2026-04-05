/**
 * page.jsx — Página de Servicios
 *
 * En Next.js, cada carpeta dentro de /app con un archivo page.jsx
 * se convierte automáticamente en una ruta. Este archivo será
 * accesible en: tudominio.com/servicios
 *
 * Aquí no escribimos lógica ni estilos directamente.
 * Solo importamos los componentes y los colocamos en orden.
 */

// Importamos cada sección como un componente independiente
import ServicesHero     from "@/components/Page_Servicios/ServicesHero/ServicesHero.jsx";
import FeaturedService  from "@/components/FeaturedService/FeaturedService";
import ServiceCard      from "@/components/ServiceCard/ServiceCard";
import ProcessSection   from "@/components/ProcessSection/ProcessSection";
import ServicesCTA      from "@/components/ServicesCTA/ServicesCTA";

// Los datos de cada servicio viven aquí, separados del diseño.
// Si el día de mañana quieres agregar un servicio, solo agregas
// un objeto a este array — no tienes que tocar el HTML.
const services = [
  {
    id: "02",
    icon: "🛒",
    title: "E-Commerce a Medida",
    description:
      "Tiendas online optimizadas para vender. Desde catálogos simples hasta plataformas complejas con inventario y pagos integrados.",
    features: [
      "Shopify / WooCommerce",
      "Pasarelas de pago",
      "Gestión de inventario",
      "Optimización de conversión",
    ],
  },
  {
    id: "03",
    icon: "⚡",
    title: "Backend & APIs",
    description:
      "La infraestructura que hace que todo funcione. Construimos con Node.js, bases de datos modernas y arquitecturas escalables.",
    features: [
      "Node.js / Express",
      "REST y GraphQL APIs",
      "Bases de datos SQL/NoSQL",
      "Autenticación segura",
    ],
  },
  {
    id: "04",
    icon: "📈",
    title: "SEO & Rendimiento",
    description:
      "Un sitio rápido que nadie encuentra no sirve de nada. Optimizamos para que Google te ame y los usuarios se queden.",
    features: [
      "Core Web Vitals",
      "Optimización de imágenes",
      "Estructura semántica",
      "Reportes mensuales",
    ],
  },
  {
    id: "05",
    icon: "🎨",
    title: "Identidad Digital & Branding",
    description:
      "Antes de construir la casa, necesitas los cimientos. Creamos sistemas de diseño, paletas y guías de marca.",
    features: ["Logo y sistema visual", "Design system completo", "Guía de marca"],
  },
  {
    id: "06",
    icon: "🔧",
    title: "Mantenimiento & Soporte",
    description:
      "Tu sitio no es un producto terminado, es un activo vivo. Planes de mantenimiento para mantenerlo seguro y actualizado.",
    features: ["Actualizaciones continuas", "Backups automáticos", "Soporte prioritario"],
  },
];

// Esta es la función principal del componente — lo que React va a mostrar.
// En Next.js, los componentes en /app son "Server Components" por defecto,
// lo que significa que se renderizan en el servidor (más rápido para SEO).
export default function ServiciosPage() {
  return (
    {/* <main> es la etiqueta semántica correcta para el contenido principal */}
    <main>
      {/* Sección hero con título y estadísticas */}
      <ServicesHero />

      {/* Servicio destacado (el grande con la tarjeta animada) */}
      <FeaturedService />

      {/*
        Sección de servicios secundarios.
        Usamos .map() para recorrer el array de servicios y crear
        una tarjeta por cada objeto. Es como un "for" en JavaScript.

        La prop "key" es obligatoria en listas — ayuda a React a
        identificar cada elemento de forma única.
      */}
      <section style={{ padding: "0 48px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Primera fila: 3 tarjetas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", marginBottom: "2px" }}>
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Segunda fila: 2 tarjetas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px" }}>
          {services.slice(3).map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Sección "Cómo trabajamos" */}
      <ProcessSection />

      {/* Bloque final de llamada a la acción */}
      <ServicesCTA />
    </main>
  );
}

