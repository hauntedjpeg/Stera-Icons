import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleFillProps = Omit<IconBaseProps, 'children'>;

const SparkleFill = memo(
  forwardRef<SVGSVGElement, SparkleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.13c.38 0 .71.24.83.6l1.24 3.7a7.1 7.1 0 0 0 4.5 4.5l3.7 1.24a.88.88 0 0 1 0 1.66l-3.7 1.24a7.1 7.1 0 0 0-4.5 4.5l-1.24 3.7a.88.88 0 0 1-1.66 0l-1.24-3.7a7.1 7.1 0 0 0-4.5-4.5l-3.7-1.24a.88.88 0 0 1 0-1.66l3.7-1.24a7.1 7.1 0 0 0 4.5-4.5l1.24-3.7.05-.14a.9.9 0 0 1 .78-.47" />
    </IconBase>
  ))
);

SparkleFill.displayName = 'SparkleFill';

// Triple export pattern (lucide-react style)
export { SparkleFill, SparkleFill as SparkleFillIcon, SparkleFill as SiSparkleFill };
export default SparkleFill;
export type { SparkleFillProps };
