import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RobotHumanoidRegularProps = Omit<IconBaseProps, 'children'>;

const RobotHumanoidRegular = memo(
  forwardRef<SVGSVGElement, RobotHumanoidRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 9c.41 0 .75.34.75.75v1.69c0 .41-.34.75-.75.75S9 11.85 9 11.44V9.75c0-.41.34-.75.75-.75M14.25 9c.41 0 .75.34.75.75v1.69c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.75c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v1.29c3.36.32 6.1 2.79 6.81 6.02q.21-.06.44-.06c.97 0 1.75.78 1.75 1.75s-.78 1.75-1.75 1.75q-.13 0-.25-.02V13c0 3.24-2 6.02-4.82 7.18l.74 1.48c.12.24.1.51-.03.73q-.23.35-.64.36H9q-.41 0-.64-.36c-.13-.22-.15-.5-.03-.73l.74-1.48C6.24 19.02 4.25 16.24 4.25 13v-.27l-.25.02c-.97 0-1.75-.78-1.75-1.75S3.03 9.25 4 9.25q.23 0 .44.06c.72-3.23 3.45-5.7 6.81-6.02V2c0-.41.34-.75.75-.75m0 3.5c-3.45 0-6.25 2.8-6.25 6.25v2c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25v-2c0-3.45-2.8-6.25-6.25-6.25" clipRule="evenodd" />
    </IconBase>
  ))
);

RobotHumanoidRegular.displayName = 'RobotHumanoidRegular';

// Triple export pattern
export { RobotHumanoidRegular, RobotHumanoidRegular as RobotHumanoidRegularIcon, RobotHumanoidRegular as SiRobotHumanoidRegular };
export default RobotHumanoidRegular;
export type { RobotHumanoidRegularProps };
