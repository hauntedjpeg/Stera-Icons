import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicBoldProps = Omit<IconBaseProps, 'children'>;

const HashItalicBold = memo(
  forwardRef<SVGSVGElement, HashItalicBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.02 2.78c.12-.54.66-.88 1.2-.76s.88.66.76 1.2L16.9 8H21c.55 0 1 .45 1 1s-.45 1-1 1h-4.53l-.89 4H19c.55 0 1 .45 1 1s-.45 1-1 1h-3.86l-1.16 5.22c-.12.54-.66.88-1.2.76s-.88-.66-.76-1.2L13.1 16H9.14l-1.16 5.22c-.12.54-.66.88-1.2.76s-.88-.66-.76-1.2L7.1 16H3c-.55 0-1-.45-1-1s.45-1 1-1h4.53l.89-4H5c-.55 0-1-.45-1-1s.45-1 1-1h3.86l1.16-5.22c.12-.54.66-.88 1.2-.76s.88.66.76 1.2L10.9 8h3.95zM9.58 14h3.95l.89-4h-3.95z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashItalicBold.displayName = 'HashItalicBold';

// Triple export pattern
export { HashItalicBold, HashItalicBold as HashItalicBoldIcon, HashItalicBold as SiHashItalicBold };
export default HashItalicBold;
export type { HashItalicBoldProps };
