import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutMasonryFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutMasonryFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14.25c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H4.75c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2zM19.25 2.75c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H15c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2z" opacity={0.4} />
        <path d="M19.25 11.75c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2H15c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2zM9 2.75c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2H4.75c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

LayoutMasonryFillDuotone.displayName = 'LayoutMasonryFillDuotone';

// Triple export pattern
export { LayoutMasonryFillDuotone, LayoutMasonryFillDuotone as LayoutMasonryFillDuotoneIcon, LayoutMasonryFillDuotone as SiLayoutMasonryFillDuotone };
export default LayoutMasonryFillDuotone;
export type { LayoutMasonryFillDuotoneProps };
