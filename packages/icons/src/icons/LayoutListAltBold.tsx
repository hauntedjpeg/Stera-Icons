import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListAltBoldProps = Omit<IconBaseProps, 'children'>;

const LayoutListAltBold = memo(
  forwardRef<SVGSVGElement, LayoutListAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.85 12.75q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96t.02 1.07v1.95q0 .61-.02 1.07t-.25.96q-.37.73-1.1 1.1-.49.22-.96.25t-1.07.02H5.9q-.61 0-1.07-.02t-.96-.25q-.73-.37-1.1-1.1-.22-.49-.25-.96T2.5 18.1v-1.95q0-.61.02-1.07t.25-.96q.37-.73 1.1-1.1.49-.22.96-.25t1.07-.02zm-1.95 2c-.44 0-.7 0-.9.02q-.14 0-.19.02l-.03.01q-.15.08-.23.22v.04q-.02.06-.03.19c-.02.2-.02.46-.02.9v1.95c0 .44 0 .7.02.9q0 .14.02.19l.01.03q.08.15.22.23h.04q.06.02.19.03c.2.02.46.02.9.02h1.95c.44 0 .7 0 .9-.02q.14 0 .19-.02l.03-.01q.15-.08.23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-1.95c0-.44 0-.7-.02-.9q0-.14-.02-.19l-.01-.03q-.08-.15-.22-.23h-.04q-.06-.02-.19-.03c-.2-.02-.46-.02-.9-.02z" clipRule="evenodd" />
        <path d="M18.5 18.5c.55 0 1 .45 1 1s-.45 1-1 1h-4.75c-.55 0-1-.45-1-1s.45-1 1-1zM20.5 13.75c.55 0 1 .45 1 1s-.45 1-1 1h-6.75c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M7.85 2.5q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96t.02 1.07v1.95q0 .61-.02 1.07t-.25.96q-.37.73-1.1 1.1-.49.22-.96.25t-1.07.02H5.9q-.61 0-1.07-.02t-.96-.25q-.73-.37-1.1-1.1-.22-.49-.25-.96T2.5 7.85V5.9q0-.61.02-1.07t.25-.96q.37-.73 1.1-1.1.49-.22.96-.25T5.9 2.5zm-1.95 2c-.44 0-.7 0-.9.02q-.14 0-.19.02l-.03.01q-.15.08-.23.22v.04q-.02.06-.03.19c-.02.2-.02.46-.02.9v1.95c0 .44 0 .7.02.9q0 .14.02.19l.01.03q.08.15.22.23h.04q.06.02.19.03c.2.02.46.02.9.02h1.95c.44 0 .7 0 .9-.02q.14 0 .19-.02l.03-.01q.15-.08.23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9V5.9c0-.44 0-.7-.02-.9q0-.14-.02-.19l-.01-.03q-.08-.15-.22-.23h-.04q-.06-.02-.19-.03c-.2-.02-.46-.02-.9-.02z" clipRule="evenodd" />
        <path d="M18.5 8.25c.55 0 1 .45 1 1s-.45 1-1 1h-4.75c-.55 0-1-.45-1-1s.45-1 1-1zM20.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1h-6.75c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

LayoutListAltBold.displayName = 'LayoutListAltBold';

// Triple export pattern
export { LayoutListAltBold, LayoutListAltBold as LayoutListAltBoldIcon, LayoutListAltBold as SiLayoutListAltBold };
export default LayoutListAltBold;
export type { LayoutListAltBoldProps };
