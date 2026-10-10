import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidFillDuotone = memo(
  forwardRef<SVGSVGElement, RobotHumanoidFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.78 21.6c.14.28.12.6-.04.86s-.44.41-.74.41H9c-.3 0-.58-.15-.74-.41s-.18-.58-.04-.85l.68-1.37c.95.4 2 .64 3.1.64q1.66-.01 3.1-.64zM4 9.13q.18 0 .34.03-.21.88-.21 1.84v1.87H4c-1.04 0-1.87-.83-1.87-1.87S2.96 9.13 4 9.13M20 9.13c1.04 0 1.88.83 1.88 1.87s-.84 1.88-1.88 1.88l-.12-.01V11q0-.95-.22-1.84.16-.03.34-.04M12 1.13c.48 0 .88.39.88.87v1.17q-.44-.04-.88-.04-.45 0-.87.04V2c0-.48.39-.87.87-.87M9.75 8.88c.48 0 .88.39.88.87v1.69c0 .48-.4.87-.88.87s-.87-.39-.87-.87V9.75c0-.48.39-.87.87-.87M14.25 8.88c.48 0 .88.39.88.87v1.69c0 .48-.4.87-.88.87s-.87-.39-.87-.87V9.75c0-.48.39-.87.87-.87" />
        <path fillRule="evenodd" d="M12 3.13c4.35 0 7.88 3.52 7.88 7.87v2c0 4.35-3.53 7.88-7.88 7.88S4.13 17.35 4.13 13v-2c0-4.35 3.52-7.87 7.87-7.87M9.75 8.88c-.48 0-.87.39-.87.87v1.69c0 .48.39.87.87.87s.88-.39.88-.87V9.75c0-.48-.4-.87-.88-.87m4.5 0c-.48 0-.87.39-.87.87v1.69c0 .48.39.87.87.87s.88-.39.88-.87V9.75c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

RobotHumanoidFillDuotone.displayName = 'RobotHumanoidFillDuotone';

// Triple export pattern
export { RobotHumanoidFillDuotone, RobotHumanoidFillDuotone as RobotHumanoidFillDuotoneIcon, RobotHumanoidFillDuotone as SiRobotHumanoidFillDuotone };
export default RobotHumanoidFillDuotone;
export type { RobotHumanoidFillDuotoneProps };
