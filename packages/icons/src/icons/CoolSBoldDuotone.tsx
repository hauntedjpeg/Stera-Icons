import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoolSBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoolSBoldDuotone = memo(
  forwardRef<SVGSVGElement, CoolSBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.52 1.12c.35-.19.79-.16 1.1.1l5 4c.24.19.38.48.38.78v4c0 .55-.45 1-1 1h-1.59l-2-2H16V6.48l-4-3.2-4 3.2v3.1l4.7 4.71q.3.3.3.71v2c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-4.7-4.7Q6 10.4 6 10V6c0-.3.14-.6.38-.78l5-4z" />
        <path d="M12 6c.55 0 1 .45 1 1v1.59l4.7 4.7q.3.3.3.71v4c0 .3-.14.6-.37.78l-5 4c-.37.3-.89.3-1.26 0l-5-4C6.15 18.6 6 18.3 6 18v-4c0-.55.45-1 1-1h1.59l2 2H8v2.52l4 3.2 4-3.2v-3.1L11.3 9.7Q11 9.4 11 9V7c0-.55.45-1 1-1" opacity={.4} />
    </IconBase>
  ))
);

CoolSBoldDuotone.displayName = 'CoolSBoldDuotone';

// Triple export pattern
export { CoolSBoldDuotone, CoolSBoldDuotone as CoolSBoldDuotoneIcon, CoolSBoldDuotone as SiCoolSBoldDuotone };
export default CoolSBoldDuotone;
export type { CoolSBoldDuotoneProps };
