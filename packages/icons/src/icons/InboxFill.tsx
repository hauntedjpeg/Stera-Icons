import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InboxFillProps = Omit<IconBaseProps, 'children'>;

const InboxFill = memo(
  forwardRef<SVGSVGElement, InboxFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.65 3.63c1.17 0 2.23.71 2.67 1.8l2.48 6.22a1 1 0 0 1 .07.35v4.5A3.9 3.9 0 0 1 18 20.38H6a3.9 3.9 0 0 1-3.87-3.88V12a1 1 0 0 1 .07-.35l2.48-6.22c.44-1.09 1.5-1.8 2.67-1.8zm-9.3 1.75c-.46 0-.87.28-1.04.7l-2.02 5.05H8c.3 0 .59.15.75.41l1.74 2.84h3.02l1.74-2.84.07-.1q.27-.3.68-.31h3.7L17.7 6.08c-.17-.42-.58-.7-1.04-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

InboxFill.displayName = 'InboxFill';

// Triple export pattern (lucide-react style)
export { InboxFill, InboxFill as InboxFillIcon, InboxFill as SiInboxFill };
export default InboxFill;
export type { InboxFillProps };
