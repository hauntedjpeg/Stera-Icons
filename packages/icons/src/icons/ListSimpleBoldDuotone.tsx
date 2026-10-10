import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 14.5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM21 7.5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M6 13c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1zM6 6c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1z" />
    </IconBase>
  ))
);

ListSimpleBoldDuotone.displayName = 'ListSimpleBoldDuotone';

// Triple export pattern
export { ListSimpleBoldDuotone, ListSimpleBoldDuotone as ListSimpleBoldDuotoneIcon, ListSimpleBoldDuotone as SiListSimpleBoldDuotone };
export default ListSimpleBoldDuotone;
export type { ListSimpleBoldDuotoneProps };
