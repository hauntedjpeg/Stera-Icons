import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffFillProps = Omit<IconBaseProps, 'children'>;

const MicOffFill = memo(
  forwardRef<SVGSVGElement, MicOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l16 16a.88.88 0 0 1-1.24 1.24l-2.94-2.94a9 9 0 0 1-3.57 1.15v1.3H15a.87.87 0 1 1 0 1.75H9a.88.88 0 0 1 0-1.75h2.12v-1.3a8.9 8.9 0 0 1-7.72-6.61.88.88 0 0 1 1.7-.44 7.13 7.13 0 0 0 10.05 4.61l-1.73-1.73A4.87 4.87 0 0 1 7.12 10V8.36L3.38 4.62a.9.9 0 0 1 0-1.24M18.9 11.78a.88.88 0 0 1 1.7.44 9 9 0 0 1-1.2 2.68.88.88 0 0 1-1.46-.96q.65-.99.96-2.16M12 2.13c2.7 0 4.87 2.18 4.87 4.87v3q0 .95-.34 1.8a.88.88 0 0 1-1.43.3L8.2 5.2a.9.9 0 0 1-.08-1.16A4.9 4.9 0 0 1 12 2.13" />
    </IconBase>
  ))
);

MicOffFill.displayName = 'MicOffFill';

// Triple export pattern (lucide-react style)
export { MicOffFill, MicOffFill as MicOffFillIcon, MicOffFill as SiMicOffFill };
export default MicOffFill;
export type { MicOffFillProps };
