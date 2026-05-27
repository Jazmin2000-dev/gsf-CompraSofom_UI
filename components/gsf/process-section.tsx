"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Presentation, MousePointerClick, Wrench, Headphones, ShieldCheck } from "lucide-react";


// Custom minimalist SVG icons with thin strokes
const DiagnosticIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Node network - representing analysis/diagnostic */}
    <circle cx="16" cy="8" r="3" />
    <circle cx="8" cy="20" r="3" />
    <circle cx="24" cy="20" r="3" />
    <circle cx="16" cy="26" r="2" />
    <line x1="16" y1="11" x2="10" y2="18" />
    <line x1="16" y1="11" x2="22" y2="18" />
    <line x1="11" y1="20" x2="21" y2="20" />
    <line x1="16" y1="24" x2="16" y2="22" />
  </svg>
);

const PresentationIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Presentation board with chart */}
    <rect x="4" y="6" width="24" height="16" rx="1" />
    <line x1="16" y1="4" x2="16" y2="6" />
    <line x1="12" y1="4" x2="20" y2="4" />
    <line x1="16" y1="22" x2="16" y2="26" />
    <line x1="10" y1="26" x2="22" y2="26" />
    {/* Rising bars */}
    <line x1="9" y1="18" x2="9" y2="14" />
    <line x1="13" y1="18" x2="13" y2="12" />
    <line x1="17" y1="18" x2="17" y2="10" />
    <line x1="21" y1="18" x2="21" y2="11" />
  </svg>
);

const SelectionIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Cursor with target/selection */}
    <path d="M8 8 L8 22 L12 18 L16 26 L18 25 L14 17 L20 17 Z" />
    <circle cx="22" cy="10" r="5" strokeDasharray="2 2" />
    <circle cx="22" cy="10" r="2" />
  </svg>
);

const ImplementationIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    {/* Ascending bars with connecting line - representing implementation/progress */}
    <rect x="5" y="20" width="4" height="8" rx="0.5" />
    <rect x="11" y="16" width="4" height="12" rx="0.5" />
    <rect x="17" y="12" width="4" height="16" rx="0.5" />
    <rect x="23" y="6" width="4" height="22" rx="0.5" />
    {/* Progress line */}
    <path d="M4 18 Q10 14, 13 12 T25 4" strokeDasharray="2 2" />
  </svg>
);

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: DiagnosticIcon,
      number: "01",
      title: "Diagnóstico",
      description: "Analizamos tu modelo de negocio, objetivos financieros y contexto regulatorio para definir tus necesidades.",
    },
    {
      icon: PresentationIcon,
      number: "02",
      title: "Presentación de Modelos",
      description: "Presentamos las licencias disponibles, comparando alcance, servicios, tiempos y beneficios",
    },
    {
      icon: SelectionIcon,
      number: "03",
      title: "Definición del Modelo Operativo",
      description: "Seleccionamos y configuramos la estructura más adecuada a tu operación, estableciendo tiempos y los términos del proyecto.",
    },
    {
      icon: ImplementationIcon,
      number: "04",
      title: "Implementación y Transición",
      description: "Ejecución del proyecto y coordinación de los componentes legales, operativos y tecnológicos necesarios.",
    },
  ];

  return (
    <section id="proceso" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Proceso de Implementación
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proceso estructurado diseñado para definir el mejor modelo de negocio e iniciar operaciones de manera eficiente.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-primary/50 to-border origin-left"
            />
            
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.3 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-32 h-32 bg-card border border-border rounded-2xl flex flex-col items-center justify-center relative z-10 mb-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all cursor-default"
                    >
                      <span className="text-xs font-bold text-primary mb-1">{step.number}</span>
                      <step.icon className="h-8 w-8 text-foreground" />
                    </motion.div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-card border border-border rounded-xl flex flex-col items-center justify-center shrink-0 shadow-md"
                >
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                  <step.icon className="h-5 w-5 text-foreground" />
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-border my-2 origin-top"
                  />
                )}
              </div>
              <div className="pb-6">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

{/* Banner Inferior: Metodología con enfoque en resultados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 w-full bg-gradient-to-br from-secondary via-secondary to-primary/10 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-6 border border-slate-100 shadow-sm"
        >
     {/*     <div className="w-16 h-16 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-8 w-8 text-[#018abe]" strokeWidth={1.5} />
          </div>  */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="font-heading text-lg md:text-xl font-bold text-slate-900 mb-2">
              Metodología con enfoque en resultados
            </h3>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed m-0">
              Cada etapa está diseñada para reducir riesgos, optimizar tiempos y asegurar que tu SOFOM esté lista para operar con solidez y cumplimiento.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
