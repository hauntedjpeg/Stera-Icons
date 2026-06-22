import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesPlusFillProps = Omit<IconBaseProps, 'children'>;

const ShapesPlusFill = memo(
  forwardRef<SVGSVGElement, ShapesPlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.6 13.12q.6 0 1.06.03.45.02.92.23.67.36 1.04 1.04c.15.3.2.62.23.92q.03.45.02 1.06v1.7q0 .6-.02 1.06-.02.45-.23.92-.36.67-1.04 1.04-.46.2-.92.23t-1.06.02H5.9q-.6 0-1.06-.02-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.04-.46-.03-1.06v-1.7q0-.6.03-1.06.02-.45.23-.92.36-.68 1.04-1.04c.3-.15.62-.2.92-.23q.45-.04 1.06-.03zM17.25 13.12c.48 0 .87.4.87.88v2.37h2.38a.88.88 0 0 1 0 1.75h-2.38v2.38a.87.87 0 1 1-1.75 0v-2.38H14a.88.88 0 0 1 0-1.75h2.37V14c0-.48.4-.88.88-.88M6.2 2.32a.9.9 0 0 1 1.17.06l3.75 3.75c.34.34.34.9 0 1.24l-3.75 3.75a.9.9 0 0 1-1.24 0L2.38 7.37a.9.9 0 0 1 0-1.24l3.75-3.75zM17.25 2.62a4.13 4.13 0 1 1 0 8.26 4.13 4.13 0 0 1 0-8.26" />
    </IconBase>
  ))
);

ShapesPlusFill.displayName = 'ShapesPlusFill';

// Triple export pattern (lucide-react style)
export { ShapesPlusFill, ShapesPlusFill as ShapesPlusFillIcon, ShapesPlusFill as SiShapesPlusFill };
export default ShapesPlusFill;
export type { ShapesPlusFillProps };
