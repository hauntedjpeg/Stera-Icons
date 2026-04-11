import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SeedlingFillDuotone = memo(
  forwardRef<SVGSVGElement, SeedlingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 7.13c2.99 0 5.6 1 6.98 2.37 1.3 1.3 1.48 3.3.55 4.8l-2.41-2.42a.88.88 0 0 0-1.24 1.24l2.41 2.41c-1.5.93-3.49.75-4.79-.55-1.38-1.38-2.37-4-2.37-6.98v-.87zM22.86 4.02c0 2.54-.32 4.39-.89 5.83a9 9 0 0 1-2.2 3.27 4.9 4.9 0 0 1-5.98.71q.46-.85 1.17-1.55l1.66-1.66a.88.88 0 0 0-1.24-1.24l-1.66 1.66a9 9 0 0 0-1.26 1.6 4.9 4.9 0 0 1 .42-6.41 9 9 0 0 1 3.27-2.2c1.44-.56 3.3-.89 5.84-.89h.87z" opacity={0.4} />
        <path d="M15.38 9.38a.88.88 0 0 1 1.24 1.24l-1.66 1.66a7.1 7.1 0 0 0-2.09 5.03V21a.87.87 0 1 1-1.75 0v-1.34c0-.83-.32-1.63-.91-2.21l-4.33-4.33a.88.88 0 0 1 1.24-1.24l4.1 4.1a9 9 0 0 1 2.5-4.94z" />
    </IconBase>
  ))
);

SeedlingFillDuotone.displayName = 'SeedlingFillDuotone';

// Triple export pattern (lucide-react style)
export { SeedlingFillDuotone, SeedlingFillDuotone as SeedlingFillDuotoneIcon, SeedlingFillDuotone as SiSeedlingFillDuotone };
export default SeedlingFillDuotone;
export type { SeedlingFillDuotoneProps };
