'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCheck, CheckCircle2, Clock, FileCheck2, FolderLock, Link2, Lock, Menu, MonitorSmartphone, QrCode, ShieldCheck, Sparkles, TrendingUp, X, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.3 },
};
const headerLogoSrc = "/logos/woss-header.png";
const footerLogoSrc = "/logos/woss-footer.png";
const physicalCardImage = "/logos/woss-card.png";

const heroHighlights = [
  "Verificación en menos de 60 segundos",
  "Centro de documentos cifrado",
  "Control total de privacidad",
  "Sincronización en tiempo real",
];
const heroStats = [
  { value: "8,200+", label: "Identidades WOSS activas" },
  { value: "<60 s", label: "Tiempo promedio de verificación" },
  { value: "4.9/5", label: "Calificación en la app WOSS" },
];
const instantValueBullets = [
  {
    icon: Lock,
    label: "Controlas lo que compartes",
    description: "Autoriza campos, documentos o solo tu sello verificado según el receptor.",
  },
  {
    icon: FileCheck2,
    label: "Firma digital segura y trazable",
    description: "Confirma acuerdos y entregas con sello WOSS y registro de auditoría.",
  },
  {
    icon: Link2,
    label: "Link y QR personales",
    description: "Comparte con un solo toque y mantén un acceso dinámico siempre actualizado.",
  },
  {
    icon: TrendingUp,
    label: "Analíticas de confianza",
    description: "Mide cuántas verificaciones realizas y quién accede a tu información.",
  },
  {
    icon: MonitorSmartphone,
    label: "Funciona en cualquier dispositivo",
    description: "Gestiona desde la app WOSS o la versión web, siempre sincronizado.",
  },
  {
    icon: Zap,
    label: "Comparte a la velocidad de un clic",
    description: "Envía documentos y verificaciones al instante, sin demoras ni complicaciones.",
  },
];
const plans = [
  {
    name: "START",
    heading: "🚀 PLAN START",
    description: "Tu identidad digital gratuito para compartir con confianza.",
    ctaLabel: "👉 Crear mi WOSS ID Gratis",
    href: "/onboarding",
    features: [
      "1 identidad verificada",
      "Hasta 3 documentos",
      "250 MB de almacenamiento",
      "Link/QR personal",
      "Verificación en tiempo real",
    ],
    badge: {
      label: "Gratis",
      variant: "bg-[var(--woss-uv)] text-[var(--woss-white)]",
    },
  },
  {
    name: "ONE",
    heading: "⚡ PLAN ONE — $9 / mes",
    description: "Confianza profesional, siempre.",
    ctaLabel: "⚡ Actualizar a ONE",
    href: "/onboarding?plan=one",
    features: [
      "Identidades y documentos ilimitados",
      "Compartir con permisos y vencimiento",
      "Tarjeta física WOSS ID con chip NFC",
      "Panel avanzado de analíticas",
      "Soporte prioritario",
    ],
    badge: {
      label: "Más valor",
      variant: "bg-[var(--woss-blue)] text-[var(--woss-navy)]",
    },
  },
];
const launchBonuses = [
  "🎁 7 dias de vista PRO con tu link personalizado (link personalizado listo para compartir)",
];
const howItWorksSteps = [
  {
    icon: BadgeCheck,
    title: "Crea tu WOSS ID y verifica tu identidad",
    description: "Sube tu INE y una selfie guiada para validar en segundos.",
  },
  {
    icon: FolderLock,
    title: "Organiza tus documentos importantes",
    description: "INE, licencia, póliza o factura, todo cifrado y bajo tu control.",
  },
  {
    icon: QrCode,
    title: "Comparte por link o QR",
    description: "WOSS ID valida por ti, en tiempo real.",
  },
];
const testimonials = [
  "“Dejé de mandar mi INE por WhatsApp. Ahora uso mi link WOSS.”",
  "“Mis clientes confían más, cierro ventas más rápido.”",
  "“Me validaron en segundos, sin estrés ni papeleo.”",
];
const faqs = [
  {
    question: "¿Qué datos se muestran al verificarme?",
    answer: "Solo los que tú autorices.",
  },
  {
    question: "¿Cómo se almacenan mis documentos?",
    answer: "Con cifrado seguro y servidores certificados.",
  },
  {
    question: "¿Puedo revocar o eliminar un link?",
    answer: "Sí, en segundos desde tu panel.",
  },
  {
    question: "¿Funciona fuera de mi país?",
    answer: "Sí, WOSS ID es global.",
  },
  {
    question: "¿Diferencia entre START y ONE?",
    answer: "START es gratis y esencial. ONE es ilimitado y profesional.",
  },
];
export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--woss-navy)] text-[var(--woss-white)] antialiased">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(80,126,255,0.18),transparent_55%)]" aria-hidden="true" />
      <div className="relative">
        <Header />
        <HeroSection />
        <InstantValue />
        <OfferStack />
        <HowItWorks />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#valor", label: "Beneficios" },
    { href: "#planes", label: "Planes" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--woss-navy)] backdrop-blur shadow-lg shadow-gray-400/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center justify-center" aria-label="WOSS ID inicio">
            <div className="relative w-[min(14.5rem,60vw)] max-w-[60vw] aspect-[3.667] overflow-hidden sm:w-[19.7rem] sm:max-w-none">
              <Image
                src={footerLogoSrc}
                alt="WOSS ID"
                fill
                priority
                sizes="(min-width: 640px) 330px, 60vw"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--woss-slate)] sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--woss-white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 sm:gap-4">
          <Button
            asChild
            size="sm"
            className="hidden sm:flex rounded-2xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 px-5 py-2 text-sm font-semibold text-[var(--woss-navy)] shadow-lg transition hover:from-gray-200 hover:via-gray-400 hover:to-gray-200 focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
          >
            <Link href="/onboarding">Crear mi WOSS ID</Link>
          </Button>
          <div className="sm:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="flex flex-col gap-4 px-4 pb-4 text-sm font-medium text-[var(--woss-slate)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--woss-white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-2 rounded-2xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 px-5 py-2 text-sm font-semibold text-[var(--woss-navy)] shadow-lg transition hover:from-gray-200 hover:via-gray-400 hover:to-gray-200 focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
            >
              <Link href="/onboarding">Crear mi WOSS ID</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
function HeroSection() {
  return (
    <motion.section
      {...fadeInUp}
      className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-20 sm:px-6 lg:px-8 lg:flex-row lg:items-center"
    >
      <div className="space-y-10 lg:w-3/5">
        <Badge className="w-fit rounded-full bg-[var(--woss-graphite)] px-4 py-2 text-sm font-medium text-[var(--woss-white)]">
          WOSS ID — Confianza instantánea para todos.
        </Badge>
        <div className="space-y-6">
          <h1 className="font-heading text-4xl font-semibold leading-tight text-[var(--woss-white)] sm:text-5xl lg:text-6xl">
            Tu identidad y tus documentos, en un solo lugar seguro.
          </h1>
          <p className="max-w-2xl text-lg text-[var(--woss-slate)] sm:text-xl">
            Verifica quién eres y comparte solo lo necesario con un link o QR. Tu identidad digital empieza hoy.
          </p>
          <p className="max-w-2xl text-base text-[var(--woss-slate)]">
            WOSS ID conecta tu identidad verificada, tus documentos críticos y tus sellos de confianza en una sola app con control total.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {heroHighlights.map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-2xl bg-[var(--woss-graphite)] px-4 py-3 text-sm text-[var(--woss-white)]">
              <CheckCircle2 className="h-5 w-5 text-[var(--woss-uv)]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-2xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 px-6 py-3 text-base font-semibold text-[var(--woss-navy)] shadow-lg transition hover:from-gray-200 hover:via-gray-400 hover:to-gray-200 focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
          >
            <Link href="/onboarding">
              👉 Crear mi WOSS ID
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-[var(--woss-white)] transition hover:border-[var(--woss-uv)] hover:text-[var(--woss-white)] focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
          >
            <Link href="#how-it-works">Ver cómo funciona</Link>
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--woss-slate)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[var(--woss-uv)]" aria-hidden="true" />
            <span>Control total desde la app WOSS</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[var(--woss-uv)]" aria-hidden="true" />
            <span>Activa tu identidad en menos de un minuto</span>
          </div>
        </div>
        <div className="grid gap-4 pt-6 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-[var(--woss-graphite)]/80 px-5 py-4 text-center shadow-lg">
              <p className="font-heading text-2xl font-semibold text-[var(--woss-white)]">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-[var(--woss-slate)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        {...fadeInUp}
        className="relative isolate grid gap-6 rounded-3xl border border-white/10 bg-[var(--woss-graphite)]/70 p-8 shadow-2xl backdrop-blur lg:w-2/5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--woss-slate)]">Panel WOSS ID</p>
            <p className="mt-2 text-2xl font-semibold text-[var(--woss-white)]">Tu centro de control personal</p>
          </div>
          <Badge className="rounded-full bg-[var(--woss-uv)]/20 px-3 py-1 text-xs text-[var(--woss-uv)]">
            Disponible 24/7
          </Badge>
        </div>
        <div className="space-y-3">
          {[
            { icon: BadgeCheck, label: "Tu identidad verificada y activa" },
            { icon: FolderLock, label: "Documentos seguros y organizados" },
            { icon: CheckCheck, label: "Verificaciones en tiempo real" },
            { icon: Link2, label: "Link o QR personal para compartir solo lo necesario" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[var(--woss-navy)]/30 px-4 py-3">
              <Icon className="h-5 w-5 flex-none text-[var(--woss-uv)]" aria-hidden="true" />
              <span className="text-sm text-[var(--woss-white)]">{label}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-dashed border-[var(--woss-blue)]/40 bg-[var(--woss-blue)]/10 p-4 text-sm text-[var(--woss-slate)]">
          📲 Descarga la app WOSS y gestiona tu identidad desde tu panel principal.
        </div>
      </motion.div>
    </motion.section>
  );
}
function InstantValue() {
  return (
    <motion.section
      id="valor"
      {...fadeInUp}
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20 lg:py-24"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Badge className="rounded-full bg-[var(--woss-uv)]/15 px-4 py-2 text-[var(--woss-uv)]">⚡ Valor inmediato</Badge>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-[var(--woss-white)] sm:text-4xl">
            Beneficios que sientes desde el primer minuto
          </h2>
        </div>
        <p className="max-w-lg text-base text-[var(--woss-slate)]">
          WOSS ID elimina fricción, reduce riesgo y te da control total sobre tu identidad digital.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {instantValueBullets.map(({ icon: Icon, label, description }) => (
          <Card key={label} className="border-white/10 bg-[var(--woss-graphite)]/80 backdrop-blur">
            <CardContent className="flex h-full flex-col gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--woss-blue)]/15 text-[var(--woss-blue)]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-base font-medium text-[var(--woss-white)]">{label}</p>
              <p className="text-sm leading-relaxed text-[var(--woss-slate)]">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-[var(--woss-graphite)]/70 p-8 shadow-lg sm:grid-cols-2">
        <div className="space-y-3">
          <h3 className="font-heading text-2xl text-[var(--woss-white)]">Un panel pensado para crecer contigo</h3>
          <p className="text-sm leading-relaxed text-[var(--woss-slate)]">
            Conserva historiales, renueva documentos vencidos y comparte versiones actualizadas sin reenviar archivos. Cada interacción queda registrada para que tengas trazabilidad completa.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-2xl text-[var(--woss-white)]">Velocidad que impulsa tu día</h3>
          <p className="text-sm leading-relaxed text-[var(--woss-slate)]">
            Comparte y gestiona tus documentos con precisión instantánea.
            WOSS sincroniza tus procesos a la velocidad de tu día, asegurando orden, seguridad y control total desde cualquier dispositivo. Todo fluye sin fricción, en segundos.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
function OfferStack() {
  return (
    <motion.section
      id="planes"
      {...fadeInUp}
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20 lg:py-24"
    >
      <div className="mb-12 flex flex-col gap-6 text-center">
        <Badge className="mx-auto w-fit rounded-full bg-[var(--woss-blue)]/20 px-4 py-2 text-sm text-[var(--woss-blue)]">
          💎 La Oferta
        </Badge>
        <h2 className="font-heading text-3xl font-semibold text-[var(--woss-white)] sm:text-4xl">
          Tu identidad digital empieza aquí
        </h2>
        <p className="mx-auto max-w-2xl text-base text-[var(--woss-slate)]">
          Elige cómo iniciar y escala cuando necesites más control.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col border-white/10 bg-[var(--woss-graphite)]/80 p-8 backdrop-blur">
            <CardHeader className="space-y-4 p-0">
              <div className="flex items-center justify-between">
                <Badge className={`rounded-full px-4 py-1 text-xs font-semibold ${plan.badge.variant}`}>{plan.badge.label}</Badge>
                <span className="text-sm uppercase tracking-wide text-[var(--woss-slate)]">{plan.name}</span>
              </div>
              <CardTitle className="text-left font-heading text-2xl text-[var(--woss-white)] sm:text-3xl">
                {plan.heading}
              </CardTitle>
              <p className="text-sm text-[var(--woss-slate)]">{plan.description}</p>
            </CardHeader>
            <CardContent className="mt-6 flex flex-1 flex-col gap-6 p-0">
              <ul className="space-y-4 text-sm text-[var(--woss-white)]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-none text-[var(--woss-uv)]" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.name === "ONE" && (
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--woss-navy)]/40 p-4 shadow-inner">
                  <p className="text-sm font-semibold text-[var(--woss-white)]">Tarjeta física WOSS ONE</p>
                  <p className="mt-1 text-xs text-[var(--woss-slate)]">Entrega con chip NFC listo para compartir tu identidad digital en persona.</p>
                  <div className="relative mt-4 h-48 w-full">
                    <Image
                      src={physicalCardImage}
                      alt="Tarjeta física WOSS ONE con chip NFC"
                      fill
                      sizes="(min-width: 1024px) 440px, (min-width: 640px) 320px, 100vw"
                      className="rounded-xl object-contain"
                    />
                  </div>
                </div>
              )}
              {plan.name === "START" && (
                <div className="space-y-3 rounded-2xl border border-dashed border-[var(--woss-uv)]/40 bg-[var(--woss-uv)]/10 p-4 text-sm text-[var(--woss-slate)]">
                  <p className="font-semibold text-[var(--woss-white)]">Bonos de lanzamiento:</p>
                  <ul className="space-y-2">
                    {launchBonuses.map((bonus) => (
                      <li key={bonus} className="flex items-start gap-2 text-left">
                        <Sparkles className="mt-0.5 h-4 w-4 text-[var(--woss-uv)]" aria-hidden="true" />
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </ul>
                  
                </div>
              )}
              <Button
                asChild
                size="lg"
                className="mt-auto rounded-2xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 px-6 py-3 text-base font-semibold text-[var(--woss-navy)] shadow-lg transition hover:from-gray-200 hover:via-gray-400 hover:to-gray-200 focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
              >
                <Link href={plan.href}>{plan.ctaLabel}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-white/10 bg-[var(--woss-graphite)]/80 p-8 text-sm text-[var(--woss-slate)] shadow-lg">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-heading text-lg text-[var(--woss-white)]">Incluye app WOSS</p>
            <p className="mt-2">
              Accede a tu panel desde iOS, Android o web y mantén tu identidad sincronizada en todos tus dispositivos.
            </p>
          </div>
          <div>
            <p className="font-heading text-lg text-[var(--woss-white)]">Sellos y verificación en vivo</p>
            <p className="mt-2">
              Cada link, QR o firma digital se valida en tiempo real con sello “Verificado por WOSS”.
            </p>
          </div>
          <div>
            <p className="font-heading text-lg text-[var(--woss-white)]">Soporte cercano</p>
            <p className="mt-2">
              Asesoría en español por chat y correo para ayudarte a configurar tu identidad digital en minutos.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      {...fadeInUp}
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20 lg:py-24"
    >
      <div className="mb-12 flex flex-col gap-6 text-center">
        <Badge className="mx-auto w-fit rounded-full bg-[var(--woss-uv)]/20 px-4 py-2 text-sm text-[var(--woss-uv)]">
          🔍 Cómo funciona
        </Badge>
        <h2 className="font-heading text-3xl font-semibold text-[var(--woss-white)] sm:text-4xl">
          Tres pasos. Un resultado: confianza inmediata.
        </h2>
        <p className="mx-auto max-w-2xl text-base text-[var(--woss-slate)]">
          Activa tu WOSS ID sin papeleo y comparte con seguridad desde el primer minuto.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {howItWorksSteps.map((step, index) => (
          <Card key={step.title} className="border-white/10 bg-[var(--woss-graphite)]/80 p-6 text-left backdrop-blur">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--woss-blue)]/15 text-[var(--woss-blue)]">
              <step.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm uppercase tracking-wide text-[var(--woss-slate)]">Paso {index + 1}</p>
              <h3 className="font-heading text-xl text-[var(--woss-white)]">{step.title}</h3>
              <p className="text-sm text-[var(--woss-slate)]">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-3 text-center text-sm text-[var(--woss-slate)]">
        <p className="font-heading text-lg text-[var(--woss-white)]">Todo respaldado por validaciones biométricas y auditoría continua.</p>
        <p>A partir del paso 3 puedes compartir un link dinámico o tu QR.</p>
      </div>
    </motion.section>
  );
}
function TestimonialsSection() {
  return (
    <motion.section
      id="testimonios"
      {...fadeInUp}
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20 lg:py-24"
    >
      <div className="mb-12 flex flex-col gap-6 text-center">
        <Badge className="mx-auto w-fit rounded-full bg-[var(--woss-blue)]/20 px-4 py-2 text-sm text-[var(--woss-blue)]">
          💬 Testimonios
        </Badge>
        <h2 className="font-heading text-3xl font-semibold text-[var(--woss-white)] sm:text-4xl">
          Miles de personas ya confían en WOSS ID
        </h2>
        <p className="mx-auto max-w-2xl text-base text-[var(--woss-slate)]">
          Historias reales de usuarios que hoy comparten su identidad con tranquilidad y sin fricción.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((quote) => (
          <Card key={quote} className="border-white/10 bg-[var(--woss-graphite)]/80 p-6 backdrop-blur">
            <CardContent className="flex h-full flex-col justify-between gap-6 p-0">
              <Sparkles className="h-6 w-6 text-[var(--woss-uv)]" aria-hidden="true" />
              <p className="text-base text-[var(--woss-white)]">{quote}</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-[var(--woss-slate)]">
                <span>Sello verificado</span>
                <ShieldCheck className="h-4 w-4 text-[var(--woss-uv)]" aria-hidden="true" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
function GuaranteeSection() {
  return (
    <motion.section
      id="garantia"
      {...fadeInUp}
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20 lg:py-24"
    >
      <Card className="border-[var(--woss-uv)]/20 bg-[var(--woss-uv)]/10 p-10 backdrop-blur">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Badge className="rounded-full bg-[var(--woss-uv)] px-3 py-1 text-xs font-semibold text-[var(--woss-white)]">
              🛡️ Garantía 7 Días
            </Badge>
            <h2 className="font-heading text-3xl font-semibold text-[var(--woss-white)] sm:text-4xl">
              Tu confianza también está protegida.
            </h2>
            <p className="max-w-2xl text-base text-[var(--woss-slate)]">
              Prueba ONE sin riesgo: si no te ahorra tiempo y estrés, te devolvemos tu dinero.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-[var(--woss-blue)]/40 bg-[var(--woss-blue)]/10 p-6 text-sm text-[var(--woss-slate)]">
            <div className="flex items-center gap-3 text-[var(--woss-white)]">
              <ShieldCheck className="h-5 w-5 text-[var(--woss-uv)]" aria-hidden="true" />
              <span>Sin compromiso</span>
            </div>
            <p>💬 Sin compromiso. Sin riesgo. 100% confianza.</p>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
function FAQSection() {
  return (
    <motion.section
      id="faq"
      {...fadeInUp}
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 sm:py-20 lg:py-24"
    >
      <div className="mb-10 flex flex-col gap-4 text-center">
        <Badge className="mx-auto w-fit rounded-full bg-[var(--woss-blue)]/20 px-4 py-2 text-sm text-[var(--woss-blue)]">
          ❓ Preguntas frecuentes
        </Badge>
        <h2 className="font-heading text-3xl font-semibold text-[var(--woss-white)] sm:text-4xl">
          Resuelve tus dudas en segundos
        </h2>
        <p className="mx-auto max-w-2xl text-base text-[var(--woss-slate)]">
          Transparencia total sobre cómo funciona tu identidad digital WOSS ID.
        </p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question} className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--woss-graphite)]/80 backdrop-blur">
            <AccordionTrigger className="px-6 py-4 text-left text-base font-medium text-[var(--woss-white)] hover:text-[var(--woss-blue)]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-sm text-[var(--woss-slate)]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}
function FinalCTA() {
  return (
    <motion.section
      id="cta-final"
      {...fadeInUp}
      className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 sm:pb-28"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[var(--woss-graphite)]/90 p-10 text-center shadow-xl backdrop-blur">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl font-semibold text-[var(--woss-white)] sm:text-4xl">
            Confianza instantánea. Documentos en orden.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[var(--woss-slate)]">
            Crea tu identidad digital y gestiona todo desde la app WOSS.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-2xl bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 px-6 py-3 text-base font-semibold text-[var(--woss-navy)] shadow-lg transition hover:from-gray-200 hover:via-gray-400 hover:to-gray-200 focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
            >
              <Link href="/onboarding">🔹 Crear mi WOSS ID</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-[var(--woss-white)] transition hover:border-[var(--woss-uv)] hover:text-[var(--woss-white)] focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
            >
              <Link href="#how-it-works">Ver cómo funciona</Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-dashed border-[var(--woss-blue)]/40 bg-[var(--woss-blue)]/10 p-5 text-sm text-[var(--woss-slate)]">
            <p className="text-base font-semibold text-[var(--woss-white)]">🔥 Oferta de lanzamiento</p>
            <p className="mt-2">
              Activa tu WOSS ID hoy y obtén 7 dias PRO gratuito. Tu identidad digital empieza aquí.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--woss-navy)]/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4" aria-label="WOSS ID">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden sm:h-32 sm:w-32">
              <Image
                src={footerLogoSrc}
                alt="Emblema WOSS ID"
                fill
                sizes="128px"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-heading text-lg font-semibold text-[var(--woss-white)]">
              WOSS ID — Identidad verificada y documentos seguros.
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm text-[var(--woss-slate)] sm:items-end sm:text-right">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <Link
              href="https://www.wossid.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--woss-white)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
            >
              www.wossid.com
            </Link>
            <span className="hidden text-[var(--woss-slate)] sm:inline">|</span>
            <Link
              href="/onboarding"
              className="font-semibold text-[var(--woss-white)] transition hover:text-[var(--woss-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--woss-uv)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--woss-navy)]"
            >
              Crear mi WOSS ID
            </Link>
          </div>
          <p className="text-xs text-[var(--woss-slate)]">
            © {new Date().getFullYear()} WOSS ID. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

