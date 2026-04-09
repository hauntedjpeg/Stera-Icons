import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierFillDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-fill-duotone" {...props}>
      <path d="M9.26 6.13a2.9 2.9 0 0 0 .39 2.52q-.97.63-1.8 1.7a10 10 0 0 0-1.8 3.97 3 3 0 0 0-1.77-.1 11.5 11.5 0 0 1 2.2-4.94q.59-.78 1.31-1.4H5.66a1.9 1.9 0 0 0 0-1.75zM18.34 6.13a1.9 1.9 0 0 0 0 1.75h-2.13q.72.63 1.32 1.4a11.5 11.5 0 0 1 2.18 4.94 3 3 0 0 0-1.76.1 10 10 0 0 0-1.8-3.97 8 8 0 0 0-1.8-1.7 2.9 2.9 0 0 0 .39-2.53z" opacity={0.4} />
        <path d="M5 14.13a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.75M19 14.13a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.75M12 4.13a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.76M4 5.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.76M20 5.13a1.88 1.88 0 1 1 0 3.75 1.88 1.88 0 0 1 0-3.76" />
    </IconBase>
  ))
);

CurveBezierFillDuotone.displayName = 'CurveBezierFillDuotone';

// Triple export pattern (lucide-react style)
export { CurveBezierFillDuotone, CurveBezierFillDuotone as CurveBezierFillDuotoneIcon, CurveBezierFillDuotone as SiCurveBezierFillDuotone };
export default CurveBezierFillDuotone;
export type { CurveBezierFillDuotoneProps };
