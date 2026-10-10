import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingFillProps = Omit<IconBaseProps, 'children'>;

const SeedlingFill = memo(
  forwardRef<SVGSVGElement, SeedlingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22.86 4.02c0 2.54-.32 4.39-.89 5.83s-1.36 2.43-2.2 3.27c-1.62 1.63-4.1 1.86-5.98.71-.6 1.06-.91 2.25-.91 3.48V21c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-1.34c0-.83-.33-1.63-.92-2.21l-1.92-1.92c-1.5.93-3.49.75-4.79-.55-1.38-1.38-2.37-4-2.37-6.98v-.87H2c2.99 0 5.6 1 6.98 2.37 1.3 1.3 1.48 3.3.55 4.8l1.7 1.69q.27-1.81 1.23-3.35c-1.47-1.91-1.33-4.66.42-6.41.84-.84 1.82-1.63 3.27-2.2 1.44-.56 3.3-.89 5.84-.89h.87z" />
    </IconBase>
  ))
);

SeedlingFill.displayName = 'SeedlingFill';

// Triple export pattern
export { SeedlingFill, SeedlingFill as SeedlingFillIcon, SeedlingFill as SiSeedlingFill };
export default SeedlingFill;
export type { SeedlingFillProps };
