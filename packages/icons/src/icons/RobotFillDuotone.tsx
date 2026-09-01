import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotFillDuotone = memo(
  forwardRef<SVGSVGElement, RobotFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 5.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v3.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-3.4q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-5.95 5c-.48 0-.87.39-.87.87v2a.88.88 0 0 0 1.74 0v-2c0-.48-.39-.87-.87-.87m5.5 0c-.48 0-.87.39-.87.87v2a.88.88 0 0 0 1.74 0v-2c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M15.88 21c0 .48-.4.88-.88.88H9a.9.9 0 0 1-.87-.88v-1.12h7.74zM3.13 13.88H2.5a1.37 1.37 0 1 1 0-2.76h.63zM9.25 10.13c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.76 0v-2c0-.48.4-.87.88-.87M14.75 10.13c.48 0 .88.39.88.87v2a.88.88 0 0 1-1.76 0v-2c0-.48.4-.87.88-.87M21.5 11.13a1.37 1.37 0 1 1 0 2.74h-.62v-2.74zM12 1.13a1.37 1.37 0 0 1 .88 2.43v1.57h-1.76V3.56A1.37 1.37 0 0 1 12 1.13" />
    </IconBase>
  ))
);

RobotFillDuotone.displayName = 'RobotFillDuotone';

// Triple export pattern (lucide-react style)
export { RobotFillDuotone, RobotFillDuotone as RobotFillDuotoneIcon, RobotFillDuotone as SiRobotFillDuotone };
export default RobotFillDuotone;
export type { RobotFillDuotoneProps };
