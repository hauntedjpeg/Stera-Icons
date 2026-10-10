import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeBoldProps = Omit<IconBaseProps, 'children'>;

const MicroscopeBold = memo(
  forwardRef<SVGSVGElement, MicroscopeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16 1.5c2.2 0 4 1.8 4 4v4.75c0 1.16-.88 2.11-2 2.24v.01c0 1.1-.9 2-2 2s-2-.9-2-2v-.01c-1.12-.13-2-1.08-2-2.24V7.5h-1c-3.31 0-6 2.69-6 6s2.69 6 6 6h9c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1h1.71C4.05 18.03 3 15.89 3 13.5c0-4.42 3.58-8 8-8h1c0-2.2 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2v4.75q.02.23.25.25h3.5q.23-.02.25-.25V5.5c0-1.1-.9-2-2-2" clipRule="evenodd" />
        <path d="M19 16.5c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

MicroscopeBold.displayName = 'MicroscopeBold';

// Triple export pattern
export { MicroscopeBold, MicroscopeBold as MicroscopeBoldIcon, MicroscopeBold as SiMicroscopeBold };
export default MicroscopeBold;
export type { MicroscopeBoldProps };
