import clsx from 'clsx';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full bg-brasa-500 px-5 py-3 text-sm font-extrabold text-creme-50 shadow-card transition hover:bg-brasa-600 focus:outline-none focus:ring-4 focus:ring-brasa-300/40 disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    />
  );
}

export function LinkButton({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      className={clsx(
        'inline-flex items-center justify-center rounded-full bg-brasa-500 px-5 py-3 text-sm font-extrabold text-creme-50 shadow-card transition hover:bg-brasa-600 focus:outline-none focus:ring-4 focus:ring-brasa-300/40',
        className,
      )}
      {...props}
    />
  );
}

export function SecondaryLink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      className={clsx(
        'inline-flex items-center justify-center rounded-full border border-prata-300 bg-papel px-5 py-3 text-sm font-extrabold text-laje-950 shadow-card transition hover:border-laje-950',
        className,
      )}
      {...props}
    />
  );
}

export function SecondaryButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-full border border-prata-300 bg-papel px-5 py-3 text-sm font-extrabold text-laje-950 shadow-card transition hover:border-laje-950',
        className,
      )}
      {...props}
    />
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('rounded-2xl border border-prata-200 bg-papel p-5 shadow-card', className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={clsx('font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-prata-700', className)}>
      {children}
    </p>
  );
}

export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-4xl leading-none tracking-tight text-laje-950 md:text-6xl">{title}</h2>
      {children ? <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-prata-700">{children}</p> : null}
    </div>
  );
}

export function AppShell({ children, tone = 'bg-creme-50' }: { children: ReactNode; tone?: string }) {
  return <main className={clsx('min-h-screen', tone)}>{children}</main>;
}

export function TopBar({ cta = true }: { cta?: boolean }) {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-8">
      <Link href="/" className="text-2xl font-black tracking-tight text-laje-950" aria-label="Rezenhaí">
        Rezenhaí
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-bold text-prata-700 md:flex">
        <Link href="/como-funciona" className="hover:text-laje-950">Como funciona</Link>
        <Link href="/exemplos" className="hover:text-laje-950">Exemplos</Link>
        <Link href="/recursos" className="hover:text-laje-950">Recursos</Link>
        <Link href="/entrar" className="hover:text-laje-950">Entrar</Link>
      </nav>
      {cta ? <LinkButton href="/criar/tipo">Criar meu convite</LinkButton> : null}
    </header>
  );
}

export function Toast({ message }: { message: string }) {
  if (!message) return null;
  return <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-laje-950 px-5 py-3 text-sm font-extrabold text-creme-50 shadow-pop">{message}</div>;
}
