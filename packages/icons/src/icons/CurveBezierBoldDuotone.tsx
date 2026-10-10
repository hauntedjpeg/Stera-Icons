import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.17 6q-.16.47-.17 1 .02 1.05.62 1.82c-1.59 1.09-2.95 3.14-3.43 5.43Q5.63 14 5 14q-.43 0-.82.12C4.6 11.76 5.83 9.52 7.46 8H5.73q.26-.45.27-1 0-.55-.27-1zM18.27 6Q18 6.45 18 7q0 .55.27 1h-1.73c1.63 1.53 2.84 3.76 3.28 6.12Q19.42 14 19 14q-.63 0-1.19.25c-.48-2.3-1.84-4.34-3.43-5.43q.6-.77.62-1.82 0-.53-.17-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M5 14c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M19 14c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M12 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path d="M4 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M20 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
    </IconBase>
  ))
);

CurveBezierBoldDuotone.displayName = 'CurveBezierBoldDuotone';

// Triple export pattern
export { CurveBezierBoldDuotone, CurveBezierBoldDuotone as CurveBezierBoldDuotoneIcon, CurveBezierBoldDuotone as SiCurveBezierBoldDuotone };
export default CurveBezierBoldDuotone;
export type { CurveBezierBoldDuotoneProps };
