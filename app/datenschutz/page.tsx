import Link from "next/link";

export default function Datenschutz() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-300 py-12 px-6 sm:px-12">
            <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-700">

                {/* Header */}
                <div className="border-b border-white/10 pb-6 mb-8">
                    <Link href="/" className="text-amber-500 hover:text-amber-400 transition-colors mb-4 inline-block">
                        ← Zurück
                    </Link>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 pt-10 sm:pt-40">Datenschutzerklärung</h1>
                </div>

                {/* Content */}
                <div className="space-y-8 text-sm sm:text-base leading-relaxed">

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>

                        <h3 className="text-lg font-medium text-white mb-2">Allgemeine Hinweise</h3>
                        <p className="mb-4">
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Datenerfassung auf unserer Website</h3>
                        <p className="font-semibold text-white mb-1">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
                        <p className="mb-4">
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>

                        <p className="font-semibold text-white mb-1">Wie erfassen wir Ihre Daten?</p>
                        <p className="mb-4">
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                        </p>
                        <p className="mb-4">
                            Wenn Sie etwas in unserem Shop kaufen, erheben wir im Rahmen des Kaufs personenbezogene Daten, die Sie uns übermitteln, wie Name, Anschrift und E-Mail-Adresse. Wenn Sie unseren Shop besuchen, erhalten wir außerdem die IP-Adresse Ihres Computers sowie Informationen über Ihren Browser und Ihr Betriebssystem.
                        </p>
                        <p className="mb-4">
                            Wenn Sie uns beim Kaufvorgang, der Überprüfung Ihrer Kreditkarte, einer Bestellung, Absprache über Lieferung oder Rücksendung personenbezogene Daten übermitteln, gehen wir davon aus, dass Sie damit einverstanden sind, dass wir diese Daten speichern und für diesen bestimmten Zweck verwenden.
                        </p>
                        <p className="mb-4">
                            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
                        </p>

                        <p className="font-semibold text-white mb-1">Wofür nutzen wir Ihre Daten?</p>
                        <p className="mb-4">
                            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                        </p>

                        <p className="font-semibold text-white mb-1">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
                        <p className="mb-4">
                            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>

                        <h3 className="text-lg font-medium text-white mb-2">Datenschutz</h3>
                        <p className="mb-4">
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p className="mb-4">
                            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                        </p>
                        <p className="mb-4">
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Hinweis zur verantwortlichen Stelle</h3>
                        <p className="mb-4">
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <p className="mb-4 pl-4 border-l-2 border-amber-500/50">
                            Stadtlicht Lemgo<br />
                            Karsten Arning<br />
                            Marktplatz 5<br />
                            32657 Lemgo<br /><br />
                            Telefon: 0526112304<br />
                            E-Mail: post@stadtlicht-lemgo.de
                        </p>
                        <p className="mb-4">
                            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                        <p className="mb-4">
                            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                        <p className="mb-4">
                            Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können folgendem Link entnommen werden: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank text-amber-500 hover:text-amber-400">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Recht auf Datenübertragbarkeit</h3>
                        <p className="mb-4">
                            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                        <p className="mb-4">
                            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                        </p>
                        <p className="mb-4">
                            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Auskunft, Sperrung, Löschung</h3>
                        <p className="mb-4">
                            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Widerspruch gegen Werbe-Mails</h3>
                        <p className="mb-4">
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">3. Datenerfassung auf unserer Website</h2>

                        <h3 className="text-lg font-medium text-white mb-2">Kontaktformular</h3>
                        <p className="mb-4">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                        <p className="mb-4">
                            Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                        </p>
                        <p className="mb-4">
                            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">4. Verwendung von Cookies</h2>

                        <h3 className="text-lg font-medium text-white mb-2">Was sind Cookies?</h3>
                        <p className="mb-4">
                            Bei Cookies handelt es sich um kleine Textdateien, die mittels Ihres Webbrowsers oder anderen Programmen auf Ihr Endgerät (z.B. PC, Smartphone) übermittelt werden. Diese werden lokal auf Ihrem Endgerät abgelegt und für einen späteren Abruf bereitgehalten.
                        </p>
                        <p className="mb-4">
                            Wenn Sie das Einwilligungs-Banner auf unserer Eingangs-Website schließen, erklären Sie sich damit jederzeit widerruflich mit dem dort geschilderten Einsatz von Cookies einverstanden (Art.6 Abs.1 a DSGVO). Ihre Einwilligung können Sie wie unter &quot;Deaktivierung von Cookies/Widerruf Ihrer Einwilligung&quot; beschrieben jederzeit widerrufen.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Einsatz von Cookies</h3>
                        <p className="mb-4">
                            Auf dieser Website werden Cookies eingesetzt und ausgelesen, um die erforderlichen technischen Funktionen zu ermöglichen und sicherzustellen (z.B. Warenkorb) (Art.6 Abs.1 b, f DSGVO), um unseren Internetauftritt bedarfsgerecht zu gestalten (Art.6 Abs.1 a DSGVO),
                        </p>
                        <p className="mb-4">
                            für Reichweitenmessungen (Art.6 Abs.1 f DSGVO), um die Besuche auf unserer Website zu Marketing- und Optimierungszwecken pseudonymisiert auszuwerten (Webtracking) (Art.6 Abs.1 a DSGVO), um Besuchern unserer Website auch auf den Websites in verbundenen Werbenetzwerken möglichst interessante Angebote anzeigen zu können (Retargeting) (Art.6 Abs.1 a DSGVO) und um die Ablehnung von Cookies und /oder den Widerruf Ihrer Einwilligung in den Einsatz von Cookies zu beachten (&quot;Do not track or retarget&quot;-Cookies).
                        </p>
                        <p className="mb-4">
                            Unter bestimmten Voraussetzungen werden dabei auch Cookies von Drittanbietern gesetzt (z.B. Retargeting, Einbettung von YouTube-Videos), um Funktionen und Techniken von Drittanbietern bzw. eine Berichterstattung zu ermöglichen (Art.6 Abs.1 a, f DSGVO).
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Deaktivierung von Cookies/Widerruf Ihrer Einwilligung</h3>
                        <p className="mb-4">
                            Wenn Sie Ihre Einwilligung widerrufen und das pseudonymisierte Webtracking und Retargeting ausschalten wollen, klicken Sie bitte hier auf Do not track or retarget. Dadurch wird auf Ihrem Endgerät ein Cookie gespeichert, das sowohl die pseudonymisierte Datenerhebung auf unserer Website als auch die Übermittlung der pseudonymen Cookie-ID an unsere Werbenetzwerke für das Retargeting stoppt.
                        </p>
                        <p className="mb-4">
                            Bitte beachten Sie, dass beim Löschen aller Cookies auf Ihrem Endgerät auch die &quot;Do not track or retarget&quot;-Cookies zur Beachtung des Widerrufs gelöscht werden.
                        </p>
                        <p className="mb-4">
                            Sie können Ihren Webbrowser so einstellen, dass er Sie beim Setzen von Cookies benachrichtigt oder alle oder zumindest bestimmte Cookies (z.B. nur Drittanbieter-Cookies) ablehnt, um Webtracking und Retargeting grundsätzlich zu verbieten. Wenn Sie Cookies mithilfe Ihres Browsers deaktivieren, dann werden aber verschiedene Funktionen auf unserer Website für Sie nicht mehr nutzbar sein.
                        </p>
                        <p className="mb-4">
                            Über die folgenden Links können Sie sich über diese Möglichkeit für die am meisten verwendeten Browser informieren:
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                            <li>Explorer: <a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" className="text-amber-500 hover:text-amber-400">Microsoft Support</a></li>
                            <li>Firefox: <a href="http://support.mozilla.org/de/kb/cookies-informationen-websites-auf-ihrem-computer" target="_blank" className="text-amber-500 hover:text-amber-400">Mozilla Support</a></li>
                            <li>Google Chrome: <a href="http://support.google.com/chrome/bin/answer.py?hl=de&answer=95647" target="_blank" className="text-amber-500 hover:text-amber-400">Google Chrome Support</a></li>
                            <li>Safari: <a href="https://support.apple.com/kb/PH21411?locale=de_DE" target="_blank" className="text-amber-500 hover:text-amber-400">Apple Support</a></li>
                            <li>Opera: <a href="http://help.opera.com/Linux/12.10/de/cookies.html" target="_blank" className="text-amber-500 hover:text-amber-400">Opera Support</a></li>
                        </ul>
                        <p className="mb-4">
                            Wenn Sie keine abweichenden Einstellungen vorgenommen haben oder vornehmen, verbleiben Cookies, die die erforderlichen technischen Funktionen ermöglichen und sicherstellen sollen, bis zum Schließen des Browsers auf Ihrem Endgerät, andere Cookies können maximal 14 Monate auf Ihrem Endgerät verbleiben.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">5. Plugins und Tools</h2>

                        <h3 className="text-lg font-medium text-white mb-2">Google Analytics</h3>
                        <p className="mb-4">
                            Wir setzen auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (&quot;Google&quot;) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                        </p>
                        <p className="mb-4">
                            Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (<a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" target="_blank" className="text-amber-500 hover:text-amber-400">Link</a>).
                        </p>
                        <p className="mb-4">
                            In unserem Auftrag wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen für uns zu erbringen.
                        </p>
                        <p className="mb-4">
                            Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden. Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
                        </p>
                        <p className="mb-4">
                            Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren: <a href="http://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" className="text-amber-500 hover:text-amber-400">http://tools.google.com/dlpage/gaoptout?hl=de</a>.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">Google Maps</h3>
                        <p className="mb-4">
                            Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://www.google.de/intl/de/policies/privacy/" target="_blank" className="text-amber-500 hover:text-amber-400">https://www.google.de/intl/de/policies/privacy/</a>.
                        </p>

                        <h3 className="text-lg font-medium text-white mb-2">YouTube</h3>
                        <p className="mb-4">
                            Unsere Website nutzt Plugins der Website YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her. Sobald Sie ein YouTube-Video auf unserer Website starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
                        </p>
                        <p className="mb-4">
                            Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem Endgerät speichern. Mit Hilfe dieser Cookies kann YouTube Informationen über Besucher unserer Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Gegebenenfalls können nach dem Start eines YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss haben. Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter: <a href="https://policies.google.com/privacy?hl=de" target="_blank" className="text-amber-500 hover:text-amber-400">https://policies.google.com/privacy?hl=de</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4">6. Onlinepräsenzen in sozialen Medien</h2>
                        <p className="mb-4">
                            Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können.
                        </p>
                        <p className="mb-4">
                            Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind, weisen wir darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.
                        </p>
                        <p className="mb-4">
                            Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. aus dem Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Plattformen zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).
                        </p>
                        <p className="mb-4">
                            Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern um eine Einwilligung in die Datenverarbeitung gebeten werden (d.h. ihr Einverständnis z.B. über das Anhaken eines Kontrollkästchens oder Bestätigung einer Schaltfläche erklären) ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.
                        </p>
                        <p className="mb-4">
                            Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.
                        </p>
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                            <li>Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) - Datenschutzerklärung: <a href="https://www.facebook.com/about/privacy/" target="_blank" className="text-amber-500 hover:text-amber-400">https://www.facebook.com/about/privacy/</a></li>
                            <li>Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) – Datenschutzerklärung/ Opt-Out: <a href="http://instagram.com/about/legal/privacy/" target="_blank" className="text-amber-500 hover:text-amber-400">http://instagram.com/about/legal/privacy/</a>.</li>
                        </ul>
                    </section>

                </div>
            </div>
        </main>
    );
}
