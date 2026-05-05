"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Presentation, MousePointerClick, Wrench, Headphones } from "lucide-react";

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: ClipboardList,
      number: "01",
      title: "Diagnóstico Inicial",
      description: "Evaluamos tus necesidades, objetivos y situación actual para determinar la mejor estrategia.",
    },
    {
      icon: Presentation,
      number: "02",
      title: "Presentación de Modelos",
      description: "Te presentamos las opciones disponibles con análisis detallado de costos y beneficios.",
    },
    {
      icon: MousePointerClick,
      number: "03",
      title: "Selección",
      description: "Eliges el modelo que mejor se adapta a tu proyecto y definimos los términos del acuerdo.",
    },
    {
      icon: Wrench,
      number: "04",
      title: "Implementación",
      description: "Ejecutamos la transferencia y configuración de todos los elementos de tu SOFOM.",
    },
    {
      icon: Headphones,
      number: "05",
      title: "Soporte Operativo",
      description: "Te acompañamos en el inicio de operaciones con asesoría continua y soporte técnico.",
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
            Proceso de Adquisición
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proceso claro y transparente, diseñado para que inicies operaciones en el menor tiempo posible.
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
            
            <div className="grid grid-cols-5 gap-4">
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
      </div>
    </section>
  );
}
