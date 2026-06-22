import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShapesPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, ShapesPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.25 13.13c.48 0 .88.39.88.87v2.38h2.37a.88.88 0 0 1 0 1.75h-2.37v2.37a.88.88 0 0 1-1.75 0v-2.37H14a.88.88 0 0 1 0-1.75h2.38V14c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M7.6 13.12q.6 0 1.06.03.45.02.92.23.67.36 1.04 1.04c.15.3.2.62.23.92q.03.45.02 1.06v1.7q0 .6-.02 1.06-.02.45-.23.92-.36.67-1.04 1.04-.46.2-.92.23t-1.06.02H5.9q-.6 0-1.06-.02-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.04-.46-.03-1.06v-1.7q0-.6.03-1.06.02-.45.23-.92.36-.68 1.04-1.04c.3-.15.62-.2.92-.23q.45-.04 1.06-.03zM6.2 2.32a.9.9 0 0 1 1.17.06l3.75 3.75c.34.34.34.9 0 1.24l-3.75 3.75a.9.9 0 0 1-1.24 0L2.38 7.37a.9.9 0 0 1 0-1.24l3.75-3.75zM17.25 2.62a4.13 4.13 0 1 1 0 8.26 4.13 4.13 0 0 1 0-8.26" />
    </IconBase>
  ))
);

ShapesPlusFillDuotone.displayName = 'ShapesPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { ShapesPlusFillDuotone, ShapesPlusFillDuotone as ShapesPlusFillDuotoneIcon, ShapesPlusFillDuotone as SiShapesPlusFillDuotone };
export default ShapesPlusFillDuotone;
export type { ShapesPlusFillDuotoneProps };
