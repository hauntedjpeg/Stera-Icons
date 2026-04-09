import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingFillProps = Omit<IconBaseProps, 'children'>;

const SeedlingFill = memo(
  forwardRef<SVGSVGElement, SeedlingFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="seedling-fill" {...props}>
      <path d="M22.86 4.02c0 2.54-.32 4.39-.89 5.83a9 9 0 0 1-2.2 3.27 4.9 4.9 0 0 1-5.98.71 7 7 0 0 0-.91 3.48V21a.88.88 0 0 1-1.76 0v-1.34c0-.83-.32-1.63-.91-2.21l-1.92-1.92c-1.5.93-3.49.75-4.79-.55-1.38-1.38-2.37-4-2.37-6.98v-.87H2c2.99 0 5.6 1 6.98 2.37 1.3 1.3 1.48 3.3.55 4.8l1.7 1.69q.27-1.81 1.23-3.35a4.9 4.9 0 0 1 .42-6.41 9 9 0 0 1 3.27-2.2c1.44-.56 3.3-.89 5.84-.89h.87z" />
    </IconBase>
  ))
);

SeedlingFill.displayName = 'SeedlingFill';

// Triple export pattern (lucide-react style)
export { SeedlingFill, SeedlingFill as SeedlingFillIcon, SeedlingFill as SiSeedlingFill };
export default SeedlingFill;
export type { SeedlingFillProps };
