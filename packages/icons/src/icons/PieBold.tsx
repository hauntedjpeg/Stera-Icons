import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PieBoldProps = Omit<IconBaseProps, 'children'>;

const PieBold = memo(
  forwardRef<SVGSVGElement, PieBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.3 7.54c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-1 1c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42zM13.3 7.54c.38-.39 1.02-.39 1.4 0l1 1c.4.4.4 1.03 0 1.42-.38.39-1.02.39-1.4 0l-1-1c-.4-.4-.4-1.03 0-1.42" />
        <path fillRule="evenodd" d="M12 4c5.06 0 9.3 2.86 10.73 6.95.22.64.3 1.48-.14 2.24-.45.78-1.18 1.38-2.05 1.65l-.05.17-1.07 3c-.43 1.2-1.56 1.99-2.83 1.99H7.41c-1.27 0-2.4-.8-2.83-2l-1.07-3-.05-.16c-.87-.27-1.6-.87-2.05-1.65-.43-.76-.36-1.6-.14-2.24C2.71 6.86 6.94 4 12 4m5 9.96c-.64.64-1.52 1.04-2.5 1.04s-1.86-.4-2.5-1.04c-.64.64-1.52 1.04-2.5 1.04s-1.86-.4-2.5-1.04q-.6.6-1.43.87l.9 2.5c.14.4.52.67.94.67h9.18c.42 0 .8-.27.94-.66l.9-2.51q-.83-.28-1.43-.87M12 6c-4.33 0-7.73 2.43-8.84 5.61-.1.3-.07.5-.01.58.26.47.73.77 1.25.8l.1.01c.71 0 1.35-.5 1.53-1.24l.06-.16c.15-.36.5-.6.91-.6.46 0 .86.31.97.76.18.73.82 1.24 1.53 1.24s1.35-.5 1.53-1.24l.06-.16c.15-.36.5-.6.91-.6.46 0 .86.31.97.76.18.73.82 1.24 1.53 1.24s1.35-.5 1.53-1.24l.06-.16c.15-.36.5-.6.91-.6.46 0 .86.31.97.76.18.73.82 1.24 1.53 1.24h.1c.52-.04.99-.34 1.25-.8.06-.1.1-.3 0-.59C19.72 8.43 16.32 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

PieBold.displayName = 'PieBold';

// Triple export pattern
export { PieBold, PieBold as PieBoldIcon, PieBold as SiPieBold };
export default PieBold;
export type { PieBoldProps };
