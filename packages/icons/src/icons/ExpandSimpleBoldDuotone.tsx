import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.3 14.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L5.42 20H4v-1.41zM20 4v1.41l-4.3 4.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L18.58 4z" opacity={0.4} />
        <path d="M3 14c.55 0 1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1H2.9c-.5-.06-.9-.48-.9-1v-6c0-.55.45-1 1-1M21.1 2c.5.06.9.48.9 1v6c0 .55-.45 1-1 1s-1-.45-1-1V4h-5c-.55 0-1-.45-1-1s.45-1 1-1h6.1" />
    </IconBase>
  ))
);

ExpandSimpleBoldDuotone.displayName = 'ExpandSimpleBoldDuotone';

// Triple export pattern
export { ExpandSimpleBoldDuotone, ExpandSimpleBoldDuotone as ExpandSimpleBoldDuotoneIcon, ExpandSimpleBoldDuotone as SiExpandSimpleBoldDuotone };
export default ExpandSimpleBoldDuotone;
export type { ExpandSimpleBoldDuotoneProps };
