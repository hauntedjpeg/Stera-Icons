import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallRegularProps = Omit<IconBaseProps, 'children'>;

const TennisBallRegular = memo(
  forwardRef<SVGSVGElement, TennisBallRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-1.96 0-3.76.68-5.17 1.82C8.33 7.3 9.25 9.54 9.25 12s-.92 4.71-2.42 6.43c1.41 1.14 3.21 1.82 5.17 1.82s3.76-.68 5.17-1.82c-1.5-1.72-2.42-3.97-2.42-6.43s.92-4.71 2.42-6.43C15.76 4.43 13.96 3.75 12 3.75M5.75 6.62c-1.25 1.44-2 3.32-2 5.38s.76 3.94 2 5.38c1.25-1.44 2-3.32 2-5.38s-.75-3.94-2-5.38m12.5 0c-1.25 1.44-2 3.32-2 5.38s.75 3.94 2 5.38c1.24-1.44 2-3.32 2-5.38s-.76-3.94-2-5.38" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallRegular.displayName = 'TennisBallRegular';

// Triple export pattern
export { TennisBallRegular, TennisBallRegular as TennisBallRegularIcon, TennisBallRegular as SiTennisBallRegular };
export default TennisBallRegular;
export type { TennisBallRegularProps };
