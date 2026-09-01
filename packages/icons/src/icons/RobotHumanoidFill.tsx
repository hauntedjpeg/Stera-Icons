import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidFillProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidFill = memo(
  forwardRef<SVGSVGElement, RobotHumanoidFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13c.48 0 .88.39.88.87v1.17a7.9 7.9 0 0 1 6.78 5.99q.16-.03.34-.04a1.88 1.88 0 0 1 0 3.76l-.12-.01V13a7.9 7.9 0 0 1-4.78 7.24l.68 1.37a.88.88 0 0 1-.78 1.27H9a.87.87 0 0 1-.78-1.27l.68-1.37c-2.8-1.2-4.78-4-4.78-7.24v-.13H4a1.88 1.88 0 1 1 .34-3.71 7.9 7.9 0 0 1 6.79-5.99V2c0-.48.39-.87.87-.87M9.75 8.88c-.48 0-.87.39-.87.87v1.69a.88.88 0 0 0 1.74 0V9.75c0-.48-.39-.87-.87-.87m4.5 0c-.48 0-.87.39-.87.87v1.69a.88.88 0 0 0 1.74 0V9.75c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidFill.displayName = 'RobotHumanoidFill';

// Triple export pattern (lucide-react style)
export { RobotHumanoidFill, RobotHumanoidFill as RobotHumanoidFillIcon, RobotHumanoidFill as SiRobotHumanoidFill };
export default RobotHumanoidFill;
export type { RobotHumanoidFillProps };
