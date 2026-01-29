import Link from "next/link";

export default function Impressum() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-300 py-12 px-6 sm:px-12">
            <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-700">

                {/* Header */}
                <div className="border-b border-white/10 pb-6 mb-8">
                    <Link href="/" className="text-amber-500 hover:text-amber-400 transition-colors mb-4 inline-block">
                        ← Zurück
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 pt-10 sm:pt-40">Impressum</h1>
                </div>

                {/* Content */}
                <div className="space-y-6 text-sm sm:text-base leading-relaxed">

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Karsten Arning<br />
                            Stadtlicht Lemgo<br />
                            Marktplatz 5<br />
                            32657 Lemgo
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Kontakt</h2>
                        <p>
                            Telefon: 0 52 61 - 123 04<br />
                            E-Mail: post[at]stadtlicht-lemgo.de
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Steuer-ID</h2>
                        <p>Steuernummer: 329/5001/2249</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p>
                            Karsten Arning<br />
                            Marktplatz 5<br />
                            32657 Lemgo
                        </p>
                    </section>

                    <div className="h-px bg-white/10 my-8" />

                    <section>
                        <h3 className="text-lg font-bold text-white mb-2">Haftung für Inhalte</h3>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-white mb-2">Haftung für Links</h3>
                        <p>
                            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-white mb-2">Urheberrecht</h3>
                        <p>
                            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                        </p>
                    </section>

                    <p className="text-xs text-neutral-500 pt-8">
                        Quellen: Disclaimer eRecht24
                    </p>
                </div>
            </div>
        </main>
    );
}
