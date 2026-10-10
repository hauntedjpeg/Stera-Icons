import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierRegularProps = Omit<IconBaseProps, 'children'>;

const CurveBezierRegular = memo(
  forwardRef<SVGSVGElement, CurveBezierRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.25c1.26 0 2.32.85 2.64 2h3.78c.28-.6.88-1 1.58-1 .97 0 1.75.78 1.75 1.75S20.97 8.75 20 8.75c-.7 0-1.3-.4-1.58-1h-2.55c1.87 1.5 3.3 3.97 3.73 6.57 1.23.27 2.15 1.37 2.15 2.68 0 1.52-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75c0-1.2.77-2.22 1.85-2.6-.48-2.52-2-4.8-3.78-5.92-.5.76-1.35 1.27-2.32 1.27s-1.83-.5-2.32-1.27C7.9 9.6 6.38 11.88 5.9 14.4c1.08.38 1.85 1.4 1.85 2.6 0 1.52-1.23 2.75-2.75 2.75S2.25 18.52 2.25 17c0-1.31.92-2.4 2.14-2.68.45-2.6 1.87-5.06 3.74-6.57H5.58c-.28.6-.88 1-1.58 1-.97 0-1.75-.78-1.75-1.75S3.03 5.25 4 5.25c.7 0 1.3.4 1.58 1h3.78c.32-1.15 1.38-2 2.64-2m-7 11.5c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.54-1.23-1.21-1.25zm13.96 0c-.67.02-1.21.57-1.21 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 5.75c-.69 0-1.25.56-1.25 1.25q0 .15.03.27c.13.56.62.98 1.22.98s1.1-.42 1.22-.98q.03-.13.03-.27c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CurveBezierRegular.displayName = 'CurveBezierRegular';

// Triple export pattern
export { CurveBezierRegular, CurveBezierRegular as CurveBezierRegularIcon, CurveBezierRegular as SiCurveBezierRegular };
export default CurveBezierRegular;
export type { CurveBezierRegularProps };
