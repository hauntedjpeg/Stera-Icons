import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierFillProps = Omit<IconBaseProps, 'children'>;

const CurveBezierFill = memo(
  forwardRef<SVGSVGElement, CurveBezierFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.13c1.28 0 2.37.84 2.74 2h3.6a1.87 1.87 0 1 1 0 1.75h-2.13q.72.63 1.32 1.4a11.5 11.5 0 0 1 2.18 4.94 2.87 2.87 0 1 1-1.76.1 10 10 0 0 0-1.8-3.97 8 8 0 0 0-1.8-1.7 2.87 2.87 0 0 1-4.7 0q-.97.63-1.8 1.7a10 10 0 0 0-1.8 3.97 2.87 2.87 0 1 1-1.77-.1 11.5 11.5 0 0 1 2.2-4.94q.59-.78 1.31-1.4H5.66a1.87 1.87 0 1 1 0-1.75h3.6c.37-1.16 1.46-2 2.74-2" />
    </IconBase>
  ))
);

CurveBezierFill.displayName = 'CurveBezierFill';

// Triple export pattern (lucide-react style)
export { CurveBezierFill, CurveBezierFill as CurveBezierFillIcon, CurveBezierFill as SiCurveBezierFill };
export default CurveBezierFill;
export type { CurveBezierFillProps };
