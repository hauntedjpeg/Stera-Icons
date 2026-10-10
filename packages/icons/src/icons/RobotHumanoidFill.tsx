import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidFillProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidFill = memo(
  forwardRef<SVGSVGElement, RobotHumanoidFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13c.48 0 .88.39.88.87v1.17c3.32.37 6.01 2.8 6.78 5.99q.16-.03.34-.04c1.04 0 1.88.84 1.88 1.88s-.84 1.88-1.88 1.88l-.12-.01V13c0 3.25-1.97 6.04-4.78 7.24l.68 1.37c.14.27.12.6-.04.85-.16.26-.44.41-.74.41H9c-.3 0-.58-.15-.74-.41s-.18-.58-.04-.85l.68-1.37c-2.8-1.2-4.78-4-4.78-7.24v-.13H4c-1.04 0-1.87-.83-1.87-1.87S2.96 9.13 4 9.13q.18 0 .34.03c.77-3.19 3.46-5.62 6.79-5.99V2c0-.48.39-.87.87-.87M9.75 8.88c-.48 0-.87.39-.87.87v1.69c0 .48.39.87.87.87s.88-.39.88-.87V9.75c0-.48-.4-.87-.88-.87m4.5 0c-.48 0-.87.39-.87.87v1.69c0 .48.39.87.87.87s.88-.39.88-.87V9.75c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidFill.displayName = 'RobotHumanoidFill';

// Triple export pattern
export { RobotHumanoidFill, RobotHumanoidFill as RobotHumanoidFillIcon, RobotHumanoidFill as SiRobotHumanoidFill };
export default RobotHumanoidFill;
export type { RobotHumanoidFillProps };
