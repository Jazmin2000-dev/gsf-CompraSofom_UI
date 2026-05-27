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
          {/*   <Shield className="h-4 w-4 text-primary" />  */}
            <span className="text-sm font-medium text-foreground">+150 SOFOMES vendidas</span>
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
            Compra tu SOFOM{" "}
            <span className="text-primary relative">
              Lista para Operar
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
             Contamos con estructuras de SOFOM diseñadas a la medida de tus objetivos y preparadas para iniciar operaciones.
          </motion.p>

      {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="#contacto"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-bold text-white bg-primary rounded-full overflow-hidden shadow-[0_0_20px_rgba(1,138,190,0.4)] hover:shadow-[0_0_30px_rgba(1,138,190,0.6)] transition-shadow duration-300"
              >
                {/* Animated gradient overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-[#00a8d6] to-primary bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Información
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Pulse ring effect */}
                <span className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping opacity-20" />
              </Link>
            </motion.div>
          </motion.div>      

          {/* CTAs 
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
          </motion.div>
*/}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto pt-8 border-t border-border"
          >
            {[
              { value: "+20", label: "Años de experiencia" },
              { value: "+150", label: "SOFOMES vendidas" },
              { value: "+300", label: "Clientes activos" },
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
        href="https://wa.me/5214772587570"
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
        {/* Icono Oficial de WhatsApp */}
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    </section>
  );
}
