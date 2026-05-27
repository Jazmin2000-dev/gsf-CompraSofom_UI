"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TbBuildingBank, TbShieldCheck, TbChartArrowsVertical } from "react-icons/tb";
import { 
  Scale, 
  CreditCard, 
  Landmark, 
  CheckCircle,
  CalendarDays,
  FileText,
  ShieldCheck,
  TrendingUp,
  Settings,
} from "lucide-react";


// Custom minimalist SVG icons - Vercel/Stripe style with thin strokes
// Card 1: Financial structuring - node network with floating geometric cards
const FinancialStructureIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Floating geometric cards */}
    <rect x="8" y="12" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <rect x="26" y="8" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <rect x="18" y="28" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Connecting thin lines */}
    <line x1="22" y1="17" x2="26" y2="13" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="25" y1="28" x2="30" y2="18" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <line x1="18" y1="33" x2="15" y2="22" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Accent nodes - corporate blue */}
    <circle cx="22" cy="17" r="2" fill="#018abe" />
    <circle cx="30" cy="18" r="1.5" fill="#018abe" opacity="0.6" />
    <circle cx="15" cy="22" r="1.5" fill="#018abe" opacity="0.6" />
  </svg>
);

// Card 2: Business scaling - expanding geometric blocks with structural lines
const ScalingBlocksIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Expanding blocks */}
    <rect x="10" y="26" width="8" height="12" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <rect x="20" y="20" width="8" height="18" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    <rect x="30" y="14" width="8" height="24" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Interconnected structural lines */}
    <line x1="14" y1="26" x2="14" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-slate-800" />
    <line x1="24" y1="20" x2="24" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-slate-800" />
    <line x1="34" y1="14" x2="34" y2="8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-slate-800" />
    {/* Connecting horizontal line */}
    <line x1="14" y1="12" x2="34" y2="8" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
    {/* Accent node */}
    <circle cx="34" cy="8" r="2" fill="#018abe" />
  </svg>
);

// Card 3: Flexibility and growth - lightweight shield with ascending bars
const FlexGrowthIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    {/* Lightweight shield outline */}
    <path d="M24 6 L38 12 L38 26 C38 34 24 42 24 42 C24 42 10 34 10 26 L10 12 Z" stroke="currentColor" strokeWidth="1" className="text-slate-800" fill="none" />
    {/* Ascending ultra-thin bars inside */}
    <line x1="16" y1="32" x2="16" y2="26" stroke="currentColor" strokeWidth="1.5" className="text-slate-800" />
    <line x1="21" y1="32" x2="21" y2="22" stroke="currentColor" strokeWidth="1.5" className="text-slate-800" />
    <line x1="26" y1="32" x2="26" y2="18" stroke="currentColor" strokeWidth="1.5" className="text-slate-800" />
    <line x1="31" y1="32" x2="31" y2="14" stroke="currentColor" strokeWidth="1.5" className="text-slate-800" />
    {/* Growth arrow accent */}
    <path d="M16 24 L31 12" stroke="#018abe" strokeWidth="1" />
    <path d="M28 11 L32 12 L31 16" stroke="#018abe" strokeWidth="1" fill="none" />
  </svg>
);


// Custom minimalist SVG icons
const CreditIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Card shape */}
    <rect x="4" y="8" width="24" height="16" rx="2" />
    {/* Stripe */}
    <line x1="4" y1="14" x2="28" y2="14" />
    {/* Chip */}
    <rect x="8" y="17" width="5" height="4" rx="0.5" />
    <line x1="10" y1="17" x2="10" y2="21" />
    <line x1="11.5" y1="17" x2="11.5" y2="21" />
    {/* Data flow lines */}
    <line x1="18" y1="18" x2="24" y2="18" />
    <line x1="18" y1="20" x2="22" y2="20" />
  </svg>
);

const InstitutionIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Classical building */}
    <path d="M6 12 L16 6 L26 12" />
    <line x1="6" y1="12" x2="26" y2="12" />
    <line x1="6" y1="26" x2="26" y2="26" />
    {/* Pillars */}
    <line x1="9" y1="12" x2="9" y2="26" />
    <line x1="14" y1="12" x2="14" y2="26" />
    <line x1="18" y1="12" x2="18" y2="26" />
    <line x1="23" y1="12" x2="23" y2="26" />
    {/* Pediment detail */}
    <circle cx="16" cy="9" r="1.5" />
  </svg>
);

const CheckmarkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Circle */}
    <circle cx="16" cy="16" r="12" />
    {/* Checkmark */}
    <polyline points="10,16 14,20 22,12" />
  </svg>
);


export function SofomSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
{/*
  const benefits = [
    "Existen modelos de SOFOM adaptados a diferentes necesidades y niveles de operación",
    "Captación de recursos mediante instrumentos de deuda",
    "Arrendamiento financiero y factoraje",
    "Flexibilidad operativa y menores costos regulatorios",
    "Acceso a fondeo institucional y bursátil",
    "Marco legal robusto y reconocido",
  ]; */}

  const cards = [
    {
      icon: FinancialStructureIcon,
      title: "Productos",
      description: "Una SOFOM te permite ofrecer financiamiento a través de productos como:",
      features: [
        { icon: CheckmarkIcon, text: "Crédito" },
        { icon: CheckmarkIcon, text: "Arrendamiento" },
        { icon: CheckmarkIcon, text: "Factoraje" }
      ]
    },
    {
      icon: ScalingBlocksIcon,
      title: "Aplicaciones estratégicas",
      description: "Empresas e inversionistas utilizan esta figura para:",
      features: [
        { icon: CheckmarkIcon, text: "Financiar a sus clientes" },
        { icon: CheckmarkIcon, text: "Profesionalizar sus finanzas" },
        { icon: CheckmarkIcon, text: "Estructurar productos financieros" },
        { icon: CheckmarkIcon, text: "Diversificar y escalar su negocio" }
      ]
    },
    {
      icon: FlexGrowthIcon,
      title: "Beneficios",
      description: "Esta figura ofrece servicios que impulsan tu operación:",
      features: [
        { icon: CheckmarkIcon, text: "Mayor flexibilidad operativa " },
        { icon: CheckmarkIcon, text: "Productos accesibles a todo público" },
        { icon: CheckmarkIcon, text: "Adaptable a distintos modelos de negocio" }
      ]
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
            Una figura flexible para ofrecer financiamiento
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Empresas, inversionistas y grupos empresariales utilizan SOFOMES para operar soluciones de crédito más accesibles.
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
              // Agregamos flex y flex-col para que el contenido se distribuya correctamente
              className="group flex flex-col bg-card p-8 rounded-2xl border border-border text-center hover:shadow-xl hover:shadow-primary/5 transition-shadow"
            >
              <motion.div
                className="w-16 h-16 bg-white border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary/50 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <card.icon className="h-8 w-8 text-primary" />
              </motion.div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              {/* flex-grow asegura que las descripciones empujen la lista hacia abajo si tienen distinto tamaño */}
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>
              
              {/* Nueva sección renderizando la lista de features con sus iconos */}
              <ul className="w-full space-y-3 pt-6 border-t border-border/50 mt-auto text-left">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <feature.icon className="h-5 w-5 text-primary shrink-0 opacity-80" />
                    <span className="text-sm text-muted-foreground leading-snug">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

{/* Banner Inferior: Metodología con enfoque en resultados */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-secondary via-secondary to-primary/10 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-center gap-6 border border-slate-100 shadow-sm"
        >
       {/*   <div className="w-16 h-16 rounded-full bg-blue-50/80 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-8 w-8 text-[#018abe]" strokeWidth={1.5} />
          </div> */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="font-heading text-lg md:text-xl font-bold text-slate-900 mb-2">
              Cada proyecto es único
            </h3>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed m-0">
              Existen modelos de SOFOM adaptados a diferentes necesidades de modelo de negocio.
            </p>
          </div>
        </motion.div>


{/*
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-secondary via-secondary to-primary/5 rounded-3xl p-8 md:p-12 border border-border"
        >
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Cada proyecto es único
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
        </motion.div> */}
        
        
      </div>
    </section>
  );
}