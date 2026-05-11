import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'rounded-full bg-brasa-500 px-5 py-3 text-sm font-extrabold text-creme-50 shadow-card transition hover:bg-brasa-600 focus:outline-none focus:ring-4 focus:ring-brasa-300/40',
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
