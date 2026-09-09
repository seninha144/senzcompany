import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return (
    <p className="eyebrow">
      {number && <span className="section-number">{number}</span>}
      {children}
    </p>
  );
}
export function ActionLink({
  href,
  children,
  solid = false,
  down = false,
}: {
  href: string;
  children: ReactNode;
  solid?: boolean;
  down?: boolean;
}) {
  return (
    <Link className={solid ? 'button' : 'text-link'} href={href}>
      {children}
      {down ? (
        <ArrowDown size={17} aria-hidden="true" />
      ) : (
        <ArrowUpRight size={17} aria-hidden="true" />
      )}
    </Link>
  );
}
export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="page-intro container">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {text && <p className="intro-copy">{text}</p>}
    </section>
  );
}
