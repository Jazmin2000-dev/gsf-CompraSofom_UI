"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users2, TrendingUp, Building } from "lucide-react";

export function ClientProfileSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const profiles = [
    {
      icon: Briefcase,
      title: "Emprendedores Financieros",
      description: "Visionarios que buscan entrar al sector financiero con una estructura legal sólida y eficiente.",
    },
    {
      icon: Users2,
      title: "Grupos de Inversión",
      description: "Fondos y grupos que buscan diversificar sus operaciones hacia el sector crediticio.",
    },
    {
      icon: TrendingUp,
      title: "Asesores Financieros",
      description: "Profesionales que desean operar su propia institución y ofrecer productos crediticios.",
    },
    {
      icon: Building,
      title: "Empresas Establecidas",
      description: "Corporativos que buscan integrar servicios financieros a su modelo de negocio.",
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
            ¿Para Quién es Este Servicio?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nuestras soluciones están diseñadas para quienes buscan operar en el sector financiero mexicano con respaldo profesional.
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
      </div>
    </section>
  );
}
