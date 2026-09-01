import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotBoldDuotone = memo(
  forwardRef<SVGSVGElement, RobotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 15.43 3 14.2v-3.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 5 8.8 5zM8.8 7c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 10.8v3.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 7 16.06 7 15.2 7z" clipRule="evenodd" opacity={.4} />
        <path d="M16 21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1h8zM3 14h-.5a1.5 1.5 0 0 1 0-3H3zM9.25 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M14.75 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M21.5 11a1.5 1.5 0 0 1 0 3H21v-3zM12 1a1.5 1.5 0 0 1 1 2.62V5h-2V3.62A1.5 1.5 0 0 1 12 1" />
    </IconBase>
  ))
);

RobotBoldDuotone.displayName = 'RobotBoldDuotone';

// Triple export pattern (lucide-react style)
export { RobotBoldDuotone, RobotBoldDuotone as RobotBoldDuotoneIcon, RobotBoldDuotone as SiRobotBoldDuotone };
export default RobotBoldDuotone;
export type { RobotBoldDuotoneProps };
