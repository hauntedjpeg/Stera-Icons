import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM20 11c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM20 5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M6 16c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1zM6 10c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1zM6 4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

ListBoldDuotone.displayName = 'ListBoldDuotone';

// Triple export pattern
export { ListBoldDuotone, ListBoldDuotone as ListBoldDuotoneIcon, ListBoldDuotone as SiListBoldDuotone };
export default ListBoldDuotone;
export type { ListBoldDuotoneProps };
