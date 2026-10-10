import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PolarisBoldDuotone = memo(
  forwardRef<SVGSVGElement, PolarisBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 13v1.41l-2.8 2.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L9.6 13zM17.2 15.8c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 14.42V13h1.4zM15.8 6.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L14.43 11H13V9.58zM6.8 6.8c.38-.4 1.02-.4 1.4 0L11 9.58v1.4H9.58L6.8 8.22c-.39-.4-.39-1.03 0-1.42" opacity={0.4} />
        <path d="M12 2c.55 0 1 .45 1 1v8h7c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-7v8c0 .55-.45 1-1 1s-1-.45-1-1v-8H4c-.55 0-1-.45-1-1 0-.56.45-1 1-1h7V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

PolarisBoldDuotone.displayName = 'PolarisBoldDuotone';

// Triple export pattern
export { PolarisBoldDuotone, PolarisBoldDuotone as PolarisBoldDuotoneIcon, PolarisBoldDuotone as SiPolarisBoldDuotone };
export default PolarisBoldDuotone;
export type { PolarisBoldDuotoneProps };
