import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyHBoldProps = Omit<IconBaseProps, 'children'>;

const KeyHBold = memo(
  forwardRef<SVGSVGElement, KeyHBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S17 12.83 17 12s.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M17 6c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.22 0-4.16-1.2-5.2-3H9.91l-1.2 1.2c-.2.21-.5.32-.78.3s-.56-.17-.73-.4l-.8-1.08-.7.69c-.38.39-1.02.39-1.4 0l-3-3c-.4-.4-.4-1.03 0-1.42l2-2q.28-.28.7-.29h7.8c1.04-1.8 2.98-3 5.2-3m0 2c-1.64 0-3.05.99-3.67 2.4-.16.36-.52.6-.91.6h-8l-1 1L5 13.59l.8-.8q.32-.3.77-.29c.29.02.56.17.73.4l.8 1.08.7-.69q.28-.28.7-.29h2.92c.4 0 .75.24.91.6.62 1.41 2.03 2.4 3.67 2.4 2.2 0 4-1.8 4-4s-1.8-4-4-4" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyHBold.displayName = 'KeyHBold';

// Triple export pattern
export { KeyHBold, KeyHBold as KeyHBoldIcon, KeyHBold as SiKeyHBold };
export default KeyHBold;
export type { KeyHBoldProps };
