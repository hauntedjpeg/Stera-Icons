import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallFillProps = Omit<IconBaseProps, 'children'>;

const TennisBallFill = memo(
  forwardRef<SVGSVGElement, TennisBallFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c2.37 0 4.55.83 6.25 2.22-2.21 1.82-3.62 4.57-3.62 7.65s1.4 5.83 3.62 7.64c-1.7 1.4-3.88 2.23-6.25 2.23s-4.55-.83-6.25-2.23c2.21-1.8 3.63-4.56 3.63-7.64S7.96 6.17 5.75 4.35C7.45 2.96 9.63 2.13 12 2.13" />
        <path d="M19.5 5.6c1.48 1.72 2.38 3.95 2.38 6.4s-.9 4.68-2.37 6.4c-1.9-1.48-3.14-3.8-3.14-6.4s1.23-4.92 3.14-6.4M4.49 5.6c1.9 1.48 3.14 3.8 3.14 6.4s-1.23 4.92-3.14 6.4c-1.47-1.72-2.37-3.95-2.37-6.4s.9-4.68 2.37-6.4" />
    </IconBase>
  ))
);

TennisBallFill.displayName = 'TennisBallFill';

// Triple export pattern
export { TennisBallFill, TennisBallFill as TennisBallFillIcon, TennisBallFill as SiTennisBallFill };
export default TennisBallFill;
export type { TennisBallFillProps };
