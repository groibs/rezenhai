import Link from 'next/link';
import { AppShell, Card, Eyebrow, LinkButton, SecondaryLink, SectionTitle, TopBar } from '@/components/ui';
import { demoEvent, exampleCards } from '@/lib/demo-data';

const steps = ['Escolha o tipo de rolê', 'Monte o convite', 'Mande o link', 'Acompanhe tudo'];
const features = ['Convites bonitos', 'Confirmação fácil', 'Pix sem climão', 'Quem leva o quê', 'Fotos da resenha', 'Adicionar ao convite'];

export default function Home() {
  return (
    <AppShell>
      <TopBar />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:pt-16">
        <div className="flex flex-col justify-center">
          <Eyebrow>Convite digital para rolê de verdade</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.92] tracking-tight text-laje-950 md:text-8xl">Chama, envia, acontece.</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-prata-700">Crie um convite, mande o link e veja quem vai.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/criar/tipo" className="px-7 py-4 text-base">Criar meu convite</LinkButton>
            <SecondaryLink href="/e/churras-dos-amigos" className="px-7 py-4 text-base">Ver convite exemplo</SecondaryLink>
          </div>
          <p className="mt-4 text-sm font-bold text-prata-700">Sem app obrigatório para convidados.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Link href="/churrascos" className="rounded-full border border-prata-200 bg-papel px-4 py-2 text-sm font-bold text-laje-700 shadow-soft">🥩 Churrasco</Link>
            <Link href="/aniversarios" className="rounded-full border border-prata-200 bg-papel px-4 py-2 text-sm font-bold text-laje-700 shadow-soft">🎂 Aniversário</Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -right-16 -top-12 h-52 w-52 rounded-full bg-lima-500 opacity-60 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-60 w-60 rounded-full bg-brasa-300 opacity-50 blur-3xl" />
          <Card className="holo-border relative rounded-3xl p-4 md:p-6">
            <div className="rounded-[30px] bg-holo p-4 shadow-cover">
              <div className="rounded-[24px] bg-laje-950 p-5 text-creme-50">
                <Eyebrow className="text-creme-50/70">Mockup de convite</Eyebrow>
                <h2 className="mt-3 font-display text-5xl leading-none">{demoEvent.title}</h2>
                <p className="mt-4 text-creme-50/80">{demoEvent.date} · {demoEvent.time} · {demoEvent.local}</p>
                <h3 className="mt-6 text-2xl font-black">Você vai colar?</h3>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {['Eu colo', 'Talvez', 'Não colo'].map((status, index) => (
                    <span key={status} className={`rounded-2xl p-3 text-center text-sm font-extrabold ${index === 0 ? 'bg-lima-500 text-laje-950' : 'bg-creme-50/10 text-creme-50'}`}>{status}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-creme-25 p-4">
                <Eyebrow>Preview de WhatsApp</Eyebrow>
                <p className="mt-2 font-bold">Bora? Link do churras: /e/churras-dos-amigos</p>
              </div>
              <div className="rounded-2xl bg-lima-500 p-4">
                <Eyebrow>Preview da página pública</Eyebrow>
                <p className="mt-2 font-mono text-3xl font-black">14</p>
                <p className="font-bold">confirmados</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <section id="como-funciona" className="border-y border-prata-200 bg-papel py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Como funciona" title="Do convite ao rolê sem planilha">A galera abre o link, responde e você acompanha tudo.</SectionTitle>
          <div className="mt-12 grid gap-4 md:grid-cols-4">{steps.map((step, index) => <Card key={step}><span className="flex h-11 w-11 items-center justify-center rounded-full bg-brasa-500 font-mono text-sm font-black text-creme-50">{index + 1}</span><h3 className="mt-5 text-2xl font-extrabold tracking-tight">{step}</h3><p className="mt-3 leading-7 text-prata-700">Um fluxo simples, navegável e feito para mandar no grupo.</p></Card>)}</div>
        </div>
      </section>
      <section id="recursos" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle eyebrow="Recursos" title="Tudo que ajuda a organizar sem climão" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">{features.map((feature) => <Card key={feature}><h3 className="text-2xl font-black">{feature}</h3><p className="mt-3 text-prata-700">Ative no modo demo e veja a experiência completa do convite.</p></Card>)}</div>
      </section>
      <section id="exemplos" className="bg-laje-950 py-20 text-creme-50">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionTitle eyebrow="Exemplos" title="Convites com cara de rolê brasileiro">Escolha uma vibe e continue para as capas.</SectionTitle>
          <div className="mt-12 grid gap-4 md:grid-cols-3">{exampleCards.map((card) => <div key={card.title} className="rounded-2xl border border-creme-50/10 bg-creme-50/10 p-5 shadow-card"><p className="font-bold text-lima-500">{card.tag}</p><h3 className="mt-4 text-3xl font-black">{card.title}</h3><LinkButton href="/criar/capa" className="mt-5">Usar modelo</LinkButton></div>)}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="rounded-3xl bg-holo p-8 md:p-12">
          <Eyebrow>WhatsApp vs Rezenhaí</Eyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-none">Pode mandar no grupo. Só não precisa organizar tudo por lá.</h2>
          <p className="mt-5 max-w-2xl text-lg text-laje-700">O link concentra presença, Pix manual, checklist e fotos. O grupo fica livre para a zoeira.</p>
        </div>
      </section>
      <section className="bg-papel px-5 py-20 text-center">
        <h2 className="font-display text-5xl leading-none">Pronto pra chamar a galera?</h2>
        <LinkButton href="/criar/tipo" className="mt-8 px-8 py-4 text-base">Criar meu convite</LinkButton>
      </section>
    </AppShell>
  );
}
