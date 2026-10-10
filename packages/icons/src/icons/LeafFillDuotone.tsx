import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LeafFillDuotone = memo(
  forwardRef<SVGSVGElement, LeafFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.88 3c0 4.04-.38 6.88-1.2 9.13-.84 2.28-2.1 3.9-3.75 5.55-2.7 2.7-6.95 2.9-9.9.63l.53-.64 4.14-4.14c.35-.34.34-.9 0-1.23-.34-.35-.9-.35-1.23 0l-4.15 4.14q-.22.22-.54.63c-2.37-2.94-2.2-7.27.54-10C6.64 5.75 8 4.48 10.23 3.57S15.44 2.12 20 2.12h.88z" opacity={.4} />
        <path d="M9.47 12.3c.34-.35.9-.35 1.23 0 .34.34.34.9 0 1.23l-4.14 4.14c-.18.18-.63.74-1.1 1.46-.48.71-.92 1.5-1.13 2.15-.15.46-.65.7-1.1.55s-.71-.65-.56-1.1c.29-.86.83-1.8 1.33-2.57.5-.75 1.02-1.42 1.32-1.72z" />
    </IconBase>
  ))
);

LeafFillDuotone.displayName = 'LeafFillDuotone';

// Triple export pattern
export { LeafFillDuotone, LeafFillDuotone as LeafFillDuotoneIcon, LeafFillDuotone as SiLeafFillDuotone };
export default LeafFillDuotone;
export type { LeafFillDuotoneProps };
