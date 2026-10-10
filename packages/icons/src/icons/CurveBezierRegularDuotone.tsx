import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.36 6.25q-.1.36-.11.75.01.83.44 1.48c-1.8 1.12-3.31 3.4-3.79 5.92q-.42-.15-.9-.15-.3 0-.6.07c.43-2.6 1.86-5.06 3.73-6.57H5.58q.16-.35.17-.75 0-.4-.17-.75zM18.42 6.25q-.16.35-.17.75 0 .4.17.75h-2.55c1.87 1.5 3.3 3.97 3.74 6.57q-.3-.07-.61-.07-.48 0-.9.15c-.48-2.52-2-4.8-3.79-5.92q.43-.65.44-1.48 0-.39-.1-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M5 14.25c1.52 0 2.75 1.23 2.75 2.75S6.52 19.75 5 19.75 2.25 18.52 2.25 17 3.48 14.25 5 14.25m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M19 14.25c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75-2.75-1.23-2.75-2.75 1.23-2.75 2.75-2.75m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 4.25c1.52 0 2.75 1.23 2.75 2.75S13.52 9.75 12 9.75 9.25 8.52 9.25 7 10.48 4.25 12 4.25m0 1.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25" clipRule="evenodd" />
        <path d="M4 5.25c.97 0 1.75.78 1.75 1.75S4.97 8.75 4 8.75 2.25 7.97 2.25 7 3.03 5.25 4 5.25M20 5.25c.97 0 1.75.78 1.75 1.75S20.97 8.75 20 8.75 18.25 7.97 18.25 7s.78-1.75 1.75-1.75" />
    </IconBase>
  ))
);

CurveBezierRegularDuotone.displayName = 'CurveBezierRegularDuotone';

// Triple export pattern
export { CurveBezierRegularDuotone, CurveBezierRegularDuotone as CurveBezierRegularDuotoneIcon, CurveBezierRegularDuotone as SiCurveBezierRegularDuotone };
export default CurveBezierRegularDuotone;
export type { CurveBezierRegularDuotoneProps };
