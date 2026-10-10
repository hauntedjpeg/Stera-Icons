import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltBoldProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltBold = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1h3.59l-4.3-4.3c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0L20 18.58V15c0-.55.45-1 1-1M9 2c.55 0 1 .45 1 1s-.45 1-1 1H5.41l4.3 4.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L4 5.42V9c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

ExpandSimpleAltBold.displayName = 'ExpandSimpleAltBold';

// Triple export pattern
export { ExpandSimpleAltBold, ExpandSimpleAltBold as ExpandSimpleAltBoldIcon, ExpandSimpleAltBold as SiExpandSimpleAltBold };
export default ExpandSimpleAltBold;
export type { ExpandSimpleAltBoldProps };
