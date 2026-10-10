import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandBoldDuotone = memo(
  forwardRef<SVGSVGElement, ExpandBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.3 14.3c.38-.4 1.02-.4 1.4 0l3.3 3.29V19h-1.41l-3.3-3.3c-.39-.38-.39-1.02 0-1.4M8.3 14.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L6.42 19H5v-1.41zM9.7 8.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L5 6.42V5h1.41zM19 5v1.41l-3.3 3.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L17.58 5z" opacity={0.4} />
        <path d="M4 15c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1M20 15c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1M8 3c.55 0 1 .45 1 1s-.45 1-1 1H5v3c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1zM20 3c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V5h-3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ExpandBoldDuotone.displayName = 'ExpandBoldDuotone';

// Triple export pattern
export { ExpandBoldDuotone, ExpandBoldDuotone as ExpandBoldDuotoneIcon, ExpandBoldDuotone as SiExpandBoldDuotone };
export default ExpandBoldDuotone;
export type { ExpandBoldDuotoneProps };
