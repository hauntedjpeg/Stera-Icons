import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisRegularProps = Omit<IconBaseProps, 'children'>;

const PolarisRegular = memo(
  forwardRef<SVGSVGElement, PolarisRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c.41 0 .75.34.75.75v7.19l3.22-3.22c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.21 3.22H20c.41 0 .75.33.75.75 0 .4-.34.75-.75.75h-6.2l3.23 3.22c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3.22-3.22V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7.19l-3.22 3.22c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.22-3.22H4c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h6.18L6.97 8.03c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l3.22 3.22V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PolarisRegular.displayName = 'PolarisRegular';

// Triple export pattern
export { PolarisRegular, PolarisRegular as PolarisRegularIcon, PolarisRegular as SiPolarisRegular };
export default PolarisRegular;
export type { PolarisRegularProps };
