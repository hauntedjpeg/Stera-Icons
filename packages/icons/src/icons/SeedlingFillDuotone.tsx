import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SeedlingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SeedlingFillDuotone = memo(
  forwardRef<SVGSVGElement, SeedlingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2 7.13c2.99 0 5.6 1 6.98 2.37 1.3 1.3 1.48 3.3.55 4.8l-2.41-2.42c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2.41 2.41c-1.5.93-3.49.75-4.79-.55-1.38-1.38-2.37-4-2.37-6.98v-.87zM22.86 4.02c0 2.54-.32 4.39-.89 5.83s-1.36 2.43-2.2 3.27c-1.62 1.63-4.1 1.86-5.98.71q.46-.85 1.17-1.55l1.66-1.66c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-1.66 1.66q-.72.72-1.26 1.6c-1.47-1.91-1.33-4.66.42-6.41.84-.84 1.82-1.63 3.27-2.2 1.44-.56 3.3-.89 5.84-.89h.87z" opacity={0.4} />
        <path d="M15.38 9.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.66 1.66c-1.33 1.33-2.09 3.14-2.09 5.03V21c0 .48-.39.87-.87.87l-.18-.01q-.12-.03-.24-.1c-.27-.14-.46-.43-.46-.76v-1.34c0-.83-.32-1.63-.91-2.21l-4.33-4.33c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l4.1 4.1c.29-1.86 1.16-3.6 2.5-4.94z" />
    </IconBase>
  ))
);

SeedlingFillDuotone.displayName = 'SeedlingFillDuotone';

// Triple export pattern
export { SeedlingFillDuotone, SeedlingFillDuotone as SeedlingFillDuotoneIcon, SeedlingFillDuotone as SiSeedlingFillDuotone };
export default SeedlingFillDuotone;
export type { SeedlingFillDuotoneProps };
