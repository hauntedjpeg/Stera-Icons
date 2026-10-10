import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CompassRegularProps = Omit<IconBaseProps, 'children'>;

const CompassRegular = memo(
  forwardRef<SVGSVGElement, CompassRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.76 7.29c.27-.1.57-.02.77.18s.27.5.18.77l-2 6q-.12.35-.47.47l-6 2c-.27.1-.57.02-.77-.18s-.27-.5-.18-.77l2-6q.12-.35.47-.47zM12 10.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CompassRegular.displayName = 'CompassRegular';

// Triple export pattern
export { CompassRegular, CompassRegular as CompassRegularIcon, CompassRegular as SiCompassRegular };
export default CompassRegular;
export type { CompassRegularProps };
