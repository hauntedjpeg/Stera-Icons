import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseBoldDuotone = memo(
  forwardRef<SVGSVGElement, CollapseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 16v1.41l-3.3 3.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L6.58 16zM20.7 19.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L16 17.42V16h1.41zM19.3 3.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L17.42 8H16V6.59zM3.3 3.3c.38-.4 1.02-.4 1.4 0L8 6.58V8H6.59l-3.3-3.3c-.39-.38-.39-1.02 0-1.4" opacity={0.4} />
        <path d="M9 14c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-3H5c-.55 0-1-.45-1-1s.45-1 1-1zM19 14c.55 0 1 .45 1 1s-.45 1-1 1h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1zM9 4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h3V5c0-.55.45-1 1-1M15 4c.55 0 1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

CollapseBoldDuotone.displayName = 'CollapseBoldDuotone';

// Triple export pattern
export { CollapseBoldDuotone, CollapseBoldDuotone as CollapseBoldDuotoneIcon, CollapseBoldDuotone as SiCollapseBoldDuotone };
export default CollapseBoldDuotone;
export type { CollapseBoldDuotoneProps };
