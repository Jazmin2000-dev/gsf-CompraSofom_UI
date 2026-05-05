"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Link href="/" className="inline-block mb-4">
              <motion.span
                className="font-heading text-3xl font-bold text-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                GSF
              </motion.span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Consultoría financiera especializada en estructuración y adquisición de SOFOM. Tu socio estratégico para operar en el sector financiero mexicano.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#" },
                { label: "SOFOM", href: "#sofom" },
                { label: "Modelos", href: "#modelos" },
                { label: "Proceso", href: "#proceso" },
                { label: "FAQ", href: "#faq" },
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
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
                  href="mailto:contacto@gsf.mx"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  contacto@gsf.mx
                </a>
              </li>
              <li>
                <a
                  href="tel:+525512345678"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  +52 55 1234 5678
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  Ciudad de México, México
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
            © {new Date().getFullYear()} GSF Consultoría Financiera. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Aviso de Privacidad
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Términos y Condiciones
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
