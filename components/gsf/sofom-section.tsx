"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, CreditCard, Landmark, CheckCircle } from "lucide-react";

export function SofomSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "Otorgamiento de crédito sin requerir autorización bancaria",
    "Captación de recursos mediante instrumentos de deuda",
    "Arrendamiento financiero y factoraje",
    "Flexibilidad operativa y menores costos regulatorios",
    "Acceso a fondeo institucional y bursátil",
    "Marco legal robusto y reconocido",
  ];

  const cards = [
    {
      icon: Scale,
      title: "Estructura Legal",
      description: "Sociedad Financiera de Objeto Múltiple, regulada por la CNBV como Entidad Financiera.",
    },
    {
      icon: CreditCard,
      title: "Operaciones Permitidas",
      description: "Crédito, arrendamiento financiero y factoraje financiero sin necesidad de autorización bancaria.",
    },
    {
      icon: Landmark,
      title: "Ventaja Competitiva",
      description: "Marco regulatorio flexible que permite operar con menores requisitos que la banca tradicional.",
    },
  ];

  return (
    <section id="sofom" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
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
            ¿Qué Implica Adquirir una SOFOM?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Una SOFOM te permite operar como institución financiera con un marco legal favorable y requisitos accesibles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card p-8 rounded-2xl border border-border text-center hover:shadow-xl hover:shadow-primary/5 transition-shadow"
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <card.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-secondary via-secondary to-primary/5 rounded-3xl p-8 md:p-12 border border-border"
        >
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            ¿Por qué los Inversionistas Eligen SOFOM?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
