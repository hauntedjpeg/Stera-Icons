import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.3 14.3c.38-.4 1.02-.4 1.4 0l4.3 4.29V20h-1.41l-4.3-4.3c-.39-.38-.39-1.02 0-1.4M9.7 8.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L4 5.42V4h1.41z" opacity={0.4} />
        <path d="M21 14c.55 0 1 .45 1 1v6c0 .52-.4.94-.9 1H15c-.55 0-1-.45-1-1s.45-1 1-1h5v-5c0-.55.45-1 1-1M9 2c.55 0 1 .45 1 1s-.45 1-1 1H4v5c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.52.4-.94.9-1H9" />
    </IconBase>
  ))
);

ExpandSimpleAltBoldDuotone.displayName = 'ExpandSimpleAltBoldDuotone';

// Triple export pattern
export { ExpandSimpleAltBoldDuotone, ExpandSimpleAltBoldDuotone as ExpandSimpleAltBoldDuotoneIcon, ExpandSimpleAltBoldDuotone as SiExpandSimpleAltBoldDuotone };
export default ExpandSimpleAltBoldDuotone;
export type { ExpandSimpleAltBoldDuotoneProps };
