import Link from "next/link";
import Image from "next/image";
import StickyFooter from "./components/StickyFooter";
import Typewriter from "./components/Typewriter";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start bg-neutral-950 text-white pb-32 sm:pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0">
        <Image
          src="/stadtlicht-hero.jpg"
          alt="Stadtlicht Lemgo - Currywerk"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-4 pt-30">

        {/* Header / Farewell */}
        <h1 className="mb-2 text-5xl font-bold tracking-wide sm:text-7xl text-white drop-shadow-xl font-hand rotate-[-2deg]">
          Danke für eine tolle Zeit!
        </h1>

        <p className="mb-8 text-4xl sm:text-6xl font-normal tracking-tight text-white uppercase drop-shadow-md font-block">
          #StadtlichtLemgo
        </p>

        <div className="h-1 w-24 bg-amber-500 rounded-full mb-8 shadow-[0_0_15px_rgba(245,158,11,0.8)]" />

        <p className="mb-10 text-lg leading-relaxed text-neutral-200 max-w-lg drop-shadow-md">
          Unser Pachtvertrag endet, aber das Licht geht nicht aus.
          Wir leuchten weiter – in unserem neuen Zuhause.
        </p>

        {/* Massive CTA */}
        <a
          href="https://luisa-restaurant.de"
          className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-amber-600 px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all duration-300 hover:bg-amber-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] active:scale-95"
        >
          <span>Besucht uns im Luisa</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* New Farewell Section */}
      <div className="relative z-10 w-full bg-white text-neutral-900 py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <div className="font-hand text-4xl sm:text-5xl text-amber-600/60 -rotate-2 mb-2">
                <Typewriter text="Time to say goodbye" speed={0.02} delay={0.2} cursor />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-neutral-900">
                <Typewriter text="Das Stadtlicht verlässt den " speed={0.02} delay={0.6} cursor />
                <span className="text-amber-600 border-b-4 border-amber-600/20">Marktplatz</span>
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-neutral-600">
              <p className="font-semibold text-neutral-800">
                <Typewriter text="Liebe Stadtlicht-Freunde!" speed={0.01} delay={1.2} />
              </p>
              <Typewriter
                mode="word"
                speed={0.01}
                delay={1.5}
                text="Der 8. Dezember 2024 war unser letzter Tag in den Räumen der „Alten Ratswaage“! Wie schon berichtet wurde unser Pachtvertrag nicht verlängert. An Kläschen haben wir mit euch allen zusammen unseren Abschied vom Marktplatz gefeiert! 😥"
              />

              <div className="font-medium text-neutral-900 bg-amber-50 p-4 rounded-xl border border-amber-100">
                <Typewriter
                  mode="word"
                  speed={0.01}
                  delay={2.5}
                  text="Aber wie schon angekündigt, geht unsere kleine Lampe ja nur kurz aus um dann an anderer Stelle weiter zu leuchten! Nach einer Umbauphase sehen wir uns dann Ende 2026 / Anfang 2027 in der Breiten Straße 44-46 wieder! Auf dieses neue Kapitel freuen wir uns schon sehr!"
                />
              </div>

              <Typewriter
                mode="word"
                speed={0.01}
                delay={4.0}
                text="Und ganz weg sind wir bis dahin ja nicht, denn in der Echternstraße 92 findet ihr uns alle seit November 2024 im „Luisa“, der kleinen Schwester vom Stadtlicht. 🙂 Viele von euch haben unser neues Pasta- & Weinlokal schon kennengelernt und wir sind ganz überwältigt von eurem positiven Feedback."
              />

              <p className="font-semibold">
                <Typewriter
                  mode="word"
                  speed={0.01}
                  delay={5.5}
                  text="Wir verabschieden uns also mit einem lachenden und einem weinenden Auge von unserem Stadtlicht am Markplatz."
                />
              </p>

              <div className="text-xl font-hand text-amber-600 pt-4 transform rotate-1">
                <Typewriter text="Schön war es dort, aber es geht ja weiter! 🙂" speed={0.02} delay={6.5} />
                <br />
                <span className="text-base text-neutral-500 font-sans font-normal">— Euer Karsten und sein Team!</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/5] w-full max-w-xl mx-auto lg:max-w-none transform rotate-1 transition-transform hover:rotate-0 duration-500">
            <div className="absolute inset-0 bg-neutral-900 rounded-2xl transform translate-x-3 translate-y-3" />
            <Image
              src="/Bedachungen.jpg"
              alt="Das Stadtlicht Team"
              fill
              className="object-cover rounded-2xl shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-500"
            />
            {/* Corner Tape Effect */}
            <div className="absolute -top-4 -right-4 w-24 h-8 bg-amber-200/40 rotate-[30deg] backdrop-blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-24 h-8 bg-amber-200/40 rotate-[30deg] backdrop-blur-sm" />
          </div>
        </div>
      </div>

      <StickyFooter />
    </main>
  );
}
