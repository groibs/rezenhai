import Image from 'next/image';
import { Button, Card, Eyebrow } from '@/components/ui';
import { sampleEvent } from '@/lib/event-data';

export default function HostDashboardPage() {
  return (
    <main className="min-h-screen bg-creme-50 px-5 py-5 md:px-8">
      <header className="mx-auto flex max-w-7xl items-center justify-between">
        <Image src="/brand/rezenhai-logo.svg" alt="Rezenhaí" width={140} height={38} />
        <Button>Copiar link</Button>
      </header>

      <section className="mx-auto max-w-7xl py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>{sampleEvent.dateShort} · {sampleEvent.time}</Eyebrow>
            <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">{sampleEvent.title}</h1>
            <p className="mt-3 text-lg text-prata-700">Publicado · {sampleEvent.place}</p>
          </div>
          <div className="flex gap-2">
            {['Checklist', 'Pix', 'Fotos'].map((item) => (
              <button key={item} className="rounded-full border border-prata-200 bg-papel px-4 py-2 text-sm font-extrabold shadow-card">{item}</button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {sampleEvent.stats.map((stat) => (
            <div key={stat.label} className={`rounded-2xl p-5 shadow-card ${stat.tone === 'lima' ? 'bg-lima-500' : 'bg-papel'}`}>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-prata-700">{stat.label}</p>
              <p className="mt-2 font-mono text-4xl font-black tabular-nums">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <h2 className="text-2xl font-black tracking-tight">Convidados</h2>
            <div className="mt-4 divide-y divide-prata-200">
              {sampleEvent.guests.map((guest) => (
                <div key={guest.name} className="flex items-center justify-between py-4">
                  <div>
                    <p className="font-extrabold">{guest.name}</p>
                    <p className="text-sm text-prata-700">{guest.status}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${guest.paid ? 'bg-lima-500 text-laje-950' : 'bg-prata-200 text-laje-700'}`}>
                    {guest.paid ? 'Pix pago' : 'Pix pendente'}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-2xl font-black tracking-tight">Quem leva o quê</h2>
              <div className="mt-4 space-y-2">
                {sampleEvent.checklist.map((entry) => (
                  <div key={entry.item} className="flex items-center justify-between rounded-2xl bg-creme-25 p-3 font-bold">
                    <span>{entry.item}</span>
                    <span className="text-sm text-prata-700">{entry.taken ? entry.by : 'Livre'}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-2xl font-black tracking-tight">Fotos da resenha</h2>
              <p className="mt-3 text-prata-700">Ainda não tem foto por aqui. Quando começar, a galera pode subir as primeiras.</p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
