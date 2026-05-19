import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MilestoneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MilestoneFillDuotone = memo(
  forwardRef<SVGSVGElement, MilestoneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.25 6.75c.3 0 .6.11.82.31l2.79 2.44-2.79 2.44q-.36.3-.82.31H5c-.69 0-1.25-.56-1.25-1.25V8c0-.69.56-1.25 1.25-1.25z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2a1 1 0 0 1 1 1v2.25h4.25c.66 0 1.3.24 1.81.68l3 2.63c.57.5.57 1.38 0 1.88l-3 2.63c-.5.44-1.15.68-1.81.68H13V21a1 1 0 1 1-2 0v-7.25H5A2.75 2.75 0 0 1 2.25 11V8A2.75 2.75 0 0 1 5 5.25h6V3a1 1 0 0 1 1-1M5 6.75c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h12.25c.3 0 .6-.11.82-.31l2.79-2.44-2.79-2.44q-.36-.3-.82-.31z" clipRule="evenodd" />
    </IconBase>
  ))
);

MilestoneFillDuotone.displayName = 'MilestoneFillDuotone';

// Triple export pattern (lucide-react style)
export { MilestoneFillDuotone, MilestoneFillDuotone as MilestoneFillDuotoneIcon, MilestoneFillDuotone as SiMilestoneFillDuotone };
export default MilestoneFillDuotone;
export type { MilestoneFillDuotoneProps };
