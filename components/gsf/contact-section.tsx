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
  FileText,
  Check
} from "lucide-react";
import { AnimatedWave } from "./animated-wave";

type FormData = {
  name: string;
  email: string;
  whatsapp: string;
  location: string;
  source: string;
  solutionType: string;
  doubtsDescription: string;
  financialProducts: string[];
  priority: string;
  timeline: string;
  additionalServices: string[];
  projectDescription: string;
};

const TOTAL_STEPS = 7; // 5 pasos + enviar solicitud + pantalla de éxito

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    location: "",
    source: "",
    solutionType: "",
    doubtsDescription: "",
    financialProducts: [],
    priority: "",
    timeline: "",
    additionalServices: [],
    projectDescription: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Reemplaza cualquier carácter que no sea número, espacio o el signo '+'
    const valorLimpio = e.target.value.replace(/[^0-9+ ]/g, '');
    setFormData({ ...formData, whatsapp: valorLimpio });
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

  const nextStep = () => {
    setStep((prev) => {
      // 1er Salto: Si en el paso 2 NO eligió diseño de productos, se salta el paso 3 y va al 4
      if (prev === 2 && formData.solutionType !== "Comprar una SOFOM con diseño de productos financieros")  return 4;
      // 2do salto: Si estamos en el paso 5 y solo quieren la SOFOM, saltamos al paso 6
      if (prev === 5 && formData.solutionType === "Comprar solo una SOFOM") return 7;      
      return Math.min(prev + 1, TOTAL_STEPS + 1);
    });
  };

  const prevStep = () => {
    setStep((prev) => {
      // Regreso del 1er Salto
      if (prev === 4 && formData.solutionType !== "Comprar una SOFOM con diseño de productos financieros") return 2;
      // Si estamos en el paso 7, vamos hacia atrás y solo querían la SOFOM, regresamos al 5
      if (prev === 7 && formData.solutionType === "Comprar solo una SOFOM") return 5;     
      return Math.max(prev - 1, 1);
    });
  };



  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Enviamos los datos a tu Webhook
      const response = await fetch("https://hook.us2.make.com/r4oakoyhus8xl9nbp6o9bo57c3psfjwc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // formData ya tiene todo: name, email, priority, etc.
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        // Si se envió correctamente, mostramos la pantalla de éxito
        setStep(TOTAL_STEPS + 1); 
      } else {
        console.error("Hubo un problema al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  // Calculate progress percentage
  const progressPercentage = useMemo(() => {
    return Math.round(((step - 1) / TOTAL_STEPS) * 100);
  }, [step]);

//Vaclidaciones

  //el paso 1 Ahora requiere los 5 campos para ser válido
  const isStep1Valid = 
  formData.name !== "" && 
  formData.email !== "" && 
  formData.whatsapp.replace(/[^0-9]/g, '').length >= 10 && 
  formData.location !== "" && 
  formData.source !== "";

  // El paso 2 es válido SI eligió una solución Y (si eligió "No estoy seguro", debe haber escrito algo)
  const isStep2Valid = 
    formData.solutionType !== "" && 
    formData.solutionType !== "Omitido" &&
    (formData.solutionType !== "No estoy seguro" || formData.doubtsDescription.trim() !== "");

  const isStep3Valid = formData.financialProducts.length > 0;

  // Validación para el nuevo paso
  const isStep7Valid = formData.projectDescription.trim().length > 10;

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
                    WhatsApp <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleWhatsAppChange}
                    placeholder="+52 551 234 5678"
                    className="mt-2 font-heading"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="text-foreground font-sans">
                    ¿De dónde nos buscas? (Estado) <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ej. Guanajuato, CDMX, Jalisco..."
                    className="mt-2 font-heading"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="name" className="text-foreground font-sans">
                    ¿Cómo te enteraste de nosotros? <span className="text-primary">*</span>
                  </Label>
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={(e: any) => handleChange(e)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 font-heading"
                    required
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="Google">Google</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Tiktok">TikTok</option>
                    <option value="Recomendación">Recomendación / Otro</option>
                  </select>
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
                    { value: "Comprar solo una SOFOM", label: "Comprar solo una SOFOM", description: "Solo la estructura legal" },
                    { value: "Comprar una SOFOM con servicios incluidos", label: "Comprar una SOFOM con servicios incluidos", description: "Incluye cumplimiento, operación y sistema" },
                    { value: "Comprar una SOFOM con diseño de productos financieros", label: "Comprar una SOFOM con diseño de productos financieros", description: "Solución completa llave en mano" },
                    { value: "No estoy seguro", label: "No estoy seguro", description: "Necesito asesoría para decidir" },
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

                {/* Campo dinámico que aparece solo si selecciona "No estoy seguro" */}
                <AnimatePresence mode="wait">
                  {/* Cuadro condicional para "No estoy seguro" */}
                  {formData.solutionType === "No estoy seguro" && (
                    <motion.div
                      key="doubts"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <Label htmlFor="doubtsDescription" className="text-foreground font-sans">
                        Cuéntanos un poco más sobre tus dudas <span className="text-primary">*</span>
                      </Label>
                      <textarea
                        id="doubtsDescription"
                        name="doubtsDescription"
                        value={formData.doubtsDescription}
                        onChange={(e) => setFormData({ ...formData, doubtsDescription: e.target.value })}
                        placeholder="Ej. No sé si me conviene más una SOFOM..."
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 font-heading min-h-[100px] resize-y"
                        required
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>  
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!isStep2Valid}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}


            {/* NUEVO Paso 3: Selección de Productos Financieros */}
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
                    Productos Financieros
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Qué productos financieros tienes en mente? (Puedes elegir varios)
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: "Crédito simple", label: "Crédito simple" },
                    { value: "Crédito empresarial", label: "Crédito empresarial" },
                    { value: "Crédito automotriz", label: "Crédito automotriz" },
                    { value: "Crédito hipotecario", label: "Crédito hipotecario" },
                    { value: "Factoraje", label: "Factoraje" },
                    { value: "Crédito de Nómina", label: "Crédito de Nómina" },
                    { value: "Arrendamiento puro", label: "Arrendamiento puro" },
                    { value: "Arrendamiento financiero", label: "Arrendamiento financiero" },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      type="button"
                      onClick={() => handleMultiSelect("financialProducts", option.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 text-left rounded-xl border transition-all ${
                        formData.financialProducts.includes(option.value)
                          ? "border-primary bg-primary/10 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            formData.financialProducts.includes(option.value)
                              ? "bg-primary border-primary"
                              : "border-muted-foreground"
                          }`}
                        >
                          {formData.financialProducts.includes(option.value) && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <span className="text-foreground font-heading font-medium">{option.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!isStep3Valid}
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )}


            {/* Step 4: Priority */}
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
                    Prioridad del Proyecto
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Qué es más importante para tu proyecto?
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "Menor precio", label: "Menor precio", description: "Busco la opción más económica" },
                    { value: "Tiempo de entrega", label: "Tiempo de entrega", description: "Necesito la SOFOM lo antes posible" },
                    { value: "Servicios incluidos", label: "Servicios incluidos", description: "Quiero una solución integral" },
                    { value: "Modelo a la medida", label: "Modelo a la medida", description: "Necesito algo personalizado" },
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
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
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

            {/* Step 5: Timeline */}
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
                    Plazo de Operación
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿En qué plazo te gustaría tener tu SOFOM operando?
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "Lo antes posible", label: "Lo antes posible", description: "Urgente, necesito empezar ya" },
                    { value: "3-6 meses", label: "3-6 meses", description: "Tengo un proyecto en puerta" },
                    { value: "6-12 meses", label: "6-12 meses", description: "Estoy planeando a mediano plazo" }, 
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
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
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

            {/* Step 6: Additional Services */}
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
                    Servicios Adicionales
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    ¿Necesitas alguno de estos servicios? (Selección múltiple)
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { value: "Cumplimiento PLD", label: "Cumplimiento PLD" },
                    { value: "Sistema operativo", label: "Sistema operativo" },
                    { value: "Contabilidad", label: "Contabilidad" },
                    { value: "Legal", label: "Legal" },
                    { value: "Diseño de productos", label: "Diseño de productos" },
                    { value: "Back office operativo", label: "Back office operativo" },
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
      
                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
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


            {/* Nuevo Paso 7: Descripción del Proyecto */}
            {step === 7 && (
              <motion.div
                key="step7"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="mb-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                    Cuéntanos de tu proyecto
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans">
                    Para darte una mejor asesoría, descríbenos brevemente tu modelo de negocio o intención.
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="projectDescription" className="text-foreground font-sans">
                    Descripción del proyecto <span className="text-primary">*</span>
                  </Label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Ej. Planeamos otorgar créditos productivos al sector agrícola en el Bajío..."
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-2 font-heading min-h-[150px] resize-y"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button type="button" variant="outline" onClick={prevStep} className="group">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    className="flex-1 bg-primary hover:bg-primary/90 group"
                    disabled={!isStep7Valid}
                  >
                    Enviar Solicitud
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              Hemos recibido la información de tu proyecto exitosamente. Un experto analizará tu perfil y se pondrá en contacto contigo a la brevedad para darte el seguimiento adecuado.
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
                      location: "",
                      source: "",
                      solutionType: "",
                      doubtsDescription: "",
                      financialProducts: [],
                      priority: "",
                      timeline: "",
                      additionalServices: [],
                      projectDescription: "",
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

