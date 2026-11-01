import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletHalfFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletHalfFillDuotone = memo(
  forwardRef<SVGSVGElement, DropletHalfFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.5 4.61c.64.6 1.49 1.44 2.34 2.44.85.99 1.68 2.11 2.3 3.27s.98 2.29.98 3.32c0 3.62-2.78 6.49-6.12 6.49V4.15z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13h.15l.14.04q.15.06.26.15h.01l.02.02.06.06.23.2.82.73c.67.63 1.57 1.52 2.47 2.58.9 1.05 1.82 2.28 2.52 3.58.69 1.3 1.2 2.72 1.2 4.15 0 4.5-3.49 8.24-7.88 8.24s-7.87-3.74-7.87-8.24c0-1.43.5-2.85 1.2-4.15.69-1.3 1.6-2.53 2.5-3.58s1.8-1.95 2.48-2.58l.82-.74.23-.2.06-.05.02-.01q.12-.1.27-.15l.14-.04h.01zm0 18c3.34 0 6.12-2.87 6.13-6.5 0-1.02-.38-2.15-1-3.31-.61-1.16-1.44-2.28-2.3-3.27-.84-1-1.7-1.84-2.33-2.44l-.5-.45z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletHalfFillDuotone.displayName = 'DropletHalfFillDuotone';

// Triple export pattern
export { DropletHalfFillDuotone, DropletHalfFillDuotone as DropletHalfFillDuotoneIcon, DropletHalfFillDuotone as SiDropletHalfFillDuotone };
export default DropletHalfFillDuotone;
export type { DropletHalfFillDuotoneProps };
