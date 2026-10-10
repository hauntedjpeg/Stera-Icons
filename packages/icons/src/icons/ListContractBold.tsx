import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListContractBoldProps = Omit<IconBaseProps, 'children'>;

const ListContractBold = memo(
  forwardRef<SVGSVGElement, ListContractBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 17c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM18 14q.41 0 .7.3l3 3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L18 16.42l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l3-3q.28-.28.7-.29M11 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM20.3 5.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-3 3c-.18.2-.44.3-.7.3q-.42 0-.7-.3l-3-3c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0L18 7.58zM11 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ListContractBold.displayName = 'ListContractBold';

// Triple export pattern
export { ListContractBold, ListContractBold as ListContractBoldIcon, ListContractBold as SiListContractBold };
export default ListContractBold;
export type { ListContractBoldProps };
