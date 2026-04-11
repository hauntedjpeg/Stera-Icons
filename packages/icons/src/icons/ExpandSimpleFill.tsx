import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleFill = memo(
  forwardRef<SVGSVGElement, ExpandSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.88 13.88a.88.88 0 0 1 1.24 1.24L7.24 18l2.38 2.38a.88.88 0 0 1-.62 1.5H3a.9.9 0 0 1-.87-.88v-6a.88.88 0 0 1 1.49-.62L6 16.76zM21 2.13c.48 0 .88.39.88.87v6a.88.88 0 0 1-1.5.62L18 7.24l-2.88 2.88a.88.88 0 0 1-1.24-1.24L16.76 6l-2.38-2.38a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

ExpandSimpleFill.displayName = 'ExpandSimpleFill';

// Triple export pattern (lucide-react style)
export { ExpandSimpleFill, ExpandSimpleFill as ExpandSimpleFillIcon, ExpandSimpleFill as SiExpandSimpleFill };
export default ExpandSimpleFill;
export type { ExpandSimpleFillProps };
