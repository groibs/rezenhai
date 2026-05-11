import { Button, Card, Eyebrow } from '@/components/ui';
import { sampleEvent } from '@/lib/event-data';

export default function PublicInvitePage() {
  return (
    <main className="min-h-screen bg-creme-50 px-4 py-6">
      <div className="mx-auto max-w-md">
        <section className="rounded-[34px] bg-holo p-4 shadow-cover">
          <div className="rounded-[26px] bg-laje-950 p-5 text-creme-50">
            <Eyebrow className="text-creme-50/65">{sampleEvent.dateShort} · {sampleEvent.time}</Eyebrow>
            <h1 className="mt-4 font-display text-6xl leading-none">{sampleEvent.title}</h1>
            <p className="mt-5 text-creme-50/78">{sampleEvent.description}</p>
            <div className="mt-6 rounded-2xl bg-creme-50/10 p-4">
              <p className="font-bold">{sampleEvent.place}</p>
              <p className="mt-1 text-sm text-creme-50/65">{sampleEvent.address}</p>
            </div>
          </div>
        </section>

        <Card className="mt-5">
          <h2 className="text-2xl font-black tracking-tight">Você vai colar?</h2>
          <div className="mt-4 grid gap-2">
            <button className="rounded-2xl bg-lima-500 px-4 py-4 text-left text-lg font-black text-laje-950">Eu colo 🔥</button>
            <button className="rounded-2xl bg-prata-200 px-4 py-4 text-left text-lg font-black text-laje-950">Talvez 👀</button>
            <button className="rounded-2xl bg-laje-700 px-4 py-4 text-left text-lg font-black text-creme-50">Não colo 🫠</button>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-extrabold">Seu nome</span>
            <input className="mt-2 w-full rounded-xl border-prata-200 bg-creme-25 px-4 py-3 font-bold" placeholder="Pode ser só o primeiro nome" />
          </label>
          <Button className="mt-4 w-full">Confirmar presença</Button>
        </Card>

        <Card className="mt-5">
          <Eyebrow>{sampleEvent.pix.label}</Eyebrow>
          <div className="mt-2 flex items-end justify-between gap-4">
            <p className="font-mono text-5xl font-black tabular-nums">{sampleEvent.pix.value}</p>
            <button className="rounded-full bg-laje-950 px-4 py-2 text-sm font-extrabold text-creme-50">Copiar chave</button>
          </div>
          <p className="mt-3 rounded-xl bg-creme-25 p-3 font-mono text-sm text-prata-700">{sampleEvent.pix.key}</p>
          <p className="mt-3 text-sm leading-6 text-prata-700">O Pix vai direto para o organizador do evento. O Rezenhaí só ajuda a organizar.</p>
        </Card>

        <Card className="mt-5">
          <h2 className="text-2xl font-black tracking-tight">Quem leva o quê</h2>
          <div className="mt-4 space-y-2">
            {sampleEvent.checklist.map((entry) => (
              <div key={entry.item} className="flex items-center justify-between rounded-2xl bg-creme-25 p-3 font-bold">
                <span>{entry.item}</span>
                <span className="text-sm text-prata-700">{entry.taken ? entry.by : 'Eu levo isso'}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="mt-5">
          <h2 className="text-2xl font-black tracking-tight">Fotos da resenha</h2>
          <p className="mt-3 text-prata-700">Ainda não tem foto por aqui. Suba as primeiras quando a resenha começar.</p>
          <p className="mt-4 text-xs font-bold text-prata-700">As fotos ficam visíveis para participantes do evento.</p>
        </Card>
      </div>
    </main>
  );
}
