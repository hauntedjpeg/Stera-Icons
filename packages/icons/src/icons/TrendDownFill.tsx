import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownFillProps = Omit<IconBaseProps, 'children'>;

const TrendDownFill = memo(
  forwardRef<SVGSVGElement, TrendDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.88 5.14a.9.9 0 0 1 1.23-.01l6.63 6.53 2.55-2.51a.9.9 0 0 1 1.23 0l5.46 5.38 1.9-1.9a.88.88 0 0 1 1.5.62v5a1 1 0 0 1-.23.58l-.03.03a1 1 0 0 1-.53.26H16.5a.88.88 0 0 1-.62-1.49l1.86-1.86L12.9 11l-2.55 2.52a.9.9 0 0 1-1.16.06l-.07-.06L1.9 6.37a.9.9 0 0 1-.01-1.23" />
    </IconBase>
  ))
);

TrendDownFill.displayName = 'TrendDownFill';

// Triple export pattern (lucide-react style)
export { TrendDownFill, TrendDownFill as TrendDownFillIcon, TrendDownFill as SiTrendDownFill };
export default TrendDownFill;
export type { TrendDownFillProps };
