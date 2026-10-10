import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListMinusBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListMinusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 15c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM9 10c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 5c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.5 9c3.04 0 5.5 2.46 5.5 5.5S20.54 20 17.5 20 12 17.54 12 14.5 14.46 9 17.5 9M15 13.6c-.5 0-.9.4-.9.9s.4.9.9.9h5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ListMinusBoldDuotone.displayName = 'ListMinusBoldDuotone';

// Triple export pattern
export { ListMinusBoldDuotone, ListMinusBoldDuotone as ListMinusBoldDuotoneIcon, ListMinusBoldDuotone as SiListMinusBoldDuotone };
export default ListMinusBoldDuotone;
export type { ListMinusBoldDuotoneProps };
