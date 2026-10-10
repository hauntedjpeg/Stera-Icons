import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShapesPlusBoldProps = Omit<IconBaseProps, 'children'>;

const ShapesPlusBold = memo(
  forwardRef<SVGSVGElement, ShapesPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.6 13q.61 0 1.07.02t.96.25q.72.38 1.1 1.1.22.49.25.96T11 16.4v1.7q0 .61-.02 1.07t-.25.96q-.37.73-1.1 1.1-.49.22-.96.25t-1.07.02H5.9q-.61 0-1.07-.02t-.96-.25q-.73-.37-1.1-1.1-.22-.49-.25-.96T2.5 18.1v-1.7q0-.61.02-1.07t.25-.96q.37-.72 1.1-1.1.49-.22.96-.25T5.9 13zm-1.7 2c-.44 0-.7 0-.9.02q-.14 0-.19.02l-.03.01q-.15.08-.23.22v.04q-.02.06-.03.19c-.02.2-.02.46-.02.9v1.7c0 .44 0 .7.02.9q0 .14.02.19l.01.03q.08.15.22.23h.04q.06.03.19.03c.2.02.46.02.9.02h1.7c.44 0 .7 0 .9-.02q.14 0 .19-.02l.03-.01q.15-.08.23-.22v-.04q.02-.06.03-.19c.02-.2.02-.46.02-.9v-1.7c0-.44 0-.7-.02-.9q0-.14-.02-.19l-.01-.03q-.08-.15-.22-.23h-.04q-.06-.02-.19-.03C8.3 15 8.04 15 7.6 15z" clipRule="evenodd" />
        <path d="M17.25 13c.55 0 1 .45 1 1v2.25h2.25c.55 0 1 .45 1 1s-.45 1-1 1h-2.25v2.25c0 .55-.45 1-1 1s-1-.45-1-1v-2.25H14c-.55 0-1-.45-1-1s.45-1 1-1h2.25V14c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M6.12 2.22c.4-.32.97-.3 1.34.07l3.75 3.75c.39.4.39 1.03 0 1.42L7.46 11.2c-.4.39-1.03.39-1.42 0L2.3 7.46c-.39-.4-.39-1.03 0-1.42L6.04 2.3zm-1.7 4.53 2.33 2.34 2.34-2.34-2.34-2.34zM17.25 2.5c2.35 0 4.25 1.9 4.25 4.25S19.6 11 17.25 11 13 9.1 13 6.75s1.9-4.25 4.25-4.25m0 2c-1.24 0-2.25 1-2.25 2.25C15 7.99 16 9 17.25 9c1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ShapesPlusBold.displayName = 'ShapesPlusBold';

// Triple export pattern
export { ShapesPlusBold, ShapesPlusBold as ShapesPlusBoldIcon, ShapesPlusBold as SiShapesPlusBold };
export default ShapesPlusBold;
export type { ShapesPlusBoldProps };
