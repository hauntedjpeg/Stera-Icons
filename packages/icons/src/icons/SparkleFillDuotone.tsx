import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, SparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.4 5.98a8.9 8.9 0 0 0 5.62 5.61l1.21.41-1.21.4a8.9 8.9 0 0 0-5.61 5.62L12 19.23l-.4-1.21a8.9 8.9 0 0 0-5.62-5.61L4.77 12l1.21-.4a8.9 8.9 0 0 0 5.61-5.62L12 4.77z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.13c.38 0 .71.24.83.6l1.24 3.7a7.1 7.1 0 0 0 4.5 4.5l3.7 1.24a.88.88 0 0 1 0 1.66l-3.7 1.24a7.1 7.1 0 0 0-4.5 4.5l-1.24 3.7a.88.88 0 0 1-1.66 0l-1.24-3.7a7.1 7.1 0 0 0-4.5-4.5l-3.7-1.24a.88.88 0 0 1 0-1.66l3.7-1.24a7.1 7.1 0 0 0 4.5-4.5l1.24-3.7.05-.14a.9.9 0 0 1 .78-.47m-.4 4.85a8.9 8.9 0 0 1-5.62 5.61L4.77 12l1.21.4a8.9 8.9 0 0 1 5.61 5.62l.41 1.21.4-1.21a8.9 8.9 0 0 1 5.62-5.61l1.21-.41-1.21-.4a8.9 8.9 0 0 1-5.61-5.62L12 4.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleFillDuotone.displayName = 'SparkleFillDuotone';

// Triple export pattern (lucide-react style)
export { SparkleFillDuotone, SparkleFillDuotone as SparkleFillDuotoneIcon, SparkleFillDuotone as SiSparkleFillDuotone };
export default SparkleFillDuotone;
export type { SparkleFillDuotoneProps };
