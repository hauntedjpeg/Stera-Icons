import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierFillProps = Omit<IconBaseProps, 'children'>;

const CurveBezierFill = memo(
  forwardRef<SVGSVGElement, CurveBezierFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13c1.28 0 2.37.84 2.74 2h3.6c.32-.6.94-1 1.66-1 1.04 0 1.88.83 1.88 1.87S21.04 8.88 20 8.88c-.72 0-1.34-.41-1.66-1h-2.13q.72.63 1.32 1.4c1.07 1.38 1.86 3.11 2.18 4.94 1.25.32 2.16 1.44 2.16 2.78 0 1.59-1.28 2.88-2.87 2.88s-2.87-1.3-2.87-2.88c0-1.22.75-2.26 1.82-2.68-.29-1.45-.94-2.85-1.8-3.97q-.83-1.07-1.8-1.7c-.52.74-1.38 1.22-2.35 1.22s-1.83-.48-2.35-1.22q-.97.63-1.8 1.7c-.86 1.12-1.51 2.52-1.8 3.97 1.07.42 1.83 1.46 1.83 2.68 0 1.59-1.3 2.88-2.88 2.88-1.59 0-2.87-1.3-2.87-2.88 0-1.34.91-2.46 2.15-2.78.33-1.83 1.12-3.56 2.2-4.94q.59-.78 1.31-1.4H5.66c-.32.59-.94 1-1.66 1-1.04 0-1.87-.84-1.87-1.88S2.96 5.13 4 5.13c.72 0 1.34.4 1.66 1h3.6c.37-1.16 1.46-2 2.74-2" />
    </IconBase>
  ))
);

CurveBezierFill.displayName = 'CurveBezierFill';

// Triple export pattern
export { CurveBezierFill, CurveBezierFill as CurveBezierFillIcon, CurveBezierFill as SiCurveBezierFill };
export default CurveBezierFill;
export type { CurveBezierFillProps };
