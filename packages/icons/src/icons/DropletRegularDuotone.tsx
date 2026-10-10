import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletRegularDuotone = memo(
  forwardRef<SVGSVGElement, DropletRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12.48 2.42.02.02.06.05.23.2.82.73c.67.63 1.56 1.52 2.46 2.57s1.8 2.27 2.5 3.56c.68 1.28 1.18 2.69 1.18 4.09 0 4.44-3.43 8.11-7.75 8.11v-1.5c3.42 0 6.25-2.92 6.25-6.61 0-1.06-.38-2.21-1-3.38-.63-1.17-1.47-2.3-2.32-3.3s-1.7-1.84-2.35-2.44L12 3.99l.2-.17.2-.18.06-.05h.01c.33-.27.37-.74.11-1.06zM11.53 2.42l.01-.01zM12.26 2.3q.12.04.21.12-.1-.08-.2-.12" opacity={0.4} />
        <path d="M11.53 2.42c.32-.26.79-.21 1.05.1.26.33.22.8-.1 1.06l-.02.01-.06.05-.2.18q-.3.25-.78.7c-.64.6-1.5 1.45-2.35 2.45s-1.7 2.12-2.32 3.29-1 2.32-1 3.38c0 3.69 2.83 6.61 6.25 6.61v1.5c-4.32 0-7.75-3.67-7.75-8.11 0-1.4.5-2.8 1.18-4.09.7-1.3 1.6-2.51 2.5-3.56s1.8-1.94 2.46-2.57l.82-.73.23-.2.06-.05.02-.01z" />
    </IconBase>
  ))
);

DropletRegularDuotone.displayName = 'DropletRegularDuotone';

// Triple export pattern
export { DropletRegularDuotone, DropletRegularDuotone as DropletRegularDuotoneIcon, DropletRegularDuotone as SiDropletRegularDuotone };
export default DropletRegularDuotone;
export type { DropletRegularDuotoneProps };
