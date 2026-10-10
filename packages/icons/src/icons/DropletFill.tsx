import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletFillProps = Omit<IconBaseProps, 'children'>;

const DropletFill = memo(
  forwardRef<SVGSVGElement, DropletFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13h.15l.14.04q.15.06.26.15h.01l.02.02.06.06.23.2.82.73c.67.63 1.57 1.52 2.47 2.58.9 1.05 1.82 2.28 2.52 3.58.69 1.3 1.2 2.72 1.2 4.15 0 4.5-3.49 8.24-7.88 8.24s-7.87-3.74-7.87-8.24c0-1.43.5-2.85 1.2-4.15.69-1.3 1.6-2.53 2.5-3.58s1.8-1.95 2.48-2.58l.82-.74.23-.2.06-.05.02-.01q.12-.1.27-.15l.14-.04h.01z" />
    </IconBase>
  ))
);

DropletFill.displayName = 'DropletFill';

// Triple export pattern
export { DropletFill, DropletFill as DropletFillIcon, DropletFill as SiDropletFill };
export default DropletFill;
export type { DropletFillProps };
