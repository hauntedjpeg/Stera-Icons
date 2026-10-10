import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidBoldProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidBold = memo(
  forwardRef<SVGSVGElement, RobotHumanoidBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 8.75c.55 0 1 .45 1 1v1.69c0 .55-.45 1-1 1s-1-.45-1-1V9.75c0-.55.45-1 1-1M14.25 8.75c.55 0 1 .45 1 1v1.69c0 .55-.45 1-1 1s-1-.45-1-1V9.75c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 1c.55 0 1 .45 1 1v1.06c3.28.41 5.95 2.81 6.75 5.96L20 9c1.1 0 2 .9 2 2s-.9 2-2 2c0 3.25-1.94 6.05-4.73 7.3l.62 1.25c.16.31.14.68-.04.98s-.5.47-.85.47H9c-.35 0-.67-.18-.85-.47-.18-.3-.2-.67-.04-.98l.62-1.25C5.94 19.05 4 16.25 4 13c-1.1 0-2-.9-2-2s.9-2 2-2q.13 0 .25.02c.8-3.15 3.47-5.55 6.75-5.96V2c0-.55.45-1 1-1m0 4c-3.31 0-6 2.69-6 6v2c0 3.31 2.69 6 6 6s6-2.69 6-6v-2c0-3.31-2.69-6-6-6" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidBold.displayName = 'RobotHumanoidBold';

// Triple export pattern
export { RobotHumanoidBold, RobotHumanoidBold as RobotHumanoidBoldIcon, RobotHumanoidBold as SiRobotHumanoidBold };
export default RobotHumanoidBold;
export type { RobotHumanoidBoldProps };
