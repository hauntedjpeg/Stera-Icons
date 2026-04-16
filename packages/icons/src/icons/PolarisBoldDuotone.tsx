import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PolarisBoldDuotone = memo(
  forwardRef<SVGSVGElement, PolarisBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 13v1.41l-2.8 2.8a1 1 0 0 1-1.4-1.42L9.6 13zM17.2 15.8a1 1 0 0 1-1.4 1.4L13 14.42V13h1.4zM15.8 6.8a1 1 0 1 1 1.4 1.4L14.43 11H13V9.58zM6.8 6.8a1 1 0 0 1 1.4 0L11 9.58v1.4H9.58L6.8 8.22a1 1 0 0 1 0-1.42" opacity={0.4} />
        <path d="M12 2a1 1 0 0 1 1 1v8h7a1 1 0 1 1 0 2h-7v8a1 1 0 1 1-2 0v-8H4a1 1 0 1 1 0-2h7V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

PolarisBoldDuotone.displayName = 'PolarisBoldDuotone';

// Triple export pattern (lucide-react style)
export { PolarisBoldDuotone, PolarisBoldDuotone as PolarisBoldDuotoneIcon, PolarisBoldDuotone as SiPolarisBoldDuotone };
export default PolarisBoldDuotone;
export type { PolarisBoldDuotoneProps };
