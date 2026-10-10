import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierBoldProps = Omit<IconBaseProps, 'children'>;

const CurveBezierBold = memo(
  forwardRef<SVGSVGElement, CurveBezierBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4c1.3 0 2.41.84 2.83 2h3.44c.35-.6.99-1 1.73-1 1.1 0 2 .9 2 2s-.9 2-2 2c-.74 0-1.38-.4-1.73-1h-1.73c1.63 1.53 2.85 3.76 3.28 6.12 1.26.35 2.18 1.5 2.18 2.88 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.23.75-2.3 1.81-2.75-.48-2.3-1.84-4.34-3.43-5.43-.55.72-1.4 1.18-2.38 1.18-.97 0-1.83-.46-2.38-1.18-1.59 1.09-2.95 3.14-3.43 5.43C7.25 14.7 8 15.77 8 17c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-1.37.92-2.53 2.18-2.88.43-2.36 1.65-4.6 3.28-6.12H5.73c-.35.6-.99 1-1.73 1-1.1 0-2-.9-2-2s.9-2 2-2c.74 0 1.38.4 1.73 1h3.44C9.6 4.84 10.7 4 12 4M5 16c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.54-.43-.99-.97-1zm13.97 0c-.54.01-.97.46-.97 1 0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1zM12 6c-.55 0-1 .45-1 1q0 .12.02.22c.1.45.5.78.98.78s.88-.33.98-.78L13 7c0-.55-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

CurveBezierBold.displayName = 'CurveBezierBold';

// Triple export pattern
export { CurveBezierBold, CurveBezierBold as CurveBezierBoldIcon, CurveBezierBold as SiCurveBezierBold };
export default CurveBezierBold;
export type { CurveBezierBoldProps };
