import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m3.75 6.23a3.8 3.8 0 0 0-3.82-1.95 2.9 2.9 0 0 0-2.55 2.9v1.6H8.5a.88.88 0 0 0 0 1.75h.88v1.6q.02.31-.54.77a4 4 0 0 1-.64.4l-.04.01a.88.88 0 0 0 .34 1.69h7a.88.88 0 0 0 0-1.75h-4.67c.17-.32.3-.69.3-1.11v-1.6H13a.88.88 0 0 0 0-1.76h-1.87v-1.6c0-.64.42-1.07 1.06-1.17s1.49.18 2.06 1.13a.88.88 0 0 0 1.5-.9" clipRule="evenodd" opacity={.4} />
        <path d="M11.93 6.41c1.37-.2 2.9.42 3.82 1.95a.88.88 0 1 1-1.5.9c-.57-.94-1.42-1.21-2.06-1.12-.64.1-1.07.53-1.07 1.17v1.6H13a.88.88 0 0 1 0 1.75h-1.88v1.6q-.02.64-.29 1.12h4.67a.87.87 0 1 1 0 1.75h-7a.88.88 0 0 1-.34-1.68l.2-.1q.2-.12.48-.32c.38-.3.53-.57.53-.76v-1.6H8.5a.88.88 0 0 1 0-1.76h.87v-1.6a2.9 2.9 0 0 1 2.56-2.9" />
    </IconBase>
  ))
);

PoundSterlingCircleFillDuotone.displayName = 'PoundSterlingCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircleFillDuotone, PoundSterlingCircleFillDuotone as PoundSterlingCircleFillDuotoneIcon, PoundSterlingCircleFillDuotone as SiPoundSterlingCircleFillDuotone };
export default PoundSterlingCircleFillDuotone;
export type { PoundSterlingCircleFillDuotoneProps };
