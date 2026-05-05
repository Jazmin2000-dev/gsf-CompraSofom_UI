"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Mail, 
  MessageCircle, 
  Video, 
  FileText,
  Check
} from "lucide-react";
import { AnimatedWave } from "./animated-wave";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  solutionType: string;
  priority: string;
  timeline: string;
  additionalServices: string[];
  contactMethod: string;
};

const TOTAL_STEPS = 6;

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    solutionType: "",
    priority: "",
    timeline: "",
    additionalServices: [],
    contactMethod: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleMultiSelect = (field: keyof FormData, value: string) => {
    const currentValues = formData[field] as string[];
    if (currentValues.includes(value)) {
      setFormData({ ...formData, [field]: currentValues.filter((v) => v !== value) });
    } else {
      setFormData({ ...formData, [field]: [...currentValues, value] });
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, TOTAL_STEPS + 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStep(TOTAL_STEPS + 1);
  };

  // Calculate progress percentage
  const progressPercentage = useMemo(() => {
    return Math.round(((step - 1) / TOTAL_STEPS) * 100);
  }, [step]);

  // Determine which contact options are available
  const contactOptions = useMemo(() => {
    const step1Complete = formData.name && formData.email;
    const step2Complete = formData.solutionType !== "";
    const step3Complete = formData.priority !== "";
    const step4Complete = formData.timeline !== "";
    const step5Complete = formData.additionalServices.length > 0;

    return [
      {
        id: "email-whatsapp",
        label: "Recibir información por Email/WhatsApp",
        description: "Te enviaremos información detallada sobre nuestros servicios",
        icon: Mail,
        enabled: Boolean(step1Complete),
        requirement: null,
      },
      {
        id: "advisor",
        label: "Hablar con un Asesor",
        description: "Agenda una llamada telefónica con uno de nuestros expertos",
        icon: MessageCircle,
        enabled: Boolean(step1Complete && step2Complete && step3Complete),
        requirement: !step3Complete ? "Completa el paso 3 para desbloquear" : null,
      },
      {
        id: "video-call",
        label: "Agendar Videollamada",
        description: "Sesión de video personalizada para resolver tus dudas",
        icon: Video,
        enabled: Boolean(step1Complete && step2Complete && step3Complete && step4Complete),
        requirement: !step4Complete ? "Completa el paso 4 para desbloquear" : null,
      },
      {
        id: "proposal",
        label: "Recibir Propuesta Económica",
        description: "Cotización personalizada basada en tus necesidades",
        icon: FileText,
        enabled: Boolean(step1Complete && step2Complete && step3Complete && step4Complete && step5Complete),
        requirement: !step5Complete ? "Completa todos los pasos para desbloquear" : null,
      },
    ];
  }, [formData]);

  const isStep1Valid = formData.name && formData.email;

  return (
    <section id="contacto" className="py-20 md:py-32 bg-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <AnimatedWave />
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-background mb-4 text-balance">
            Solicita Información
          </h2>
          <p className="text-background/70">
            Completa el formulario y un asesor te contactará en menos de 24 horas.
          </p>
        </motion.div>

        {/* Progress Bar */}
        {step <= TOTAL_STEPS && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-background/60 font-sans">Paso {step} de {TOTAL_STEPS}</span>
              <span className="text-sm text-background/60 font-sans">{progressPercentage}% completado</span>
            </div>
            <div className="h-2 bg-background/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Contact Info */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Datos de Contacto
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    Ingresa tus datos para recibir información
                  </p>
                </div>
                <div>
                  <Label htmlFor="name" className="text-foreground font-sans">
                    Nombre completo <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="mt-2 font-heading"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground font-sans">
                    Correo electrónico <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="mt-2 font-heading"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp" className="text-foreground font-sans">
                    WhatsApp <span className="text-muted-foreground text-xs">(Opcional)</span>
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+52 55 1234 5678"
                    className="mt-2 font-heading"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!isStep1Valid}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => {
                      if (isStep1Valid) {
                        setFormData({ ...formData, contactMethod: "email-whatsapp" });
                        setStep(TOTAL_STEPS + 1);
                      }
                    }}
                    disabled={!isStep1Valid}
                    className="text-sm text-primary hover:underline disabled:opacity-50 disabled:no-underline font-sans"
                  >
                    Solo quiero recibir información por correo
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Solution Type */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Tipo de Solución
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Qué tipo de solución buscas?
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "sofom-only", label: "Comprar solo una SOFOM", description: "Solo la estructura legal" },
                    { value: "sofom-services", label: "SOFOM con servicios incluidos", description: "Incluye cumplimiento y operación" },
                    { value: "sofom-products", label: "SOFOM con diseño de productos financieros", description: "Solución completa llave en mano" },
                    { value: "unsure", label: "No estoy seguro", description: "Necesito asesoría para decidir" },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect("solutionType", option.value)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full p-4 text-left rounded-xl border transition-all ${
                        formData.solutionType === option.value
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-foreground font-heading font-medium block">{option.label}</span>
                          <span className="text-sm text-muted-foreground font-sans">{option.description}</span>
                        </div>
                        {formData.solutionType === option.value && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="flex-1 group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                  >
                    {formData.solutionType ? "Continuar" : "Omitir"}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Priority */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Prioridad del Proyecto
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Qué es más importante para tu proyecto?
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "price", label: "Menor precio", description: "Busco la opción más económica" },
                    { value: "time", label: "Tiempo de entrega", description: "Necesito la SOFOM lo antes posible" },
                    { value: "services", label: "Servicios incluidos", description: "Quiero una solución integral" },
                    { value: "custom", label: "Modelo a la medida", description: "Necesito algo personalizado" },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect("priority", option.value)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full p-4 text-left rounded-xl border transition-all ${
                        formData.priority === option.value
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-foreground font-heading font-medium block">{option.label}</span>
                          <span className="text-sm text-muted-foreground font-sans">{option.description}</span>
                        </div>
                        {formData.priority === option.value && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="flex-1 group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!formData.priority}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Timeline */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Plazo de Operación
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿En qué plazo te gustaría tener tu SOFOM operando?
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "asap", label: "Lo antes posible", description: "Urgente, necesito empezar ya" },
                    { value: "3-6", label: "3-6 meses", description: "Tengo un proyecto en puerta" },
                    { value: "6-12", label: "6-12 meses", description: "Estoy planeando a mediano plazo" },
                    { value: "exploring", label: "Solo explorando", description: "Quiero conocer las opciones" },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleSelect("timeline", option.value)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`w-full p-4 text-left rounded-xl border transition-all ${
                        formData.timeline === option.value
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-foreground font-heading font-medium block">{option.label}</span>
                          <span className="text-sm text-muted-foreground font-sans">{option.description}</span>
                        </div>
                        {formData.timeline === option.value && (
                          <Check className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="flex-1 group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!formData.timeline}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Additional Services */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Servicios Adicionales
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Necesitas alguno de estos servicios? (Selección múltiple)
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: "pld", label: "Cumplimiento PLD" },
                    { value: "system", label: "Sistema operativo" },
                    { value: "accounting", label: "Contabilidad" },
                    { value: "legal", label: "Legal" },
                    { value: "product-design", label: "Diseño de productos" },
                    { value: "backoffice", label: "Back office" },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleMultiSelect("additionalServices", option.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 text-left rounded-xl border transition-all ${
                        formData.additionalServices.includes(option.value)
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            formData.additionalServices.includes(option.value)
                              ? "bg-primary border-primary"
                              : "border-muted-foreground"
                          }`}
                        >
                          {formData.additionalServices.includes(option.value) && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <span className="text-foreground font-heading font-medium">{option.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
                <motion.button
                  type="button"
                  onClick={() => setFormData({ ...formData, additionalServices: ["entity-only"] })}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full p-4 text-left rounded-xl border transition-all ${
                    formData.additionalServices.includes("entity-only")
                      ? "border-primary bg-primary/10 shadow-md"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        formData.additionalServices.includes("entity-only")
                          ? "bg-primary border-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {formData.additionalServices.includes("entity-only") && (
                        <Check className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-foreground font-heading font-medium">Solo la persona moral</span>
                  </div>
                </motion.button>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="flex-1 group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={formData.additionalServices.length === 0}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 6: Contact Method Selection */}
            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Forma de Atención
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Cómo te gustaría que te contactemos?
                  </p>
                </div>
                <div className="space-y-3">
                  {contactOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <motion.button
                        key={option.id}
                        type="button"
                        onClick={() => option.enabled && handleSelect("contactMethod", option.id)}
                        whileHover={option.enabled ? { scale: 1.01 } : {}}
                        whileTap={option.enabled ? { scale: 0.99 } : {}}
                        disabled={!option.enabled}
                        className={`w-full p-4 text-left rounded-xl border transition-all ${
                          !option.enabled
                            ? "border-border/50 bg-muted/30 opacity-60 cursor-not-allowed"
                            : formData.contactMethod === option.id
                            ? "border-primary bg-primary/10 shadow-md"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-2 rounded-lg ${
                              option.enabled ? "bg-primary/10" : "bg-muted"
                            }`}
                          >
                            <Icon
                              className={`h-5 w-5 ${
                                option.enabled ? "text-primary" : "text-muted-foreground"
                              }`}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span
                                className={`font-heading font-medium block ${
                                  option.enabled ? "text-foreground" : "text-muted-foreground"
                                }`}
                              >
                                {option.label}
                              </span>
                              {formData.contactMethod === option.id && option.enabled && (
                                <Check className="h-5 w-5 text-primary" />
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground font-sans">
                              {option.description}
                            </span>
                            {option.requirement && (
                              <span className="text-xs text-primary/70 font-sans block mt-1">
                                {option.requirement}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="flex-1 group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    disabled={!formData.contactMethod}
                  >
                    Enviar Solicitud
                    <CheckCircle className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Success State */}
            {step === TOTAL_STEPS + 1 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  ¡Gracias por tu interés!
                </h3>
                <p className="text-muted-foreground mb-6 font-sans">
                  {formData.contactMethod === "email-whatsapp" &&
                    "Te enviaremos información detallada a tu correo en menos de 24 horas."}
                  {formData.contactMethod === "advisor" &&
                    "Un asesor te llamará en las próximas 24 horas hábiles."}
                  {formData.contactMethod === "video-call" &&
                    "Te contactaremos para agendar tu videollamada personalizada."}
                  {formData.contactMethod === "proposal" &&
                    "Recibirás tu propuesta económica personalizada en 48 horas."}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setStep(1);
                    setFormData({
                      name: "",
                      email: "",
                      whatsapp: "",
                      solutionType: "",
                      priority: "",
                      timeline: "",
                      additionalServices: [],
                      contactMethod: "",
                    });
                  }}
                >
                  Enviar otra solicitud
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
