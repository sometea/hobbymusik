import Link from "next/link";

export default async function Guidelines() {
    return <div className="z-10 w-full items-start justify-between text-sm lg:flex">
    <div className="mt-4 ml-4">
      <p className="font-bold mb-4">Überlegungen zu unserer Arbeit</p>
      <p className="mb-4">
        Bei unseren Veranstaltungen und Veröffentlichungen wollen wir Räume erzeugen, 
        die für möglichst viele Personen unterschiedlicher Positionierungen sicher sind. 
        Wir können nicht wissen, was Menschen erlebt haben, die zu unseren Veranstaltungen 
        kommen oder unsere Veröffentlichungen hören und was ihre Geschichten sind. 
        Und wir wollen alle diversen Erfahrungen von Gewalt, Trauma, Ausgrenzung & Diskriminierung 
        respektieren und ernst nehmen. Wie können wir also einen Raum schaffen, wo unterschiedliche 
        Erfahrungen gleichzeitig da sein dürfen?
      </p>
      <p className="mb-4">
        Nach vielen Überlegungen und Austausch ist die Konsequenz daraus für uns, dass wir möglichst 
        offen für viele unterschiedliche Beiträge sein wollen. Und uns gleichzeitig wichtig ist, 
        sicherzustellen, dass sich niemensch unsicher fühlt. Rassismus, Antisemitismus, Ableismus, Klassismus, 
        Cis-Sexismus und andere Diskriminierungsformen haben bei uns keinen Platz. Weil uns aber klar ist, 
        dass diese Diskriminierungsformen für verschiedenen Menschen Unterschiedliches bedeuten, behalten 
        wir uns vor, unseren eigenen Einschätzungen zu vertrauen und auf dieser Grundlage zu entscheiden, 
        mit welchen Künstler*innen wir zusammen arbeiten. Dabei sind wir mit unseren eigenen Communities 
        in Verbindung und mit solchen, mit denen wir uns solidarisieren. Weiterhin weisen wir darauf hin, 
        dass unsere Kapazitäten begrenzt sind. Wir verdienen mit unseren Aktivitäten kaum oder kein Geld 
        und wir können nicht immer jede Situation einschätzen. Wir versuchen es trotzdem. 
      </p>
      <p className="mb-4">
        <Link className="font-bold" href="/">-&gt; Zurück</Link>
      </p>
    </div>
  </div>
}