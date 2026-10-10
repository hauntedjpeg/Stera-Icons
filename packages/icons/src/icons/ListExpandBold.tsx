import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListExpandBoldProps = Omit<IconBaseProps, 'children'>;

const ListExpandBold = memo(
  forwardRef<SVGSVGElement, ListExpandBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.3 14.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-3 3c-.18.2-.44.3-.7.3q-.42 0-.7-.3l-3-3c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l2.3 2.29zM11 17c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM11 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM18 4.5q.41 0 .7.3l3 3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L18 6.92l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l3-3q.28-.28.7-.29M11 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListExpandBold.displayName = 'ListExpandBold';

// Triple export pattern
export { ListExpandBold, ListExpandBold as ListExpandBoldIcon, ListExpandBold as SiListExpandBold };
export default ListExpandBold;
export type { ListExpandBoldProps };
