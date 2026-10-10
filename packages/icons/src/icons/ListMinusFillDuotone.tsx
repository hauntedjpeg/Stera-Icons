import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListMinusFillDuotone = memo(
  forwardRef<SVGSVGElement, ListMinusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 14.75c.69 0 1.25.56 1.25 1.25S9.69 17.25 9 17.25H2c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM9 9.75c.69 0 1.25.56 1.25 1.25S9.69 12.25 9 12.25H2c-.69 0-1.25-.56-1.25-1.25S1.31 9.75 2 9.75zM22 4.75c.69 0 1.25.56 1.25 1.25S22.69 7.25 22 7.25H2C1.31 7.25.75 6.69.75 6S1.31 4.75 2 4.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.5 9c3.04 0 5.5 2.46 5.5 5.5S20.54 20 17.5 20 12 17.54 12 14.5 14.46 9 17.5 9M15 13.6c-.5 0-.9.4-.9.9s.4.9.9.9h5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ListMinusFillDuotone.displayName = 'ListMinusFillDuotone';

// Triple export pattern
export { ListMinusFillDuotone, ListMinusFillDuotone as ListMinusFillDuotoneIcon, ListMinusFillDuotone as SiListMinusFillDuotone };
export default ListMinusFillDuotone;
export type { ListMinusFillDuotoneProps };
