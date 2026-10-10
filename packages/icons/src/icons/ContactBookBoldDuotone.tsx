import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 3q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v6.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04h-4.4q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74q-.3-.62-.37-1.32H3c-.55 0-1-.45-1-1s.45-1 1-1h2V13H3c-.55 0-1-.45-1-1s.45-1 1-1h2V8.5H3c-.55 0-1-.45-1-1s.45-1 1-1h2.07q.07-.7.37-1.32c.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q9.57 3 10.8 3zm-4.4 2c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C7 7.36 7 7.94 7 8.8v6.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C16.64 5 16.06 5 15.2 5z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13 7.5c1.93 0 3.5 1.57 3.5 3.5 0 .83-.3 1.6-.77 2.2 1 .54 1.78 1.39 2.2 2.43.2.51-.05 1.1-.56 1.3s-1.1-.05-1.3-.56c-.41-1.03-1.59-1.87-3.07-1.87-1.49 0-2.66.84-3.07 1.87-.2.51-.79.76-1.3.56s-.76-.79-.56-1.3c.42-1.04 1.2-1.89 2.2-2.44-.48-.6-.77-1.36-.77-2.19 0-1.93 1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ContactBookBoldDuotone.displayName = 'ContactBookBoldDuotone';

// Triple export pattern
export { ContactBookBoldDuotone, ContactBookBoldDuotone as ContactBookBoldDuotoneIcon, ContactBookBoldDuotone as SiContactBookBoldDuotone };
export default ContactBookBoldDuotone;
export type { ContactBookBoldDuotoneProps };
