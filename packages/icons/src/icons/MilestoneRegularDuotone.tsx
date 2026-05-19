import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MilestoneRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MilestoneRegularDuotone = memo(
  forwardRef<SVGSVGElement, MilestoneRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 21a.75.75 0 0 1-1.5 0v-7.25h1.5zM12 2.25c.41 0 .75.34.75.75v2.25h-1.5V3c0-.41.34-.75.75-.75" opacity={0.4} />
        <path fillRule="evenodd" d="M17.25 5.25c.66 0 1.3.24 1.81.68l3 2.63c.57.5.57 1.38 0 1.88l-3 2.63c-.5.44-1.15.68-1.81.68H5A2.75 2.75 0 0 1 2.25 11V8A2.75 2.75 0 0 1 5 5.25zM5 6.75c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h12.25c.3 0 .6-.11.82-.31l2.79-2.44-2.79-2.44q-.36-.3-.82-.31z" clipRule="evenodd" />
    </IconBase>
  ))
);

MilestoneRegularDuotone.displayName = 'MilestoneRegularDuotone';

// Triple export pattern (lucide-react style)
export { MilestoneRegularDuotone, MilestoneRegularDuotone as MilestoneRegularDuotoneIcon, MilestoneRegularDuotone as SiMilestoneRegularDuotone };
export default MilestoneRegularDuotone;
export type { MilestoneRegularDuotoneProps };
