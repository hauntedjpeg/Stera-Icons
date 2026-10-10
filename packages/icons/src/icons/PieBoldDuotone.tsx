import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PieBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PieBoldDuotone = memo(
  forwardRef<SVGSVGElement, PieBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.3 7.54c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-1 1c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42zM13.3 7.54c.38-.39 1.02-.39 1.4 0l1 1c.4.4.4 1.03 0 1.42-.38.39-1.02.39-1.4 0l-1-1c-.4-.4-.4-1.03 0-1.42M6.47 17.34c.14.4.52.66.94.66h9.18c.42 0 .8-.27.94-.66l.9-2.5q.5.15 1.07.16.2 0 .4-.02.34-.05.65-.14L19.42 18c-.43 1.2-1.56 1.99-2.83 1.99H7.41c-1.27 0-2.4-.8-2.83-2l-1.13-3.16q.3.1.64.14l.41.02q.57 0 1.07-.17z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 4c5.06 0 9.3 2.86 10.73 6.95.22.64.3 1.48-.14 2.24-.55.96-1.53 1.65-2.68 1.79l-.41.02c-.98 0-1.86-.4-2.5-1.05-.64.65-1.52 1.05-2.5 1.05s-1.86-.4-2.5-1.05c-.64.65-1.52 1.05-2.5 1.05s-1.86-.4-2.5-1.05C6.36 14.6 5.48 15 4.5 15q-.2 0-.4-.02c-1.16-.14-2.14-.83-2.69-1.79-.43-.76-.36-1.6-.14-2.24C2.71 6.86 6.94 4 12 4m0 2c-4.33 0-7.73 2.43-8.84 5.61-.1.3-.07.5-.01.58.25.45.69.74 1.17.8l.18.01c.71 0 1.35-.5 1.53-1.24.11-.45.51-.76.97-.76s.86.31.97.76c.18.73.82 1.24 1.53 1.24s1.35-.5 1.53-1.24c.11-.45.51-.76.97-.76s.86.31.97.76c.18.73.82 1.24 1.53 1.24s1.35-.5 1.53-1.24c.11-.45.51-.76.97-.76s.86.31.97.76c.18.73.82 1.24 1.53 1.24l.18-.01c.48-.06.92-.35 1.17-.8.06-.09.1-.29 0-.58C19.72 8.43 16.32 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

PieBoldDuotone.displayName = 'PieBoldDuotone';

// Triple export pattern
export { PieBoldDuotone, PieBoldDuotone as PieBoldDuotoneIcon, PieBoldDuotone as SiPieBoldDuotone };
export default PieBoldDuotone;
export type { PieBoldDuotoneProps };
