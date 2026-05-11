import Image from 'next/image';
import { Button, Card, Eyebrow } from '@/components/ui';
import { categories, sampleEvent } from '@/lib/event-data';

const fields = [
  ['Título do convite', sampleEvent.title],
  ['Data', sampleEvent.dateLong],
  ['Horário', sampleEvent.time],
  ['Endereço', sampleEvent.address],
];

export default function CreateInvitePage() {
  return (
    <main className="min-h-screen bg-creme-50 px-5 py-5 md:px-8">
      <header className="mx-auto flex max-w-7xl items-center justify-between">
        <Image src="/brand/rezenhai-logo.svg" alt="Rezenhaí" width={140} height={38} />
        <Button>Publicar convite</Button>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 py-10 lg:grid-cols-[1fr_420px]">
        <div>
          <Eyebrow>Editor web</Eyebrow>
          <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">Monta o convite</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-prata-700">
            Começa pelo essencial. Depois adiciona Pix, checklist e fotos se fizer sentido para esse rolê.
          </p>

          <Card className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-extrabold text-laje-950">Tipo de rolê</label>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button key={category} className={`rounded-full border px-4 py-2 text-sm font-bold ${index === 0 ? 'border-laje-950 bg-laje-950 text-creme-50' : 'border-prata-200 bg-creme-25 text-laje-700'}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {fields.map(([label, value]) => (
                <label key={label} className="block">
                  <span className="text-sm font-extrabold text-laje-950">{label}</span>
                  <input className="mt-2 w-full rounded-xl border-prata-200 bg-creme-25 px-4 py-3 font-bold text-laje-950 shadow-sm focus:border-laje-950 focus:ring-laje-950" defaultValue={value} />
                </label>
              ))}
            </div>

            <label className="block">
              <span className="text-sm font-extrabold text-laje-950">Descrição</span>
              <textarea className="mt-2 min-h-28 w-full rounded-xl border-prata-200 bg-creme-25 px-4 py-3 font-bold text-laje-950 shadow-sm focus:border-laje-950 focus:ring-laje-950" defaultValue={sampleEvent.description} />
            </label>
          </Card>

          <Card className="mt-5">
            <Eyebrow>Adicionar ao convite</Eyebrow>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {['Pix da resenha', 'Quem leva o quê', 'Fotos da resenha'].map((item) => (
                <label key={item} className="flex cursor-pointer items-center gap-3 rounded-2xl bg-creme-25 p-4 font-extrabold">
                  <input type="checkbox" defaultChecked className="rounded border-prata-300 text-brasa-500 focus:ring-brasa-500" />
                  {item}
                </label>
              ))}
            </div>
          </Card>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <Card className="rounded-3xl p-4">
            <div className="rounded-[28px] bg-holo p-5 shadow-cover">
              <div className="rounded-[22px] bg-papel p-5">
                <Eyebrow>{sampleEvent.dateShort} · {sampleEvent.time}</Eyebrow>
                <h2 className="mt-3 font-display text-5xl leading-none">{sampleEvent.title}</h2>
                <p className="mt-4 text-prata-700">{sampleEvent.place}</p>
                <Button className="mt-8 w-full">Confirmar presença</Button>
              </div>
            </div>
          </Card>
        </aside>
      </section>
    </main>
  );
}
