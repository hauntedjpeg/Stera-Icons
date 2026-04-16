import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PolarisRegularDuotone = memo(
  forwardRef<SVGSVGElement, PolarisRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.25 12.75v1.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06l3.22-3.22zM17.03 15.97a.75.75 0 0 1-1.06 1.06l-3.22-3.22v-1.06h1.06zM15.97 6.97a.75.75 0 1 1 1.06 1.06l-3.21 3.22h-1.07v-1.06zM6.97 6.97c.3-.3.77-.3 1.06 0l3.22 3.22v1.06h-1.07L6.97 8.03a.75.75 0 0 1 0-1.06" opacity={0.4} />
        <path d="M12 2.25c.41 0 .75.34.75.75v8.25H20a.75.75 0 0 1 0 1.5h-7.25V21a.75.75 0 0 1-1.5 0v-8.25H4a.75.75 0 0 1 0-1.5h7.25V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

PolarisRegularDuotone.displayName = 'PolarisRegularDuotone';

// Triple export pattern (lucide-react style)
export { PolarisRegularDuotone, PolarisRegularDuotone as PolarisRegularDuotoneIcon, PolarisRegularDuotone as SiPolarisRegularDuotone };
export default PolarisRegularDuotone;
export type { PolarisRegularDuotoneProps };
