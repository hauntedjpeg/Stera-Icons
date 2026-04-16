import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisBoldProps = Omit<IconBaseProps, 'children'>;

const PolarisBold = memo(
  forwardRef<SVGSVGElement, PolarisBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2a1 1 0 0 1 1 1v6.59l2.8-2.8a1 1 0 1 1 1.4 1.42L14.43 11H20a1 1 0 1 1 0 2h-5.6l2.8 2.8a1 1 0 1 1-1.4 1.4L13 14.42V21a1 1 0 1 1-2 0v-6.59l-2.8 2.8a1 1 0 1 1-1.4-1.42L9.6 13H4a1 1 0 1 1 0-2h5.58L6.8 8.22a1 1 0 1 1 1.42-1.42L11 9.6V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

PolarisBold.displayName = 'PolarisBold';

// Triple export pattern (lucide-react style)
export { PolarisBold, PolarisBold as PolarisBoldIcon, PolarisBold as SiPolarisBold };
export default PolarisBold;
export type { PolarisBoldProps };
