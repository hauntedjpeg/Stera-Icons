import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidRegularProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidRegular = memo(
  forwardRef<SVGSVGElement, RobotHumanoidRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 9c.41 0 .75.34.75.75v1.69a.75.75 0 0 1-1.5 0V9.75c0-.41.34-.75.75-.75M14.25 9c.41 0 .75.34.75.75v1.69a.75.75 0 0 1-1.5 0V9.75c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v1.29c3.36.32 6.1 2.79 6.81 6.02a1.75 1.75 0 1 1 .19 3.42V13c0 3.24-2 6.02-4.82 7.18l.74 1.48a.75.75 0 0 1-.67 1.09H9a.75.75 0 0 1-.67-1.09l.74-1.48A7.75 7.75 0 0 1 4.25 13v-.27l-.25.02a1.75 1.75 0 1 1 .44-3.44 7.75 7.75 0 0 1 6.81-6.02V2c0-.41.34-.75.75-.75m0 3.5A6.25 6.25 0 0 0 5.75 11v2a6.25 6.25 0 1 0 12.5 0v-2c0-3.45-2.8-6.25-6.25-6.25" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidRegular.displayName = 'RobotHumanoidRegular';

// Triple export pattern (lucide-react style)
export { RobotHumanoidRegular, RobotHumanoidRegular as RobotHumanoidRegularIcon, RobotHumanoidRegular as SiRobotHumanoidRegular };
export default RobotHumanoidRegular;
export type { RobotHumanoidRegularProps };
