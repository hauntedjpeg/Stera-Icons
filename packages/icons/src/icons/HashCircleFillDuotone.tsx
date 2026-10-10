import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, HashCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.13 10.88v2.24h-2.26v-2.24z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m2 4.63c-.48 0-.87.39-.87.87v1.63h-2.26V7.5c0-.48-.39-.87-.87-.87s-.87.39-.87.87v1.63H7.5c-.48 0-.87.39-.87.87s.39.88.87.88h1.63v2.24H7.5c-.48 0-.87.4-.87.88s.39.88.87.88h1.63v1.62c0 .48.39.88.87.88s.88-.4.88-.88v-1.62h2.24v1.62c0 .48.4.88.88.88s.88-.4.88-.88v-1.62h1.62c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.62v-2.26h1.62c.48 0 .88-.39.88-.87s-.4-.87-.88-.87h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M14 6.63c.48 0 .88.39.88.87v1.63h1.62c.48 0 .88.39.88.87s-.4.88-.88.88h-1.62v2.24h1.62c.48 0 .88.4.88.88s-.4.88-.88.88h-1.62v1.62c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-1.62h-2.26v1.62c0 .48-.39.88-.87.88s-.87-.4-.87-.88v-1.62H7.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h1.63v-2.26H7.5c-.48 0-.87-.39-.87-.87s.39-.87.87-.87h1.63V7.5c0-.48.39-.87.87-.87s.87.39.88.87v1.63h2.24V7.5c0-.48.4-.87.88-.87m-3.12 6.5h2.24v-2.26h-2.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashCircleFillDuotone.displayName = 'HashCircleFillDuotone';

// Triple export pattern
export { HashCircleFillDuotone, HashCircleFillDuotone as HashCircleFillDuotoneIcon, HashCircleFillDuotone as SiHashCircleFillDuotone };
export default HashCircleFillDuotone;
export type { HashCircleFillDuotoneProps };
