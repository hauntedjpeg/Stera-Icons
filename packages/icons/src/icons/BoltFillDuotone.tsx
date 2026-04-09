import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoltFillDuotone = memo(
  forwardRef<SVGSVGElement, BoltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bolt-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.2 3.12c.95 0 1.63 0 2.25.2q.8.26 1.41.82c.48.44.8 1.04 1.28 1.88l1.8 3.2c.45.8.78 1.37.91 2q.16.78 0 1.57c-.13.62-.46 1.18-.91 2l-1.8 3.2c-.47.83-.8 1.43-1.28 1.87q-.61.56-1.4.82c-.63.2-1.3.2-2.27.2H9.81c-.96 0-1.64 0-2.27-.2q-.79-.26-1.4-.82c-.48-.44-.8-1.04-1.28-1.88l-1.8-3.2c-.45-.8-.78-1.37-.91-2q-.16-.78 0-1.57c.13-.62.46-1.18.91-2l1.8-3.2c.47-.83.8-1.43 1.28-1.87q.61-.56 1.4-.82c.63-.2 1.3-.2 2.27-.2zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
    </IconBase>
  ))
);

BoltFillDuotone.displayName = 'BoltFillDuotone';

// Triple export pattern (lucide-react style)
export { BoltFillDuotone, BoltFillDuotone as BoltFillDuotoneIcon, BoltFillDuotone as SiBoltFillDuotone };
export default BoltFillDuotone;
export type { BoltFillDuotoneProps };
