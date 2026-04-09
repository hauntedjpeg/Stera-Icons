import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentFillProps = Omit<IconBaseProps, 'children'>;

const PercentFill = memo(
  forwardRef<SVGSVGElement, PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="percent-fill" {...props}>
      <path d="M19.38 3.38a.88.88 0 0 1 1.24 1.24l-16 16a.88.88 0 0 1-1.24-1.24zM17.5 14.12a3.38 3.38 0 1 1 0 6.76 3.38 3.38 0 0 1 0-6.76M6.5 3.12a3.38 3.38 0 1 1 0 6.76 3.38 3.38 0 0 1 0-6.76" />
    </IconBase>
  ))
);

PercentFill.displayName = 'PercentFill';

// Triple export pattern (lucide-react style)
export { PercentFill, PercentFill as PercentFillIcon, PercentFill as SiPercentFill };
export default PercentFill;
export type { PercentFillProps };
