import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListPlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListPlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListPlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 15c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM9 10c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 5c.55 0 1 .45 1 1s-.45 1-1 1H2c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.5 9c3.04 0 5.5 2.46 5.5 5.5S20.54 20 17.5 20 12 17.54 12 14.5 14.46 9 17.5 9m0 2.1c-.5 0-.9.4-.9.9v1.6H15c-.5 0-.9.4-.9.9s.4.9.9.9h1.6V17c0 .5.4.9.9.9s.9-.4.9-.9v-1.6H20c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-1.6V12c0-.5-.4-.9-.9-.9" clipRule="evenodd" />
    </IconBase>
  ))
);

ListPlusBoldDuotone.displayName = 'ListPlusBoldDuotone';

// Triple export pattern
export { ListPlusBoldDuotone, ListPlusBoldDuotone as ListPlusBoldDuotoneIcon, ListPlusBoldDuotone as SiListPlusBoldDuotone };
export default ListPlusBoldDuotone;
export type { ListPlusBoldDuotoneProps };
