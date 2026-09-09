'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Content } from '@/content';

export function ServiceExplorer({
  services,
  label,
}: {
  services: Content['services'];
  label: string;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight')
      next = (index + 1) % services.length;
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
      next = (index + services.length - 1) % services.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = services.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return (
    <div className="studio-service-explorer">
      <div
        className="studio-service-tabs"
        role="tablist"
        aria-label={label}
        aria-orientation="vertical"
      >
        {services.map((service, index) => (
          <button
            key={service.name}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel-${index}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => navigate(event, index)}
          >
            <span>{service.name}</span>
            <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div className="studio-service-panels">
        {services.map((service, index) => (
          <div
            key={service.name}
            className="studio-service-panel"
            role="tabpanel"
            id={`${id}-panel-${index}`}
            aria-labelledby={`${id}-tab-${index}`}
            hidden={active !== index}
            tabIndex={0}
          >
            <p>{service.text}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
