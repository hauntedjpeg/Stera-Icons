import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotFillProps = Omit<IconBaseProps, 'children'>;

const RobotFill = memo(
  forwardRef<SVGSVGElement, RobotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13a1.37 1.37 0 0 1 .88 2.43v1.57h2.32q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.32h.62a1.37 1.37 0 1 1 0 2.76h-.62v.32q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.6.04-1.37.04V21c0 .48-.4.88-.88.88H9a.9.9 0 0 1-.87-.88v-1.13q-.79.01-1.37-.04a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-.32H2.5a1.37 1.37 0 1 1 0-2.76h.63v-.32q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04h2.32V3.56A1.37 1.37 0 0 1 12 1.13m-2.75 9c-.48 0-.87.39-.87.87v2a.88.88 0 0 0 1.74 0v-2c0-.48-.39-.87-.87-.87m5.5 0c-.48 0-.87.39-.87.87v2a.88.88 0 0 0 1.74 0v-2c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotFill.displayName = 'RobotFill';

// Triple export pattern (lucide-react style)
export { RobotFill, RobotFill as RobotFillIcon, RobotFill as SiRobotFill };
export default RobotFill;
export type { RobotFillProps };
