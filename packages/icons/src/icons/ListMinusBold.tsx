import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListMinusBoldProps = Omit<IconBaseProps, 'children'>;

const ListMinusBold = memo(
  forwardRef<SVGSVGElement, ListMinusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 9c3.04 0 5.5 2.46 5.5 5.5S20.54 20 17.5 20 12 17.54 12 14.5 14.46 9 17.5 9M15 13.6c-.5 0-.9.4-.9.9s.4.9.9.9h5c.5 0 .9-.4.9-.9s-.4-.9-.9-.9z" clipRule="evenodd" />
        <path d="M9 15c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM9 10c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 5c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListMinusBold.displayName = 'ListMinusBold';

// Triple export pattern
export { ListMinusBold, ListMinusBold as ListMinusBoldIcon, ListMinusBold as SiListMinusBold };
export default ListMinusBold;
export type { ListMinusBoldProps };
