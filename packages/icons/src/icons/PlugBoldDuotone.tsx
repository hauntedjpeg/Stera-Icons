import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlugBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlugBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.94 10.6c.88-.83 2.26-.81 3.12.05l5.3 5.3c.85.85.88 2.23.05 3.11l-.14.16-.03.02c-2.34 2.35-6.14 2.35-8.48 0-2.35-2.34-2.35-6.14 0-8.48l.02-.03zm1.7 1.46c-.09-.1-.24-.1-.34 0l-.13.11c-1.56 1.56-1.56 4.1 0 5.66s4.1 1.56 5.66 0l.12-.13c.09-.1.08-.25-.01-.35z" clipRule="evenodd" opacity={0.4} />
        <path d="M21.3 1.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L19.9 5.53q-.29-.4-.65-.76t-.76-.65z" opacity={0.4} />
        <path d="M4.1 18.48q.3.4.66.76t.76.65l-2.81 2.82c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42z" />
        <path fillRule="evenodd" d="M10.76 4.76c2.34-2.35 6.14-2.35 8.48 0 2.35 2.34 2.35 6.14 0 8.48l-.02.03-.16.14c-.88.83-2.26.8-3.12-.06l-.44-.44-.8.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l.79-.79-1.6-1.59-.78.8c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42l.8-.79-.44-.44c-.86-.86-.89-2.24-.06-3.12l.14-.16zm7.07 1.41c-1.56-1.56-4.1-1.56-5.66 0l-.12.13c-.09.1-.08.25.01.35l4.14 4.14.01.01 1.14 1.14c.1.1.25.1.35 0l.13-.11c1.56-1.56 1.56-4.1 0-5.66" clipRule="evenodd" />
    </IconBase>
  ))
);

PlugBoldDuotone.displayName = 'PlugBoldDuotone';

// Triple export pattern
export { PlugBoldDuotone, PlugBoldDuotone as PlugBoldDuotoneIcon, PlugBoldDuotone as SiPlugBoldDuotone };
export default PlugBoldDuotone;
export type { PlugBoldDuotoneProps };
