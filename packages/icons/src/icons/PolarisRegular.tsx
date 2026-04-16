import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisRegularProps = Omit<IconBaseProps, 'children'>;

const PolarisRegular = memo(
  forwardRef<SVGSVGElement, PolarisRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c.41 0 .75.34.75.75v7.19l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.21 3.22H20a.75.75 0 0 1 0 1.5h-6.2l3.23 3.22a.75.75 0 1 1-1.06 1.06l-3.22-3.22V21a.75.75 0 0 1-1.5 0v-7.19l-3.22 3.22a.75.75 0 1 1-1.06-1.06l3.22-3.22H4a.75.75 0 0 1 0-1.5h6.18L6.97 8.03a.75.75 0 1 1 1.06-1.06l3.22 3.22V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PolarisRegular.displayName = 'PolarisRegular';

// Triple export pattern (lucide-react style)
export { PolarisRegular, PolarisRegular as PolarisRegularIcon, PolarisRegular as SiPolarisRegular };
export default PolarisRegular;
export type { PolarisRegularProps };
