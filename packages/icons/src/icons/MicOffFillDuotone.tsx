import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffFillDuotone = memo(
  forwardRef<SVGSVGElement, MicOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-fill-duotone" {...props}>
      <path d="M4.03 11.15a.9.9 0 0 1 1.07.63 7.13 7.13 0 0 0 10.05 4.61l1.3 1.3a9 9 0 0 1-3.58 1.14v1.3H15a.87.87 0 1 1 0 1.75H9a.88.88 0 0 1 0-1.75h2.12v-1.3a8.9 8.9 0 0 1-7.72-6.61.9.9 0 0 1 .63-1.07M18.9 11.78a.88.88 0 0 1 1.7.44 9 9 0 0 1-1.2 2.68.88.88 0 0 1-1.46-.96q.65-.99.96-2.16" opacity={0.4} />
        <path d="M13.42 14.66A4.87 4.87 0 0 1 7.12 10V8.36zM12 2.13c2.7 0 4.87 2.18 4.87 4.87v3q0 .95-.34 1.8a.88.88 0 0 1-1.43.3L8.2 5.2a.9.9 0 0 1-.08-1.16A4.9 4.9 0 0 1 12 2.13" opacity={0.4} />
        <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l16 16a.88.88 0 0 1-1.24 1.24l-16-16a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

MicOffFillDuotone.displayName = 'MicOffFillDuotone';

// Triple export pattern (lucide-react style)
export { MicOffFillDuotone, MicOffFillDuotone as MicOffFillDuotoneIcon, MicOffFillDuotone as SiMicOffFillDuotone };
export default MicOffFillDuotone;
export type { MicOffFillDuotoneProps };
