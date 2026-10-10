import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesBoldProps = Omit<IconBaseProps, 'children'>;

const ShapesBold = memo(
  forwardRef<SVGSVGElement, ShapesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.25 12.75c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5m0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5M8.5 13c1.38 0 2.5 1.12 2.5 2.5V19c0 1.38-1.12 2.5-2.5 2.5H5c-1.38 0-2.5-1.12-2.5-2.5v-3.5C2.5 14.12 3.62 13 5 13zM5 15c-.28 0-.5.22-.5.5V19c0 .28.22.5.5.5h3.5c.28 0 .5-.22.5-.5v-3.5c0-.28-.22-.5-.5-.5zM12 2.5c.36 0 .69.2.87.5l3.68 6.38c.18.3.18.69 0 1-.18.3-.51.5-.87.5H8.32c-.36 0-.69-.2-.87-.5-.18-.31-.18-.7 0-1L11.13 3c.18-.3.51-.5.87-.5m-1.95 6.38h3.9L12 5.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesBold.displayName = 'ShapesBold';

// Triple export pattern
export { ShapesBold, ShapesBold as ShapesBoldIcon, ShapesBold as SiShapesBold };
export default ShapesBold;
export type { ShapesBoldProps };
