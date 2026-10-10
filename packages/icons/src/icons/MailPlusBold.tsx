import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailPlusBoldProps = Omit<IconBaseProps, 'children'>;

const MailPlusBold = memo(
  forwardRef<SVGSVGElement, MailPlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 13c.55 0 1 .45 1 1v2h2c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-2v2c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-2h-2c-.55 0-1-.45-1-1 0-.56.45-1 1-1h2v-2c0-.55.44-1 1-1" />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05V12c0 .55-.45 1-1 1s-1-.45-1-1V9.46l-5.07 3.66c-1.75 1.26-4.11 1.26-5.86 0L4 9.46v4.74c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04H13c.55 0 1 .45 1 1s-.45 1-1 1H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87l-.02.04 6.04 4.37c1.05.76 2.47.76 3.52 0l6.04-4.37-.02-.04q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailPlusBold.displayName = 'MailPlusBold';

// Triple export pattern
export { MailPlusBold, MailPlusBold as MailPlusBoldIcon, MailPlusBold as SiMailPlusBold };
export default MailPlusBold;
export type { MailPlusBoldProps };
