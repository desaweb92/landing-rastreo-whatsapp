import React from 'react';
import { 
  FaWhatsapp, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaShippingFast,
  FaGlobeAmericas,
  FaBoxes,
  FaMapMarkedAlt
} from 'react-icons/fa';

export const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Rastreo", href: "#rastreo" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" }
];

export const services = [
  {
    name: "Envios Nacionales",
    description: "Entrega rápida en todo el territorio colombiano",
    icon: FaShippingFast, // Exportamos el componente directamente
    iconProps: { className: "text-envia-red text-2xl" }, // Props separadas
    href: "#nacionales"
  },
  {
    name: "Envios Internacionales",
    description: "Conexión con más de 200 países",
    icon: FaGlobeAmericas,
    iconProps: { className: "text-envia-red text-2xl" },
    href: "#internacionales"
  },
  {
    name: "Paquetería",
    description: "Soluciones para e-commerce y empresas",
    icon: FaBoxes,
    iconProps: { className: "text-envia-red text-2xl" },
    href: "#paqueteria"
  },
  {
    name: "Rastreo Avanzado",
    description: "Seguimiento en tiempo real",
    icon: FaMapMarkedAlt,
    iconProps: { className: "text-envia-red text-2xl" },
    href: "#rastreo"
  }
];

export const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/573001234567",
    icon: FaWhatsapp, // Componente sin crear elemento
    iconProps: { className: "text-xl" }, // Props separadas
    color: "bg-[#25D366] hover:bg-[#128C7E]"
  },
  {
    name: "Facebook",
    href: "https://facebook.com/envia",
    icon: FaFacebook,
    iconProps: { className: "text-xl" },
    color: "bg-[#1877F2] hover:bg-[#166FE5]"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/envia",
    icon: FaTwitter,
    iconProps: { className: "text-xl" },
    color: "bg-[#1DA1F2] hover:bg-[#1991DB]"
  },
  {
    name: "Instagram",
    href: "https://instagram.com/envia",
    icon: FaInstagram,
    iconProps: { className: "text-xl" },
    color: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/envia",
    icon: FaLinkedin,
    iconProps: { className: "text-xl" },
    color: "bg-[#0077B5] hover:bg-[#00669C]"
  }
];