"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "¿Cuál es el costo de adquirir una SOFOM?",
      answer: "El costo varía según el modelo seleccionado y los servicios adicionales requeridos. Ofrecemos desde estructuras legales básicas hasta soluciones llave en mano con tecnología integrada. Durante la consulta inicial, te presentamos opciones detalladas con costos específicos para cada una.",
    },
    {
      question: "¿Cuánto tiempo toma el proceso de adquisición?",
      answer: "El tiempo promedio es de 4 a 8 semanas dependiendo del modelo seleccionado. Las estructuras básicas pueden completarse más rápido, mientras que las soluciones integrales con tecnología requieren más tiempo de implementación y configuración.",
    },
    {
      question: "¿Es mejor comprar una SOFOM existente o crear una nueva?",
      answer: "Adquirir una SOFOM existente ofrece ventajas significativas: elimina el tiempo de constitución, incluye historial operativo, y en muchos casos ya cuenta con registros ante autoridades. Crear una nueva puede tomar de 6 a 12 meses y requiere más trámites. Te asesoramos sobre la mejor opción según tu situación.",
    },
    {
      question: "¿Qué requisitos necesito para operar una SOFOM?",
      answer: "Los requisitos principales incluyen: capital mínimo según el tipo de operaciones, cumplimiento de normativa PLD/FT, registro ante CONDUSEF, y dependiendo del modelo, registro ante CNBV. Te guiamos en cada requisito y te ayudamos a cumplirlos.",
    },
    {
      question: "¿Qué tipo de operaciones puede realizar una SOFOM?",
      answer: "Una SOFOM puede realizar operaciones de crédito, arrendamiento financiero y factoraje financiero. Esto incluye préstamos personales, crédito automotriz, crédito empresarial, arrendamiento de equipos, y descuento de facturas, entre otros.",
    },
    {
      question: "¿Ofrecen soporte después de la adquisición?",
      answer: "Sí, todos nuestros modelos incluyen un período de soporte post-implementación. Además, ofrecemos planes de acompañamiento continuo que incluyen asesoría regulatoria, soporte técnico, y actualización de procesos según cambios normativos.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos las dudas más comunes sobre adquisición de SOFOM.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <AccordionItem value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
