import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InboxFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const InboxFillDuotone = memo(
  forwardRef<SVGSVGElement, InboxFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.65 5.38c.46 0 .87.28 1.04.7l2.02 5.05H16q-.42.01-.68.32l-.07.1-1.74 2.82H10.5l-1.74-2.83c-.16-.26-.45-.41-.75-.41H4.3L6.3 6.08c.17-.42.58-.7 1.04-.7z" opacity={.4} />
        <path fillRule="evenodd" d="M16.65 3.63c1.17 0 2.23.71 2.67 1.8l2.48 6.22.06.18.02.17v4.5c0 2.14-1.74 3.88-3.88 3.88H6c-2.14 0-3.87-1.74-3.87-3.88V12l.01-.17.06-.18 2.48-6.22c.44-1.09 1.5-1.8 2.67-1.8zm-9.3 1.75c-.46 0-.87.28-1.04.7l-2.02 5.05H8c.3 0 .59.15.75.41l1.74 2.84h3.02l1.74-2.84.07-.1q.27-.3.68-.31h3.7L17.7 6.08c-.17-.42-.58-.7-1.04-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

InboxFillDuotone.displayName = 'InboxFillDuotone';

// Triple export pattern
export { InboxFillDuotone, InboxFillDuotone as InboxFillDuotoneIcon, InboxFillDuotone as SiInboxFillDuotone };
export default InboxFillDuotone;
export type { InboxFillDuotoneProps };
