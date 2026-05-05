"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, Briefcase, TrendingUp } from "lucide-react";

export function CredibilitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Building2,
      title: "Especialización Financiera",
      description: "Enfoque exclusivo en el sector financiero mexicano, con profundo conocimiento de la regulación CNBV y CONDUSEF.",
    },
    {
      icon: Users,
      title: "Enfoque Consultivo",
      description: "No solo entregamos documentos. Te acompañamos en cada paso con asesoría estratégica personalizada.",
    },
    {
      icon: Briefcase,
      title: "Ecosistema Completo",
      description: "Desde la estructura legal hasta la tecnología operativa. Todo lo que necesitas para iniciar operaciones.",
    },
    {
      icon: TrendingUp,
      title: "Visión de Negocio",
      description: "Entendemos tus objetivos comerciales y diseñamos soluciones que potencian tu rentabilidad.",
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
            ¿Por qué GSF?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos más que una firma de abogados. Somos tu socio estratégico para construir y operar una institución financiera exitosa.
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
