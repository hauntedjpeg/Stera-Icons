import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const ListSimpleBold = memo(
  forwardRef<SVGSVGElement, ListSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 13c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1zM21 14.5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM6 6c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1zM21 7.5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListSimpleBold.displayName = 'ListSimpleBold';

// Triple export pattern
export { ListSimpleBold, ListSimpleBold as ListSimpleBoldIcon, ListSimpleBold as SiListSimpleBold };
export default ListSimpleBold;
export type { ListSimpleBoldProps };
