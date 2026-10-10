import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashBoldDuotone = memo(
  forwardRef<SVGSVGElement, HashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 21c0 .55-.45 1-1 1s-1-.45-1-1v-5h2zM16 21c0 .55-.45 1-1 1s-1-.45-1-1v-5h2zM10 14H8v-4h2zM16 14h-2v-4h2zM9 2c.55 0 1 .45 1 1v5H8V3c0-.55.45-1 1-1M15 2c.55 0 1 .45 1 1v5h-2V3c0-.55.45-1 1-1" opacity={0.4} />
        <path d="M21 14c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 8c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

HashBoldDuotone.displayName = 'HashBoldDuotone';

// Triple export pattern
export { HashBoldDuotone, HashBoldDuotone as HashBoldDuotoneIcon, HashBoldDuotone as SiHashBoldDuotone };
export default HashBoldDuotone;
export type { HashBoldDuotoneProps };
