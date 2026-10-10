import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallRegularDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.83 5.57C8.33 7.3 9.25 9.54 9.25 12s-.92 4.71-2.42 6.43q-.6-.48-1.08-1.05c1.25-1.44 2-3.32 2-5.38s-.75-3.94-2-5.38q.5-.57 1.08-1.05M17.17 5.57q.6.48 1.08 1.05c-1.25 1.44-2 3.32-2 5.38s.75 3.94 2 5.38q-.5.57-1.08 1.05c-1.5-1.72-2.42-3.97-2.42-6.43s.92-4.71 2.42-6.43" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallRegularDuotone.displayName = 'TennisBallRegularDuotone';

// Triple export pattern
export { TennisBallRegularDuotone, TennisBallRegularDuotone as TennisBallRegularDuotoneIcon, TennisBallRegularDuotone as SiTennisBallRegularDuotone };
export default TennisBallRegularDuotone;
export type { TennisBallRegularDuotoneProps };
