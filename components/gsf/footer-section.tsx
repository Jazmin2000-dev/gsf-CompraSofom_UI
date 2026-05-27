"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronRight, Facebook ,Instagram ,
  Linkedin, Youtube } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >           
          <h4 className="font-heading font-semibold text-foreground mb-4"></h4>

            {/* Redes Sociales */}
            <div className="flex items-center gap-3 mt-auto pt-2">
              {/* Facebook */}
              <a href="https://www.facebook.com/grupogsf/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted rounded-full text-muted-foreground hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110">
                <Facebook className="h-4 w-4" />
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/grupo_gsf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted rounded-full text-muted-foreground hover:bg-[#E4405F] hover:text-white transition-all hover:scale-110">
                <Instagram className="h-4 w-4" />
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/gsf-grupo-de-soluciones-financieras" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted rounded-full text-muted-foreground hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110">
                <Linkedin className="h-4 w-4" />
              </a>
              
              {/* YouTube */}
              <a href="https://www.youtube.com/@GrupoGSF-yz7zb" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted rounded-full text-muted-foreground hover:bg-[#FF0000] hover:text-white transition-all hover:scale-110">
                <Youtube className="h-4 w-4" />
              </a>
              
              {/* WhatsApp (Vector personalizado) */}
              <a href="https://wa.me/524772587570" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted rounded-full text-muted-foreground hover:bg-[#25D366] hover:text-white transition-all hover:scale-110">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* TikTok (Vector personalizado) */}
              <a href="https://www.tiktok.com/@grupo_gsf?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-muted rounded-full text-muted-foreground hover:bg-black hover:text-white transition-all hover:scale-110">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.88 5.76-1.74 1.39-4.14 1.95-6.28 1.45-2.14-.5-4.04-1.92-5.07-3.89-1.03-1.96-1.16-4.32-.38-6.38.77-2.07 2.44-3.74 4.54-4.5 1.58-.57 3.32-.69 4.96-.34V13.1c-1.39-.33-2.89-.17-4.14.49-1.25.66-2.26 1.83-2.69 3.19-.43 1.36-.26 2.88.46 4.09.73 1.21 2.01 2.1 3.42 2.3 1.41.21 2.9-.12 4.02-1.02 1.13-.9 1.78-2.3 1.82-3.76.08-4.66.03-9.32.06-13.98z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Links amigables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-foreground mb-4">Descubre más</h4>
            <ul className="space-y-3">
              {[
                { label: "Volver al inicio", href: "#" },
                { label: "¿Qué es una SOFOM?", href: "#sofom" },
                { label: "Modelos de operación", href: "#modelos" },
                { label: "Cómo es el proceso", href: "#proceso" },
                { label: "Preguntas frecuentes", href: "#faq" },
              ].map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all flex items-center group w-fit"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 group-hover:mr-1 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:comercial@grupogsf.com.mx"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  comercial@grupogsf.com.mx
                </a>
              </li>
              <li>
                <a
                  href="tel:+524772587570"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  +52 477 258 7570
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  Blvd. Mariano Escobedo Pte. 4502-int 401 b, San Isidro de Jerez, 37530 León de los Aldama, Guanajuato
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GSF. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://grupogsf.com.mx/elementor-36194/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-all"
            >
              Aviso de Privacidad
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}