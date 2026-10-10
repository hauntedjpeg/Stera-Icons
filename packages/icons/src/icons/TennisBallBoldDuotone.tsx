import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallBoldDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.19 5.6C8.63 7.35 9.5 9.58 9.5 12s-.87 4.66-2.31 6.4q-.81-.62-1.44-1.4c1.1-1.38 1.75-3.11 1.75-5s-.66-3.62-1.75-5q.63-.78 1.44-1.4M16.81 5.6q.81.62 1.44 1.4c-1.1 1.38-1.75 3.11-1.75 5s.65 3.62 1.75 5q-.63.78-1.44 1.4c-1.44-1.74-2.31-3.97-2.31-6.4s.87-4.66 2.31-6.4" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallBoldDuotone.displayName = 'TennisBallBoldDuotone';

// Triple export pattern
export { TennisBallBoldDuotone, TennisBallBoldDuotone as TennisBallBoldDuotoneIcon, TennisBallBoldDuotone as SiTennisBallBoldDuotone };
export default TennisBallBoldDuotone;
export type { TennisBallBoldDuotoneProps };
