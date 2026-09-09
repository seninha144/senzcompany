import type { Content } from '@/content';
import { Disclosure } from './disclosure';

export function Capabilities({ content }: { content: Content['capabilities'] }) {
  return (
    <section
      id="capabilities"
      className="capabilities studio-capabilities container"
      aria-labelledby="capabilities-title"
    >
      <div className="capabilities-intro">
        <h2 id="capabilities-title">{content.title}</h2>
        <p>{content.intro}</p>
      </div>
      <div className="capabilities-list">
        {content.groups.map((group) => (
          <Disclosure key={group.name} title={group.name}>
            <ul className="capability-tools">
              {group.items.map((item, index) => (
                <li key={item}>
                  {item}
                  {index < group.items.length - 1 && <span aria-hidden="true"> · </span>}
                </li>
              ))}
            </ul>
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
