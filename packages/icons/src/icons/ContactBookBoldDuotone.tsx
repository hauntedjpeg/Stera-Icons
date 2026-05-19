import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04h-4.4q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 3.8 3.8 0 0 1-2.11-3.06H3a1 1 0 1 1 0-2h2V13H3a1 1 0 1 1 0-2h2V8.5H3a1 1 0 1 1 0-2h2.07a3.8 3.8 0 0 1 3.68-3.46Q9.57 3 10.8 3zm-4.4 2c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 7 8.8v6.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 5 16.06 5 15.2 5z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13 7.5a3.5 3.5 0 0 1 2.73 5.7c1 .54 1.78 1.39 2.2 2.43a1 1 0 0 1-1.86.74c-.41-1.03-1.59-1.87-3.07-1.87s-2.66.84-3.07 1.87a1 1 0 0 1-1.86-.74 5 5 0 0 1 2.2-2.44A3.5 3.5 0 0 1 13 7.5m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

ContactBookBoldDuotone.displayName = 'ContactBookBoldDuotone';

// Triple export pattern (lucide-react style)
export { ContactBookBoldDuotone, ContactBookBoldDuotone as ContactBookBoldDuotoneIcon, ContactBookBoldDuotone as SiContactBookBoldDuotone };
export default ContactBookBoldDuotone;
export type { ContactBookBoldDuotoneProps };
