import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugBoldProps = Omit<IconBaseProps, 'children'>;

const PlugBold = memo(
  forwardRef<SVGSVGElement, PlugBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.94 10.6c.88-.83 2.26-.81 3.12.05l5.3 5.29c.85.86.87 2.24.05 3.12l-.14.16-.03.02c-2.1 2.1-5.37 2.32-7.72.65l-2.81 2.82c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42l2.82-2.81c-1.67-2.35-1.45-5.62.65-7.72l.02-.03zm1.7 1.46c-.09-.1-.24-.1-.34 0l-.13.11c-1.56 1.56-1.56 4.1 0 5.66s4.1 1.56 5.66 0l.12-.13c.09-.1.08-.25-.01-.35zM21.3 1.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L19.9 5.53c1.67 2.35 1.45 5.62-.65 7.72l-.02.03-.16.14c-.88.83-2.26.8-3.12-.06l-.44-.44-.8.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l.79-.79-1.6-1.59-.78.8c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42l.8-.79-.44-.44c-.86-.86-.89-2.24-.06-3.12l.14-.16.03-.02c2.1-2.1 5.37-2.32 7.71-.65zm-3.47 4.87c-1.56-1.56-4.1-1.56-5.66 0l-.12.13c-.09.1-.08.25.01.35l4.14 4.14.01.01 1.14 1.14c.1.1.25.1.35 0l.13-.11c1.56-1.56 1.56-4.1 0-5.66" clipRule="evenodd" />
    </IconBase>
  ))
);

PlugBold.displayName = 'PlugBold';

// Triple export pattern
export { PlugBold, PlugBold as PlugBoldIcon, PlugBold as SiPlugBold };
export default PlugBold;
export type { PlugBoldProps };
