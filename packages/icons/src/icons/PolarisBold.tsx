import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PolarisBoldProps = Omit<IconBaseProps, 'children'>;

const PolarisBold = memo(
  forwardRef<SVGSVGElement, PolarisBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c.55 0 1 .45 1 1v6.59l2.8-2.8c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42L14.43 11H20c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-5.6l2.8 2.8c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 14.42V21c0 .55-.45 1-1 1s-1-.45-1-1v-6.59l-2.8 2.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L9.6 13H4c-.55 0-1-.44-1-1 0-.55.45-1 1-1h5.58L6.8 8.22c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0L11 9.6V3c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

PolarisBold.displayName = 'PolarisBold';

// Triple export pattern
export { PolarisBold, PolarisBold as PolarisBoldIcon, PolarisBold as SiPolarisBold };
export default PolarisBold;
export type { PolarisBoldProps };
