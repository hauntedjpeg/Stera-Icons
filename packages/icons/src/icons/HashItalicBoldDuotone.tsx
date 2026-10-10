import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashItalicBoldDuotone = memo(
  forwardRef<SVGSVGElement, HashItalicBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.98 21.22c-.12.54-.66.88-1.2.76s-.88-.66-.76-1.2L7.1 16h2.05zM13.98 21.22c-.12.54-.66.88-1.2.76s-.88-.66-.76-1.2L13.1 16h2.05zM9.58 14H7.53l.9-4h2.04zM15.58 14h-2.05l.9-4h2.04zM10.02 2.78c.12-.54.66-.88 1.2-.76s.88.66.76 1.2L10.9 8H8.86zM16.02 2.78c.12-.54.66-.88 1.2-.76s.88.66.76 1.2L16.9 8h-2.05z" opacity={0.4} />
        <path d="M19 14c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 8c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

HashItalicBoldDuotone.displayName = 'HashItalicBoldDuotone';

// Triple export pattern
export { HashItalicBoldDuotone, HashItalicBoldDuotone as HashItalicBoldDuotoneIcon, HashItalicBoldDuotone as SiHashItalicBoldDuotone };
export default HashItalicBoldDuotone;
export type { HashItalicBoldDuotoneProps };
