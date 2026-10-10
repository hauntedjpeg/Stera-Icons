import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierFillDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.26 6.13q-.13.4-.13.87.01.94.52 1.65-.97.63-1.8 1.7c-.86 1.12-1.51 2.52-1.8 3.97q-.5-.19-1.05-.2-.37 0-.72.1c.33-1.83 1.12-3.56 2.2-4.94q.59-.78 1.31-1.4H5.66q.21-.4.21-.88t-.21-.87zM18.34 6.13q-.21.39-.21.87t.21.88h-2.13q.72.63 1.32 1.4c1.07 1.38 1.86 3.11 2.18 4.94q-.33-.1-.71-.1-.55.01-1.05.2c-.29-1.45-.94-2.85-1.8-3.97q-.83-1.07-1.8-1.7.51-.71.53-1.65 0-.46-.14-.87z" opacity={0.4} />
        <path d="M5 14.13c1.59 0 2.88 1.28 2.88 2.87S6.58 19.88 5 19.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87M19 14.13c1.59 0 2.88 1.28 2.88 2.87s-1.3 2.88-2.88 2.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87M12 4.13c1.59 0 2.88 1.28 2.88 2.87S13.58 9.88 12 9.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87M4 5.13c1.04 0 1.88.83 1.88 1.87S5.04 8.88 4 8.88 2.13 8.04 2.13 7 2.96 5.13 4 5.13M20 5.13c1.04 0 1.88.83 1.88 1.87S21.04 8.88 20 8.88 18.13 8.04 18.13 7s.83-1.87 1.87-1.87" />
    </IconBase>
  ))
);

CurveBezierFillDuotone.displayName = 'CurveBezierFillDuotone';

// Triple export pattern
export { CurveBezierFillDuotone, CurveBezierFillDuotone as CurveBezierFillDuotoneIcon, CurveBezierFillDuotone as SiCurveBezierFillDuotone };
export default CurveBezierFillDuotone;
export type { CurveBezierFillDuotoneProps };
