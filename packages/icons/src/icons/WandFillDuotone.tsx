import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WandFillDuotone = memo(
  forwardRef<SVGSVGElement, WandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 17.13c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-3c0-.48.39-.87.87-.87M17.88 17.88c.34-.34.9-.34 1.24 0l1 1c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1-1c-.34-.34-.34-.9 0-1.24M6 11.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM21 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM12 2.13c.48 0 .88.39.88.87v3c0 .48-.4.88-.88.88s-.87-.4-.87-.88V3c0-.48.39-.87.87-.87M3.88 3.88c.34-.34.9-.34 1.24 0l1 1c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1-1c-.34-.34-.34-.9 0-1.24M18.88 3.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1 1c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24z" opacity={0.4} />
        <path d="M15.57 7.24c.34-.2.77-.14 1.05.14s.33.7.14 1.05l-1.07 1.91c-.58 1.03-.58 2.29 0 3.32l1.07 1.91c.2.34.14.77-.14 1.05s-.7.33-1.05.14l-1.91-1.07c-1.03-.57-2.28-.58-3.3 0h-.02l-1.19.67q-.6.33-1.11.84l-3.92 3.92c-.34.34-.9.34-1.24 0q-.14-.15-.2-.31c-.12-.31-.05-.68.2-.93l3.91-3.91.01-.01q.49-.5.83-1.1l.68-1.2c.58-1.03.58-2.29 0-3.32L7.24 8.43c-.2-.34-.14-.77.14-1.05s.7-.34 1.05-.14l1.91 1.07c1.03.57 2.29.57 3.32 0z" />
    </IconBase>
  ))
);

WandFillDuotone.displayName = 'WandFillDuotone';

// Triple export pattern
export { WandFillDuotone, WandFillDuotone as WandFillDuotoneIcon, WandFillDuotone as SiWandFillDuotone };
export default WandFillDuotone;
export type { WandFillDuotoneProps };
