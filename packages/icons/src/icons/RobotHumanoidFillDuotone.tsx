import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidFillDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.78 21.6a.88.88 0 0 1-.78 1.27H9a.87.87 0 0 1-.78-1.26l.68-1.37a7.9 7.9 0 0 0 6.2 0zM4 9.13q.18 0 .34.03A8 8 0 0 0 4.13 11v1.87H4a1.88 1.88 0 0 1 0-3.74M20 9.13a1.88 1.88 0 0 1 0 3.74h-.12V11a8 8 0 0 0-.22-1.84q.16-.03.34-.04M12 1.13c.48 0 .88.39.88.87v1.17a8 8 0 0 0-1.76 0V2c0-.48.4-.87.88-.87M9.75 8.88c.48 0 .88.39.88.87v1.69a.88.88 0 0 1-1.76 0V9.75c0-.48.4-.87.88-.87M14.25 8.88c.48 0 .88.39.88.87v1.69a.88.88 0 0 1-1.76 0V9.75c0-.48.4-.87.88-.87" />
        <path fillRule="evenodd" d="M12 3.13A7.9 7.9 0 0 1 19.88 11v2a7.88 7.88 0 0 1-15.75 0v-2A7.9 7.9 0 0 1 12 3.13M9.75 8.88c-.48 0-.87.39-.87.87v1.69a.88.88 0 0 0 1.74 0V9.75c0-.48-.39-.87-.87-.87m4.5 0c-.48 0-.87.39-.87.87v1.69a.88.88 0 0 0 1.74 0V9.75c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

RobotHumanoidFillDuotone.displayName = 'RobotHumanoidFillDuotone';

// Triple export pattern (lucide-react style)
export { RobotHumanoidFillDuotone, RobotHumanoidFillDuotone as RobotHumanoidFillDuotoneIcon, RobotHumanoidFillDuotone as SiRobotHumanoidFillDuotone };
export default RobotHumanoidFillDuotone;
export type { RobotHumanoidFillDuotoneProps };
