import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallBoldProps = Omit<IconBaseProps, 'children'>;

const TennisBallBold = memo(
  forwardRef<SVGSVGElement, TennisBallBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-1.8 0-3.47.6-4.81 1.6C8.63 7.35 9.5 9.58 9.5 12s-.87 4.66-2.31 6.4c1.34 1 3 1.6 4.81 1.6s3.47-.6 4.81-1.6c-1.44-1.74-2.31-3.97-2.31-6.4s.87-4.66 2.31-6.4c-1.34-1-3-1.6-4.81-1.6M5.75 7C4.65 8.39 4 10.12 4 12s.66 3.62 1.75 5c1.1-1.38 1.75-3.11 1.75-5s-.66-3.62-1.75-5m12.5 0c-1.1 1.38-1.75 3.11-1.75 5s.65 3.62 1.75 5c1.1-1.38 1.75-3.11 1.75-5s-.66-3.62-1.75-5" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallBold.displayName = 'TennisBallBold';

// Triple export pattern
export { TennisBallBold, TennisBallBold as TennisBallBoldIcon, TennisBallBold as SiTennisBallBold };
export default TennisBallBold;
export type { TennisBallBoldProps };
