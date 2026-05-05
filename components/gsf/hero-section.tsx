"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, PlayCircle, Shield } from "lucide-react";
import { AnimatedGradient } from "./animated-gradient";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden flex items-center">
      <AnimatedGradient />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border mb-8"
          >
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">+100 SOFOMs estructuradas</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance"
          >
            Modelos SOFOM{" "}
            <span className="text-primary relative">
              Listos para Operar
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty"
          >
            Más que trámites legales: tu ecosistema completo para operar una institución financiera en México. Consultoría especializada y soluciones integrales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto group" asChild>
              <Link href="#contacto">
                Solicitar Información
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &rarr;
                </motion.span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto backdrop-blur-sm" asChild>
              <Link href="#contacto">
                <PlayCircle className="h-5 w-5 mr-2" />
                Agendar Videollamada
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto pt-8 border-t border-border"
          >
            {[
              { value: "15+", label: "Años de experiencia" },
              { value: "100+", label: "SOFOMs estructuradas" },
              { value: "98%", label: "Clientes satisfechos" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5215512345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg"
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
