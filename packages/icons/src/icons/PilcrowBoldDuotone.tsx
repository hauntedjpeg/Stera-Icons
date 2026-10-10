import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PilcrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PilcrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, PilcrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 20c0 .55-.45 1-1 1s-1-.45-1-1V5h2zM18 20c0 .55-.45 1-1 1s-1-.45-1-1V5h2z" opacity={0.4} />
        <path d="M19 3c.55 0 1 .45 1 1s-.45 1-1 1h-9C7.8 5 6 6.8 6 9s1.8 4 4 4h2v2h-2c-3.31 0-6-2.69-6-6s2.69-6 6-6z" />
    </IconBase>
  ))
);

PilcrowBoldDuotone.displayName = 'PilcrowBoldDuotone';

// Triple export pattern
export { PilcrowBoldDuotone, PilcrowBoldDuotone as PilcrowBoldDuotoneIcon, PilcrowBoldDuotone as SiPilcrowBoldDuotone };
export default PilcrowBoldDuotone;
export type { PilcrowBoldDuotoneProps };
