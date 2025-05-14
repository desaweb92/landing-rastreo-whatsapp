// src/data/navigation.js (versión con react-icons)
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const navigation = [
  {
    name: "Compañía",
    links: [
      { name: "Nosotros", href: "/nosotros" },
      { name: "Historia", href: "/historia" },
      { name: "Equipo", href: "/equipo" },
      { name: "Trabaja con nosotros", href: "/trabaja-con-nosotros" }
    ]
  },
  {
    name: "Servicios",
    links: [
      { name: "Envios nacionales", href: "/servicios/nacionales" },
      { name: "Envios internacionales", href: "/servicios/internacionales" },
      { name: "Soluciones logísticas", href: "/servicios/logistica" },
      { name: "Trazabilidad", href: "/servicios/trazabilidad" }
    ]
  },
  {
    name: "Legal",
    links: [
      { name: "Políticas de privacidad", href: "/politicas-privacidad" },
      { name: "Términos y condiciones", href: "/terminos-condiciones" },
      { name: "FAQ", href: "/preguntas-frecuentes" }
    ]
  }
];

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/envia",
    icon: FaFacebook
  },
  {
    name: "Twitter",
    href: "https://twitter.com/envia",
    icon: FaTwitter
  },
  {
    name: "Instagram",
    href: "https://instagram.com/envia",
    icon: FaInstagram
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/envia",
    icon: FaLinkedin
  }
];