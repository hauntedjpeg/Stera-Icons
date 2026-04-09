import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DropletFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DropletFillDuotone = memo(
  forwardRef<SVGSVGElement, DropletFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="droplet-fill-duotone" {...props}>
      <path d="M12.5 4.61c.64.6 1.49 1.44 2.34 2.44.85.99 1.68 2.11 2.3 3.27s.98 2.29.98 3.32c0 3.62-2.78 6.49-6.12 6.49s-6.12-2.87-6.12-6.5c0-1.02.37-2.15.99-3.31a19 19 0 0 1 2.3-3.27A31 31 0 0 1 12 4.15z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13a1 1 0 0 1 .29.04q.15.06.26.15h.01l.02.02.06.06a18 18 0 0 1 1.05.93c.67.63 1.57 1.52 2.47 2.58.9 1.05 1.82 2.28 2.52 3.58.69 1.3 1.2 2.72 1.2 4.15 0 4.5-3.49 8.24-7.88 8.24s-7.87-3.74-7.87-8.24c0-1.43.5-2.85 1.2-4.15.69-1.3 1.6-2.53 2.5-3.58a33 33 0 0 1 3.53-3.51l.06-.06.02-.01a.87.87 0 0 1 .56-.2m-.5 2.48c-.64.6-1.49 1.44-2.33 2.44a19 19 0 0 0-2.3 3.27 7 7 0 0 0-1 3.32c0 3.62 2.79 6.49 6.13 6.49s6.12-2.87 6.13-6.5c0-1.02-.38-2.15-1-3.31a19 19 0 0 0-2.3-3.27A31 31 0 0 0 12 4.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

DropletFillDuotone.displayName = 'DropletFillDuotone';

// Triple export pattern (lucide-react style)
export { DropletFillDuotone, DropletFillDuotone as DropletFillDuotoneIcon, DropletFillDuotone as SiDropletFillDuotone };
export default DropletFillDuotone;
export type { DropletFillDuotoneProps };
