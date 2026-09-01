import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidBoldProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidBold = memo(
  forwardRef<SVGSVGElement, RobotHumanoidBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 8.75a1 1 0 0 1 1 1v1.69a1 1 0 1 1-2 0V9.75a1 1 0 0 1 1-1M14.25 8.75a1 1 0 0 1 1 1v1.69a1 1 0 1 1-2 0V9.75a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 1a1 1 0 0 1 1 1v1.06a8 8 0 0 1 6.75 5.96L20 9a2 2 0 1 1 0 4 8 8 0 0 1-4.73 7.3l.62 1.25A1 1 0 0 1 15 23H9a1 1 0 0 1-.9-1.45l.63-1.25A8 8 0 0 1 4 13a2 2 0 1 1 .25-3.98A8 8 0 0 1 11 3.06V2a1 1 0 0 1 1-1m0 4a6 6 0 0 0-6 6v2a6 6 0 0 0 12 0v-2a6 6 0 0 0-6-6" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidBold.displayName = 'RobotHumanoidBold';

// Triple export pattern (lucide-react style)
export { RobotHumanoidBold, RobotHumanoidBold as RobotHumanoidBoldIcon, RobotHumanoidBold as SiRobotHumanoidBold };
export default RobotHumanoidBold;
export type { RobotHumanoidBoldProps };
