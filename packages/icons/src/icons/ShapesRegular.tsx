import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesRegularProps = Omit<IconBaseProps, 'children'>;

const ShapesRegular = memo(
  forwardRef<SVGSVGElement, ShapesRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.25 13a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.5 13.25c1.24 0 2.25 1 2.25 2.25V19c0 1.24-1 2.25-2.25 2.25H5c-1.24 0-2.25-1-2.25-2.25v-3.5c0-1.24 1-2.25 2.25-2.25zM5 14.75a.75.75 0 0 0-.75.75V19c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5a.75.75 0 0 0-.75-.75zM12 2.75c.27 0 .52.14.65.38l3.68 6.37a.75.75 0 0 1-.65 1.13H8.32a.75.75 0 0 1-.65-1.13l3.68-6.37.06-.09q.23-.28.59-.29M9.62 9.13h4.76L12 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesRegular.displayName = 'ShapesRegular';

// Triple export pattern (lucide-react style)
export { ShapesRegular, ShapesRegular as ShapesRegularIcon, ShapesRegular as SiShapesRegular };
export default ShapesRegular;
export type { ShapesRegularProps };
