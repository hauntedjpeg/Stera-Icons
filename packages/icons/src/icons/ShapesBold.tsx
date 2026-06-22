import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesBoldProps = Omit<IconBaseProps, 'children'>;

const ShapesBold = memo(
  forwardRef<SVGSVGElement, ShapesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.25 12.75a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M8.5 13a2.5 2.5 0 0 1 2.5 2.5V19a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 19v-3.5A2.5 2.5 0 0 1 5 13zM5 15a.5.5 0 0 0-.5.5V19c0 .28.22.5.5.5h3.5A.5.5 0 0 0 9 19v-3.5a.5.5 0 0 0-.5-.5zM12 2.5a1 1 0 0 1 .87.5l3.68 6.38a1 1 0 0 1-.87 1.5H8.32a1 1 0 0 1-.87-1.5L11.13 3a1 1 0 0 1 .87-.5m-1.95 6.38h3.9L12 5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesBold.displayName = 'ShapesBold';

// Triple export pattern (lucide-react style)
export { ShapesBold, ShapesBold as ShapesBoldIcon, ShapesBold as SiShapesBold };
export default ShapesBold;
export type { ShapesBoldProps };
