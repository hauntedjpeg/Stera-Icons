import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ClipboardTextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ClipboardTextBoldDuotone = memo(
  forwardRef<SVGSVGElement, ClipboardTextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.75 3C19.55 3 21 4.46 21 6.25v13.5c0 1.8-1.46 3.25-3.25 3.25H6.25C4.45 23 3 21.54 3 19.75V6.25C3 4.45 4.46 3 6.25 3h.76L7 3.25v1.5l.01.25h-.76C5.56 5 5 5.56 5 6.25v13.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V6.25C19 5.56 18.44 5 17.75 5h-.76l.01-.25v-1.5L16.99 3z" opacity={.4} />
        <path d="M15.5 13.75c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1zM15.5 10.25c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M14.75 1C15.99 1 17 2 17 3.25v1.5C17 5.99 16 7 14.75 7h-5.5C8.01 7 7 6 7 4.75v-1.5C7 2.01 8 1 9.25 1zm-5.5 2c-.14 0-.25.11-.25.25v1.5c0 .14.11.25.25.25h5.5c.14 0 .25-.11.25-.25v-1.5c0-.14-.11-.25-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ClipboardTextBoldDuotone.displayName = 'ClipboardTextBoldDuotone';

// Triple export pattern
export { ClipboardTextBoldDuotone, ClipboardTextBoldDuotone as ClipboardTextBoldDuotoneIcon, ClipboardTextBoldDuotone as SiClipboardTextBoldDuotone };
export default ClipboardTextBoldDuotone;
export type { ClipboardTextBoldDuotoneProps };
