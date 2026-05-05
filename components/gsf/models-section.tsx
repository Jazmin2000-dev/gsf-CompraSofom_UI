"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Settings, Rocket, Building2, ArrowRight } from "lucide-react";

export function ModelsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const models = [
    {
      icon: FileText,
      title: "Modelo Básico",
      subtitle: "Estructura Legal",
      description: "Adquisición de SOFOM con toda la documentación legal necesaria para iniciar tu operación financiera.",
      features: [
        "Estructura societaria completa",
        "Documentación legal vigente",
        "Registro ante autoridades",
        "Asesoría inicial",
      ],
    },
    {
      icon: Settings,
      title: "Modelo Integral",
      subtitle: "Legal + Cumplimiento",
      description: "Incluye estructura legal más implementación de procesos de cumplimiento normativo y PLD.",
      features: [
        "Todo del modelo básico",
        "Manual de PLD/FT",
        "Políticas de cumplimiento",
        "Capacitación inicial",
      ],
      featured: true,
    },
    {
      icon: Rocket,
      title: "Modelo Llave en Mano",
      subtitle: "Solución Completa",
      description: "Ecosistema completo con tecnología, cumplimiento y soporte operativo para iniciar inmediatamente.",
      features: [
        "Todo del modelo integral",
        "Plataforma tecnológica",
        "Integración con buró de crédito",
        "Soporte operativo continuo",
      ],
    },
    {
      icon: Building2,
      title: "Modelo Corporativo",
      subtitle: "Grupos Empresariales",
      description: "Diseñado para holdings y grupos empresariales que requieren múltiples entidades financieras coordinadas.",
      features: [
        "Múltiples SOFOMs coordinadas",
        "Gobierno corporativo",
        "Consolidación financiera",
        "Gestión de riesgos integral",
      ],
    },
  ];

  return (
    <section id="modelos" ref={ref} className="py-20 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
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
            Modelos Disponibles
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde estructuras legales básicas hasta soluciones llave en mano. Encuentra el modelo que se adapta a tus necesidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`bg-card p-6 rounded-2xl border ${
                model.featured
                  ? "border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/30"
              } relative transition-all duration-300 hover:shadow-xl`}
            >
              {model.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                >
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                    Más Popular
                  </span>
                </motion.div>
              )}
              <motion.div
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <model.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <p className="text-xs text-primary font-medium mb-1">{model.subtitle}</p>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {model.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {model.description}
              </p>
              <ul className="space-y-2 mb-6">
                {model.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Button
                className={`w-full group ${
                  model.featured
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-foreground hover:bg-foreground/90"
                }`}
                asChild
              >
                <Link href="#contacto">
                  Más Información
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
