import Link from "next/link";

export default async function Home() {
  return <div className="z-10 w-full items-start justify-between text-sm lg:flex">
    <div className="min-w-fit">
      <img src="/lamp.jpeg" alt="lamp" />
    </div>
    <div className="mt-4 ml-4">
      <p className="font-bold mb-4">Wir haben ein Plattenlabel gegründet. Es trägt den Namen Hobbymusik. Das hat Gründe.</p>
      <p className="mb-4">
        Es ist zum Beispiel ein Verweis auf systemische und ökonomische Rahmenbedingungen der Kunst- und Musikproduktion 
        oder die Tatsache, dass unbezahlte Arbeit oft nur gering geschätzt wird. Wir von Hobbymusik reagieren darauf unter 
        anderem damit, dass wir die Entkopplung von professioneller Kunst und Professionalität ausrufen. Wir fragen uns 
        auch, wer es sich leisten kann, als professionell zu gelten. Außerdem interessieren wir uns für anti-patriarchale Themen.
      </p>
      <p className="mb-4">
        Mit Antihumor oder Humor, Drastik und Mäßigung, Freude, Depression, Gleichmut und Gelassenheit bespielen 
        wir so gemeinsam mit unseren Musiker*innen die physischen und digitalen Bühnen.
      </p>
      <p className="mb-4">
        <Link className="font-bold" href="/guidelines">Zu den Guidelines</Link>
      </p>
    </div>
  </div>
}
