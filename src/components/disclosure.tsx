'use client';

import { useId, useState, type ReactNode } from 'react';
import { ArrowDown } from 'lucide-react';

export function Disclosure({ title, children }: { title: string; children: ReactNode }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <div className="disclosure" data-open={open}>
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{title}</span>
          <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        className="disclosure-panel"
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="disclosure-clip">
          <div className="disclosure-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
