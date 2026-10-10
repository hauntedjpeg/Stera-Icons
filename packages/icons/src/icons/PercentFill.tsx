import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentFillProps = Omit<IconBaseProps, 'children'>;

const PercentFill = memo(
  forwardRef<SVGSVGElement, PercentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.38 3.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-16 16c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM17.5 14.12c1.86 0 3.37 1.52 3.37 3.38s-1.5 3.37-3.37 3.37c-1.86 0-3.38-1.5-3.38-3.37 0-1.86 1.52-3.37 3.38-3.38M6.5 3.12c1.86 0 3.37 1.52 3.37 3.38S8.37 9.87 6.5 9.87c-1.86 0-3.38-1.5-3.38-3.37 0-1.86 1.52-3.38 3.38-3.38" />
    </IconBase>
  ))
);

PercentFill.displayName = 'PercentFill';

// Triple export pattern
export { PercentFill, PercentFill as PercentFillIcon, PercentFill as SiPercentFill };
export default PercentFill;
export type { PercentFillProps };
