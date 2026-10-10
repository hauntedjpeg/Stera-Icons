import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffFillDuotone = memo(
  forwardRef<SVGSVGElement, MicOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.03 11.15c.47-.12.95.16 1.07.63.8 3.08 3.58 5.34 6.9 5.35q1.71-.02 3.15-.74l1.3 1.3q-1.62.93-3.58 1.14v1.3H15c.48 0 .87.39.87.87s-.39.88-.87.88H9c-.48 0-.88-.4-.88-.88s.4-.87.88-.87h2.12v-1.3c-3.74-.37-6.8-3.06-7.72-6.61-.12-.47.17-.95.63-1.07M18.9 11.78c.12-.47.6-.75 1.07-.63.46.12.75.6.63 1.07q-.38 1.46-1.2 2.68c-.27.4-.81.52-1.22.25s-.5-.81-.24-1.21q.65-.99.96-2.16" opacity={0.4} />
        <path d="M13.42 14.66q-.68.21-1.42.21c-2.7 0-4.88-2.18-4.88-4.87V8.36zM12 2.13c2.7 0 4.87 2.18 4.87 4.87v3q0 .95-.34 1.8c-.1.27-.34.47-.63.53q-.47.08-.8-.24L8.2 5.2c-.31-.3-.34-.8-.08-1.15.9-1.16 2.3-1.91 3.88-1.91" opacity={0.4} />
        <path d="M3.38 3.38c.34-.34.9-.34 1.24 0l16 16c.34.34.34.9 0 1.24s-.9.34-1.24 0l-16-16c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

MicOffFillDuotone.displayName = 'MicOffFillDuotone';

// Triple export pattern
export { MicOffFillDuotone, MicOffFillDuotone as MicOffFillDuotoneIcon, MicOffFillDuotone as SiMicOffFillDuotone };
export default MicOffFillDuotone;
export type { MicOffFillDuotoneProps };
