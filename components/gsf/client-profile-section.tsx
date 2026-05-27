"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users2, TrendingUp, Building, ShieldCheck } from "lucide-react";

// Custom minimalist SVG icons
const EntrepreneurIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Briefcase */}
    <rect x="6" y="12" width="20" height="14" rx="2" />
    <path d="M12 12 L12 9 C12 7.5 13 6 16 6 C19 6 20 7.5 20 9 L20 12" />
    {/* Clasp */}
    <line x1="14" y1="12" x2="18" y2="12" />
    {/* Rising arrow */}
    <path d="M16 18 L16 22" />
    <polyline points="13,20 16,17 19,20" />
  </svg>
);

const InvestorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Group of circles representing investors */}
    <circle cx="10" cy="10" r="4" />
    <circle cx="22" cy="10" r="4" />
    <circle cx="16" cy="22" r="5" />
    {/* Connecting lines */}
    <line x1="12.5" y1="12.5" x2="14" y2="18" />
    <line x1="19.5" y1="12.5" x2="18" y2="18" />
    {/* Dollar sign in center 
    <path d="M16 19 L16 25" />
    <path d="M14 20 C14 19 15 19 16 19 C17 19 18 19.5 18 20.5 C18 21.5 17 22 16 22 C15 22 14 22.5 14 23.5 C14 24.5 15 25 16 25" /> */}
  </svg>
);

const AdvisorIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Chart trending up */}
    <rect x="4" y="6" width="24" height="20" rx="2" />
    {/* Grid lines */}
    <line x1="4" y1="14" x2="28" y2="14" />
    <line x1="4" y1="20" x2="28" y2="20" />
    {/* Trend line */}
    <polyline points="8,22 13,18 18,20 24,10" />
    {/* Data points */}
    <circle cx="8" cy="22" r="1" />
    <circle cx="13" cy="18" r="1" />
    <circle cx="18" cy="20" r="1" />
    <circle cx="24" cy="10" r="1" />
  </svg>
);

const EnterpriseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Main building */}
    <rect x="8" y="4" width="16" height="24" rx="1" />
    {/* Windows */}
    <rect x="11" y="8" width="3" height="3" />
    <rect x="18" y="8" width="3" height="3" />
    <rect x="11" y="14" width="3" height="3" />
    <rect x="18" y="14" width="3" height="3" />
    <rect x="11" y="20" width="3" height="3" />
    <rect x="18" y="20" width="3" height="3" />
    {/* Door */}
    <path d="M14 28 L14 25 L18 25 L18 28" />
    {/* Flag */}
    <line x1="16" y1="0" x2="16" y2="4" />
    <path d="M16 0 L22 2 L16 4" />
  </svg>
);



export function ClientProfileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      icon: EntrepreneurIcon,
      title: "Financia a clientes",
      description: "Empresas de cualquier sector que  busquen otorgar financiamiento a sus clientes por medio de crédito, arrendamiento o factoraje.",
    },
    {
      icon: InvestorIcon,
      title: "Grupos empresariales",
      description: "Organizaciones que buscan crear su propia entidad financiera para diversificar y fortalecer su ecosistema.",
    },
    {
      icon: AdvisorIcon,
      title: "Inversionistas",
      description: "Inversionistas interesados en participar en el sector financiero a través de estructuras reguladas.",
    },
    {
      icon: EnterpriseIcon,
      title: "Intermediarios y asesores financieros",
      description: "Profesionales que estructuran soluciones de financiamiento a la medida para sus clientes y requieren una entidad operativa.",
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
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
            Soluciones para distintos sectores
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestras estructuras y servicios están diseñados para grupos empresariales e inversionistas que buscan operar, escalar o diversificar sus actividades financieras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
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
              className="group bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 text-center"
            >
              <motion.div
                className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <profile.icon className="h-7 w-7 text-primary" />
              </motion.div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {profile.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>

{/* Banner Inferior: Metodología con enfoque en resultados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 w-full bg-slate-50 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-6 border border-slate-100 shadow-sm"
        >
          <div className="w-16 h-16 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-8 w-8 text-[#018abe]" strokeWidth={0.5} />
           
          </div>
          <div className="text-center sm:text-left flex-1">
            <h3 className="font-heading text-lg md:text-xl font-bold text-slate-900 mb-2">
              Enfoque especializado
            </h3>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed m-0">
              Cada perfil tiene necesidades y objetivos distintos. Diseñamos la estructura y el modelo operativo que mejor se adapta a tu estrategia.
            </p>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
