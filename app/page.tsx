import Image from 'next/image';
import { Button, Card, Eyebrow, SectionTitle } from '@/components/ui';
import { categories, features, sampleEvent } from '@/lib/event-data';

const navItems = ['Como funciona', 'Exemplos', 'Recursos'];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-creme-50">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <Image src="/brand/rezenhai-logo.svg" alt="Rezenhaí" width={146} height={40} priority />
        <nav className="hidden items-center gap-7 text-sm font-bold text-prata-700 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-laje-950">
              {item}
            </a>
          ))}
        </nav>
        <Button>Criar meu convite</Button>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-8 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:pt-16">
        <div className="flex flex-col justify-center">
          <Eyebrow>Convite digital para rolê de verdade</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.92] tracking-tight text-laje-950 md:text-8xl">
            Chama, envia, acontece.
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-prata-700">
            Crie um convite, mande o link e veja quem vai. O Rezenhaí organiza presença, Pix, checklist e fotos sem transformar a resenha em planilha.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="px-7 py-4 text-base">Criar meu convite</Button>
            <button className="rounded-full border border-prata-300 bg-papel px-7 py-4 text-base font-extrabold text-laje-950 shadow-card transition hover:border-laje-950">
              Ver convite exemplo
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-prata-200 bg-papel px-4 py-2 text-sm font-bold text-laje-700 shadow-soft">
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-20 -top-16 h-52 w-52 rounded-full bg-lima-500 blur-3xl opacity-60" />
          <div className="absolute -bottom-12 -left-16 h-60 w-60 rounded-full bg-brasa-300 blur-3xl opacity-50" />
          <Card className="holo-border relative rounded-3xl p-4 md:p-6">
            <div className="rounded-[30px] bg-holo p-4 shadow-cover">
              <div className="rounded-[24px] bg-laje-950 p-5 text-creme-50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Eyebrow className="text-creme-50/70">{sampleEvent.dateShort} · {sampleEvent.time}</Eyebrow>
                    <h2 className="mt-3 font-display text-5xl leading-none">{sampleEvent.title}</h2>
                  </div>
                  <span className="rounded-full bg-lima-500 px-3 py-1 font-mono text-xs font-bold text-laje-950">Publicado</span>
                </div>
                <p className="mt-5 text-creme-50/80">{sampleEvent.description}</p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {['Eu colo 🔥', 'Talvez 👀', 'Não colo 🫠'].map((status, index) => (
                    <button key={status} className={`rounded-2xl p-3 text-sm font-extrabold ${index === 0 ? 'bg-lima-500 text-laje-950' : 'bg-creme-50/10 text-creme-50'}`}>
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {sampleEvent.stats.map((stat) => (
                <div key={stat.label} className={`rounded-2xl p-4 ${stat.tone === 'lima' ? 'bg-lima-500' : 'bg-creme-25'}`}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-prata-700">{stat.label}</p>
                  <p className="mt-1 font-mono text-3xl font-black tabular-nums">{stat.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="como-funciona" className="border-y border-prata-200 bg-papel py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Como funciona" title="Três passos e o rolê está na rua">
            Sem login complicado para convidado. O link resolve a bagunça do grupo.
          </SectionTitle>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ['1', 'Monta o convite', 'Escolhe capa, data, lugar e adiciona Pix, checklist e fotos se precisar.'],
              ['2', 'Manda o link', 'Compartilha onde a galera já está: WhatsApp, DM ou bio.'],
              ['3', 'Vê quem vai', 'Acompanha presença, contribuição e itens sem caçar mensagem perdida.'],
            ].map(([step, title, copy]) => (
              <Card key={step}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brasa-500 font-mono text-sm font-black text-creme-50">{step}</span>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-prata-700">{copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="exemplos" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle eyebrow="Exemplos" title="Tem cara de convite de amigo">
          Templates para churrasco, aniversário, jantar, jogos e karaokê — cada capa segura a expressão, a interface segura a organização.
        </SectionTitle>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {['Churras no quintal', 'Aniversário da Lu', 'Karaokê sem dó'].map((title, index) => (
            <div key={title} className={`rounded-3xl p-5 shadow-cover ${index === 1 ? 'bg-brasa-500 text-creme-50' : index === 2 ? 'bg-laje-950 text-creme-50' : 'bg-holo text-laje-950'}`}>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] opacity-75">{index === 0 ? 'Sáb, 27/07 · 19h' : index === 1 ? 'Sex, 02/08 · 21h' : 'Dom, 11/08 · 18h'}</p>
              <h3 className="mt-16 font-display text-5xl leading-none">{title}</h3>
              <p className="mt-4 max-w-xs font-bold opacity-80">Convite pronto pra circular com presença, checklist e fotos.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="recursos" className="bg-laje-950 py-20 text-creme-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <Eyebrow className="text-creme-50/60">Recursos do MVP</Eyebrow>
            <h2 className="mt-3 font-display text-5xl leading-none md:text-7xl">Organiza sem esfriar a resenha</h2>
            <p className="mt-5 text-lg leading-8 text-creme-50/70">O Rezenhaí não tenta virar rede social. Ele deixa o convite bonito, claro e compartilhável.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-creme-50/10 bg-creme-50/5 p-5">
                <span className="mb-5 block h-2 w-12 rounded-full bg-brasa-500" />
                <p className="text-lg font-extrabold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
