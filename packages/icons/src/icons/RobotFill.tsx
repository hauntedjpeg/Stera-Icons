import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotFillProps = Omit<IconBaseProps, 'children'>;

const RobotFill = memo(
  forwardRef<SVGSVGElement, RobotFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13c.76 0 1.38.61 1.38 1.37 0 .43-.2.8-.5 1.06v1.57h2.32q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v.32h.62c.76 0 1.38.62 1.38 1.38s-.62 1.38-1.38 1.38h-.62v.32q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.6.04-1.37.04V21c0 .48-.4.88-.88.88H9c-.48 0-.87-.4-.87-.88v-1.13q-.79.01-1.37-.04-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05v-.32H2.5c-.76 0-1.37-.62-1.37-1.38s.61-1.37 1.37-1.37h.63v-.33q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04h2.32V3.56c-.3-.25-.5-.63-.5-1.06 0-.76.62-1.37 1.38-1.37m-2.75 9c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87m5.5 0c-.48 0-.87.39-.87.87v2c0 .48.39.88.87.88s.88-.4.88-.88v-2c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotFill.displayName = 'RobotFill';

// Triple export pattern
export { RobotFill, RobotFill as RobotFillIcon, RobotFill as SiRobotFill };
export default RobotFill;
export type { RobotFillProps };
