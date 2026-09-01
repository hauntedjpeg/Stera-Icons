import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidRegularDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.67 21.67a.75.75 0 0 1-.67 1.08H9a.75.75 0 0 1-.67-1.09l.74-1.48a7.7 7.7 0 0 0 5.86 0zM4 9.25q.23 0 .44.06A8 8 0 0 0 4.25 11v1.73l-.25.02a1.75 1.75 0 1 1 0-3.5M20 9.25a1.75 1.75 0 1 1-.25 3.48V11q0-.87-.19-1.7.21-.05.44-.05M9.75 9c.41 0 .75.34.75.75v1.69a.75.75 0 0 1-1.5 0V9.75c0-.41.34-.75.75-.75M14.25 9c.41 0 .75.34.75.75v1.69a.75.75 0 0 1-1.5 0V9.75c0-.41.34-.75.75-.75M12 1.25c.41 0 .75.34.75.75v1.29a8 8 0 0 0-1.5 0V2c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 3.25A7.75 7.75 0 0 1 19.75 11v2a7.75 7.75 0 0 1-15.5 0v-2A7.75 7.75 0 0 1 12 3.25m0 1.5A6.25 6.25 0 0 0 5.75 11v2a6.25 6.25 0 1 0 12.5 0v-2c0-3.45-2.8-6.25-6.25-6.25" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

RobotHumanoidRegularDuotone.displayName = 'RobotHumanoidRegularDuotone';

// Triple export pattern (lucide-react style)
export { RobotHumanoidRegularDuotone, RobotHumanoidRegularDuotone as RobotHumanoidRegularDuotoneIcon, RobotHumanoidRegularDuotone as SiRobotHumanoidRegularDuotone };
export default RobotHumanoidRegularDuotone;
export type { RobotHumanoidRegularDuotoneProps };
