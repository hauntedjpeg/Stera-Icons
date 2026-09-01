import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidBoldDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.9 21.55A1 1 0 0 1 15 23H9a1 1 0 0 1-.9-1.45l.63-1.25a8 8 0 0 0 6.54 0zM4 9q.13 0 .25.02Q4 9.97 4 11v2a2 2 0 1 1 0-4M20 9a2 2 0 1 1 0 4v-2q0-1.03-.25-1.98zM9.75 8.75a1 1 0 0 1 1 1v1.69a1 1 0 1 1-2 0V9.75a1 1 0 0 1 1-1M14.25 8.75a1 1 0 0 1 1 1v1.69a1 1 0 1 1-2 0V9.75a1 1 0 0 1 1-1M12 1a1 1 0 0 1 1 1v1.06a8 8 0 0 0-2 0V2a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 3a8 8 0 0 1 8 8v2a8 8 0 1 1-16 0v-2a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6v2a6 6 0 0 0 12 0v-2a6 6 0 0 0-6-6" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

RobotHumanoidBoldDuotone.displayName = 'RobotHumanoidBoldDuotone';

// Triple export pattern (lucide-react style)
export { RobotHumanoidBoldDuotone, RobotHumanoidBoldDuotone as RobotHumanoidBoldDuotoneIcon, RobotHumanoidBoldDuotone as SiRobotHumanoidBoldDuotone };
export default RobotHumanoidBoldDuotone;
export type { RobotHumanoidBoldDuotoneProps };
