import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesPlusBoldProps = Omit<IconBaseProps, 'children'>;

const ShapesPlusBold = memo(
  forwardRef<SVGSVGElement, ShapesPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.6 13q.61 0 1.07.02t.96.25q.73.38 1.1 1.1.22.49.25.96T11 16.4v1.7q0 .61-.02 1.07t-.25.96a2.5 2.5 0 0 1-1.1 1.1q-.49.22-.96.25t-1.07.02H5.9q-.61 0-1.07-.02a3 3 0 0 1-.96-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.96q-.02-.46-.02-1.07v-1.7q0-.61.02-1.07t.25-.96a2.5 2.5 0 0 1 1.1-1.1q.49-.22.96-.25T5.9 13zm-1.7 2a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19c-.02.2-.02.46-.02.9v1.7a13 13 0 0 0 .04 1.09l.01.03a.5.5 0 0 0 .23.23h.03q.06.03.19.03c.2.02.46.02.9.02h1.7a13 13 0 0 0 1.09-.04l.03-.01a.5.5 0 0 0 .23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-1.7a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.02-.19-.03C8.3 15 8.04 15 7.6 15z" clipRule="evenodd" />
        <path d="M17.25 13a1 1 0 0 1 1 1v2.25h2.25a1 1 0 1 1 0 2h-2.25v2.25a1 1 0 0 1-2 0v-2.25H14a1 1 0 0 1 0-2h2.25V14a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M6.12 2.22a1 1 0 0 1 1.34.07l3.75 3.75a1 1 0 0 1 0 1.42L7.46 11.2a1 1 0 0 1-1.42 0L2.3 7.46a1 1 0 0 1 0-1.42L6.04 2.3zm-1.7 4.53 2.33 2.34 2.34-2.34-2.34-2.34zM17.25 2.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5m0 2a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesPlusBold.displayName = 'ShapesPlusBold';

// Triple export pattern (lucide-react style)
export { ShapesPlusBold, ShapesPlusBold as ShapesPlusBoldIcon, ShapesPlusBold as SiShapesPlusBold };
export default ShapesPlusBold;
export type { ShapesPlusBoldProps };
