import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MilestoneBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MilestoneBoldDuotone = memo(
  forwardRef<SVGSVGElement, MilestoneBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 21a1 1 0 1 1-2 0v-7h2zM12 2a1 1 0 0 1 1 1v2h-2V3a1 1 0 0 1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M17.25 5a3 3 0 0 1 1.97.74l3 2.63c.7.6.7 1.66 0 2.26l-3 2.63a3 3 0 0 1-1.97.74H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zM5 7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12.25a1 1 0 0 0 .66-.25l2.57-2.25-2.57-2.25a1 1 0 0 0-.66-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

MilestoneBoldDuotone.displayName = 'MilestoneBoldDuotone';

// Triple export pattern (lucide-react style)
export { MilestoneBoldDuotone, MilestoneBoldDuotone as MilestoneBoldDuotoneIcon, MilestoneBoldDuotone as SiMilestoneBoldDuotone };
export default MilestoneBoldDuotone;
export type { MilestoneBoldDuotoneProps };
