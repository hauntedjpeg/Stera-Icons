import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 14.13c1.86 0 3.38 1.5 3.38 3.37 0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38 1.5-3.37 3.37-3.37M6.5 3.13c1.86 0 3.38 1.5 3.38 3.37 0 1.86-1.52 3.38-3.38 3.38S3.13 8.36 3.13 6.5s1.5-3.37 3.37-3.37" opacity={0.4} />
        <path d="M19.38 3.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-16 16c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24z" />
    </IconBase>
  ))
);

PercentFillDuotone.displayName = 'PercentFillDuotone';

// Triple export pattern
export { PercentFillDuotone, PercentFillDuotone as PercentFillDuotoneIcon, PercentFillDuotone as SiPercentFillDuotone };
export default PercentFillDuotone;
export type { PercentFillDuotoneProps };
