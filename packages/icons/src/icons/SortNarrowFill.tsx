import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortNarrowFillProps = Omit<IconBaseProps, 'children'>;

const SortNarrowFill = memo(
  forwardRef<SVGSVGElement, SortNarrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 3.13c.48 0 .87.39.87.87v11.13H10c.35 0 .67.2.8.53.14.33.07.7-.18.96l-4 4-.07.06-.11.08h-.01q-.13.07-.27.1h-.03l-.13.02-.18-.02-.19-.07q-.14-.06-.25-.17l-4-4c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54h3.12V4c0-.48.4-.87.88-.87" />
        <path d="M22 11.13c.48 0 .87.39.87.87s-.39.88-.87.88H10c-.48 0-.88-.4-.88-.88s.4-.87.88-.87zM19 7.13c.48 0 .87.39.87.87s-.39.88-.87.88h-9c-.48 0-.88-.4-.88-.88s.4-.87.88-.87zM16 3.13c.48 0 .87.39.87.87s-.39.88-.87.88h-6c-.48 0-.88-.4-.88-.88s.4-.87.88-.87z" />
    </IconBase>
  ))
);

SortNarrowFill.displayName = 'SortNarrowFill';

// Triple export pattern
export { SortNarrowFill, SortNarrowFill as SortNarrowFillIcon, SortNarrowFill as SiSortNarrowFill };
export default SortNarrowFill;
export type { SortNarrowFillProps };
