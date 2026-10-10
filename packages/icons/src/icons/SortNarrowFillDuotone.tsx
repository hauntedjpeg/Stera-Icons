import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortNarrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortNarrowFillDuotone = memo(
  forwardRef<SVGSVGElement, SortNarrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 11.13c.48 0 .88.39.88.87s-.4.88-.88.88H10c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM19 7.13c.48 0 .88.39.88.87s-.4.88-.88.88h-9c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM16 3.13c.48 0 .88.39.88.87s-.4.88-.88.88h-6c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path d="M6 3.13c.48 0 .87.39.87.87v11.13H10c.35 0 .67.2.8.53.14.33.07.7-.18.96l-4 4-.07.06-.11.08h-.01q-.13.07-.27.1h-.03l-.13.02-.18-.02-.19-.07q-.14-.06-.25-.17l-4-4c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54h3.12V4c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

SortNarrowFillDuotone.displayName = 'SortNarrowFillDuotone';

// Triple export pattern
export { SortNarrowFillDuotone, SortNarrowFillDuotone as SortNarrowFillDuotoneIcon, SortNarrowFillDuotone as SiSortNarrowFillDuotone };
export default SortNarrowFillDuotone;
export type { SortNarrowFillDuotoneProps };
