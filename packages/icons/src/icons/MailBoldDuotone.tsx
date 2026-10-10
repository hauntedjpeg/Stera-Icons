import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailBoldDuotone = memo(
  forwardRef<SVGSVGElement, MailBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.08 7.42c-.05.37.1.73.4.94L4 9.46v4.74c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V9.46l1.52-1.1c.29-.21.44-.56.4-.92q.1.92.08 2.36v4.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2V9.8c0-.98 0-1.76.08-2.38" opacity={.4} />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74q.29.59.36 1.24c.05.37-.1.73-.4.94l-6.6 4.76c-1.74 1.26-4.1 1.26-5.85 0L2.48 8.36c-.3-.21-.45-.57-.4-.94q.07-.65.36-1.24c.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87l-.02.04 6.04 4.37c1.05.76 2.47.76 3.52 0l6.04-4.37-.02-.04q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailBoldDuotone.displayName = 'MailBoldDuotone';

// Triple export pattern
export { MailBoldDuotone, MailBoldDuotone as MailBoldDuotoneIcon, MailBoldDuotone as SiMailBoldDuotone };
export default MailBoldDuotone;
export type { MailBoldDuotoneProps };
