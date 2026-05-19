import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutListBold = memo(
  forwardRef<SVGSVGElement, LayoutListBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.85 12.75q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96t.02 1.07v1.95q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25t-1.07.02H5.9q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96q-.02-.46-.02-1.07v-1.95q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25t1.07-.02zm-1.95 2a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19c-.02.2-.02.46-.02.9v1.95a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02h1.95a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-1.95a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03c-.2-.02-.46-.02-.9-.02z" clipRule="evenodd" />
        <path d="M20.5 18.5a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 13.75a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2z" />
        <path fillRule="evenodd" d="M7.85 2.5q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96t.02 1.07v1.95q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25t-1.07.02H5.9q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96q-.02-.46-.02-1.07V5.9q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.9 2.5zm-1.95 2a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19c-.02.2-.02.46-.02.9v1.95a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.02.19.03c.2.02.46.02.9.02h1.95a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9V5.9a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03c-.2-.02-.46-.02-.9-.02z" clipRule="evenodd" />
        <path d="M20.5 8.25a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 3.5a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

LayoutListBold.displayName = 'LayoutListBold';

// Triple export pattern (lucide-react style)
export { LayoutListBold, LayoutListBold as LayoutListBoldIcon, LayoutListBold as SiLayoutListBold };
export default LayoutListBold;
export type { LayoutListBoldProps };
