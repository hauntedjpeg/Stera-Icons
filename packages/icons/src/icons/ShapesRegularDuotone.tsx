import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShapesRegularDuotone = memo(
  forwardRef<SVGSVGElement, ShapesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.5 13.25c1.24 0 2.25 1 2.25 2.25V19c0 1.24-1 2.25-2.25 2.25H5c-1.24 0-2.25-1-2.25-2.25v-3.5c0-1.24 1-2.25 2.25-2.25zM5 14.75c-.41 0-.75.34-.75.75V19c0 .41.34.75.75.75h3.5c.41 0 .75-.34.75-.75v-3.5c0-.41-.34-.75-.75-.75z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M17.25 13c2.35 0 4.25 1.9 4.25 4.25s-1.9 4.25-4.25 4.25S13 19.6 13 17.25 14.9 13 17.25 13m0 1.5c-1.52 0-2.75 1.23-2.75 2.75S15.73 20 17.25 20 20 18.77 20 17.25s-1.23-2.75-2.75-2.75M12 2.75c.27 0 .52.14.65.38l3.68 6.37c.13.23.13.52 0 .75s-.38.37-.65.38H8.32c-.27 0-.52-.15-.65-.38s-.13-.52 0-.75l3.68-6.37.06-.09q.23-.28.59-.29M9.62 9.13h4.76L12 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesRegularDuotone.displayName = 'ShapesRegularDuotone';

// Triple export pattern
export { ShapesRegularDuotone, ShapesRegularDuotone as ShapesRegularDuotoneIcon, ShapesRegularDuotone as SiShapesRegularDuotone };
export default ShapesRegularDuotone;
export type { ShapesRegularDuotoneProps };
