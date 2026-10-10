import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListXFillDuotone = memo(
  forwardRef<SVGSVGElement, ListXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14.75c.69 0 1.25.56 1.25 1.25S9.69 17.25 9 17.25H2c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM9 9.75c.69 0 1.25.56 1.25 1.25S9.69 12.25 9 12.25H2c-.69 0-1.25-.56-1.25-1.25S1.31 9.75 2 9.75zM22 4.75c.69 0 1.25.56 1.25 1.25S22.69 7.25 22 7.25H2C1.31 7.25.75 6.69.75 6S1.31 4.75 2 4.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.5 9c3.04 0 5.5 2.46 5.5 5.5S20.54 20 17.5 20 12 17.54 12 14.5 14.46 9 17.5 9m2.4 3.1c-.35-.36-.92-.36-1.27 0l-1.13 1.13-1.13-1.13c-.35-.36-.92-.36-1.27 0-.36.35-.36.92 0 1.27l1.13 1.13-1.13 1.13c-.36.35-.36.92 0 1.27.35.36.92.36 1.27 0l1.13-1.13 1.13 1.13c.35.36.92.36 1.27 0 .36-.35.36-.92 0-1.27l-1.13-1.13 1.13-1.13c.36-.35.36-.92 0-1.27" clipRule="evenodd" />
    </IconBase>
  ))
);

ListXFillDuotone.displayName = 'ListXFillDuotone';

// Triple export pattern
export { ListXFillDuotone, ListXFillDuotone as ListXFillDuotoneIcon, ListXFillDuotone as SiListXFillDuotone };
export default ListXFillDuotone;
export type { ListXFillDuotoneProps };
