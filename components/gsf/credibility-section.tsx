"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Briefcase, TrendingUp } from "lucide-react";

// Custom minimalist SVG icons
const FinanceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Abstract building with grid pattern */}
    <rect x="8" y="10" width="16" height="18" rx="1" />
    <line x1="8" y1="16" x2="24" y2="16" />
    <line x1="8" y1="22" x2="24" y2="22" />
    <line x1="14" y1="10" x2="14" y2="28" />
    <line x1="18" y1="10" x2="18" y2="28" />
    {/* Top accent */}
    <path d="M12 10 L16 5 L20 10" />
  </svg>
);

const ConsultIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Connected nodes representing collaboration */}
    <circle cx="16" cy="8" r="3" />
    <circle cx="8" cy="22" r="3" />
    <circle cx="24" cy="22" r="3" />
    {/* Connecting lines */}
    <line x1="14" y1="10.5" x2="9.5" y2="19.5" />
    <line x1="18" y1="10.5" x2="22.5" y2="19.5" />
    <line x1="11" y1="22" x2="21" y2="22" />
    {/* Center dot */}
    <circle cx="16" cy="18" r="1.5" />
  </svg>
);

const EcosystemIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Layered squares representing ecosystem */}
    <rect x="6" y="6" width="12" height="12" rx="1" />
    <rect x="14" y="14" width="12" height="12" rx="1" />
    {/* Connecting diagonal */}
    <line x1="18" y1="6" x2="26" y2="14" />
    <line x1="6" y1="18" x2="14" y2="26" />
    {/* Small accent circles */}
    <circle cx="22" cy="10" r="1" />
    <circle cx="10" cy="22" r="1" />
  </svg>
);

const GrowthIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Ascending line chart */}
    <polyline points="4,24 10,18 16,20 22,12 28,8" />
    {/* Data points */}
    <circle cx="4" cy="24" r="1.5" />
    <circle cx="10" cy="18" r="1.5" />
    <circle cx="16" cy="20" r="1.5" />
    <circle cx="22" cy="12" r="1.5" />
    <circle cx="28" cy="8" r="1.5" />
    {/* Arrow at end */}
    <path d="M26 6 L28 8 L26 10" />
  </svg>
);

export function CredibilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: FinanceIcon,
      title: "Especialización Financiera",
      description: "Dominamos la regulación de CNBV y CONDUSEF, así como los elementos clave para operar una SOFOM con éxito.",
    },
    {
      icon: ConsultIcon,
      title: "Enfoque Consultivo",
      description: "Nuestro acompañamiento está enfocado en una asesoría estratégica para definir el modelo operativo ideal y tomar mejores decisiones",
    },
    {
      icon: EcosystemIcon,
      title: "Ecosistema Integral",
      description: "Entendemos como funciona una SOFOM en la práctica, por ello tenemos soluciones que te ayudarán a resolver todos los aspectos que necesites.",
    },
    {
      icon: GrowthIcon,
      title: "Visión de Negocio",
      description: "Somos tu aliado estratégico. Nuestro objetivo es que tu SOFOM tenga las bases para crecer y escalar sin límites.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Asesoría especializada en creación de SOFOMES
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            En GSF ayudamos a empresarios, inversionistas y grupos empresariales a transformar y profesionalizar sus finanzas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <motion.div
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <feature.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
