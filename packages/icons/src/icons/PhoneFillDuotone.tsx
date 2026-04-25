import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneFillDuotone = memo(
  forwardRef<SVGSVGElement, PhoneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.82 6.58a6 6 0 0 1 .54 1.24l-.1.1c-.08.08-.39.34-.62.57-.54.54-.68 1.2-.57 1.84.1.58.4 1.12.73 1.56.63.9 1.59 1.76 2.07 2.24s1.35 1.44 2.24 2.07c.44.32.98.63 1.56.73.64.11 1.3-.03 1.84-.57.23-.23.49-.54.57-.63l.1-.1.17.04q.31.09 1.07.51l2.66 1.46q-.24.41-.94 1.08a4.3 4.3 0 0 1-3.03 1.4 6.7 6.7 0 0 1-3.65-1.26 23 23 0 0 1-4.02-3.3l-.46-.46q-1.58-1.6-2.84-3.56A6.7 6.7 0 0 1 3.88 7.9a4.3 4.3 0 0 1 1.4-3.03c.45-.45.8-.79 1.08-.94z" opacity={.4} />
        <path fillRule="evenodd" d="M6.69 2.14c.49.08.86.39 1.1.77l.03.03.01.03 1.52 2.76.21.4q.3.55.44 1a2 2 0 0 1 .04 1.23c-.13.4-.4.67-.58.84-.25.23-.35.3-.58.53-.09.08-.11.15-.09.3q.05.3.43.85c.53.73 1.3 1.44 1.89 2.01.57.58 1.28 1.36 2.01 1.89q.55.39.85.43c.15.02.22 0 .3-.09.23-.23.3-.33.53-.58.17-.18.44-.45.84-.58a2 2 0 0 1 1.24.04q.57.2 1.39.65l2.76 1.52.03.01.03.02c.38.25.69.62.77 1.11.07.46-.08.86-.24 1.16-.3.55-.86 1.1-1.25 1.5a6 6 0 0 1-4.23 1.9 8.4 8.4 0 0 1-4.63-1.54 25 25 0 0 1-4.32-3.54 25 25 0 0 1-3.52-4.3 8.4 8.4 0 0 1-1.54-4.63 6 6 0 0 1 1.9-4.23c.4-.4.95-.95 1.5-1.25.3-.16.7-.3 1.16-.24m-.33 1.78a6 6 0 0 0-1.08.94 4.3 4.3 0 0 0-1.4 3.03 6.7 6.7 0 0 0 1.26 3.65q1.27 1.95 2.84 3.56l.45.46h.01a23 23 0 0 0 4.02 3.3 6.7 6.7 0 0 0 3.65 1.26 4.3 4.3 0 0 0 3.03-1.4q.7-.67.94-1.08l-2.66-1.46a6 6 0 0 0-1.24-.55l-.1.1c-.08.1-.34.4-.57.63-.54.54-1.2.68-1.84.57-.58-.1-1.12-.4-1.56-.73-.9-.63-1.76-1.59-2.24-2.07S8.43 12.78 7.8 11.9a4 4 0 0 1-.73-1.56c-.11-.64.03-1.3.57-1.84.23-.23.54-.49.63-.57l.1-.1-.04-.17a6 6 0 0 0-.5-1.07h-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

PhoneFillDuotone.displayName = 'PhoneFillDuotone';

// Triple export pattern (lucide-react style)
export { PhoneFillDuotone, PhoneFillDuotone as PhoneFillDuotoneIcon, PhoneFillDuotone as SiPhoneFillDuotone };
export default PhoneFillDuotone;
export type { PhoneFillDuotoneProps };
