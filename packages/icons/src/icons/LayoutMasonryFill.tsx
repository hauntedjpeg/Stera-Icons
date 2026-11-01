import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutMasonryFillProps = Omit<IconBaseProps, 'children'>;

const LayoutMasonryFill = memo(
  forwardRef<SVGSVGElement, LayoutMasonryFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14.25c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H4.75c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2zM19.25 11.75c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2H15c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2zM9 2.75c1.1 0 2 .9 2 2v5.5c0 1.1-.9 2-2 2H4.75c-1.1 0-2-.9-2-2v-5.5c0-1.1.9-2 2-2zM19.25 2.75c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H15c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

LayoutMasonryFill.displayName = 'LayoutMasonryFill';

// Triple export pattern
export { LayoutMasonryFill, LayoutMasonryFill as LayoutMasonryFillIcon, LayoutMasonryFill as SiLayoutMasonryFill };
export default LayoutMasonryFill;
export type { LayoutMasonryFillProps };
