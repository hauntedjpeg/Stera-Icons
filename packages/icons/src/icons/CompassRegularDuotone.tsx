import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CompassRegularDuotone = memo(
  forwardRef<SVGSVGElement, CompassRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M15.76 7.29c.27-.1.57-.02.77.18s.27.5.18.77l-2 6q-.12.35-.47.47l-6 2c-.27.1-.57.02-.77-.18s-.27-.5-.18-.77l2-6q.12-.35.47-.47zM12 10.75c-.69 0-1.25.56-1.25 1.25 0 .7.56 1.25 1.25 1.25s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassRegularDuotone.displayName = 'CompassRegularDuotone';

// Triple export pattern
export { CompassRegularDuotone, CompassRegularDuotone as CompassRegularDuotoneIcon, CompassRegularDuotone as SiCompassRegularDuotone };
export default CompassRegularDuotone;
export type { CompassRegularDuotoneProps };
