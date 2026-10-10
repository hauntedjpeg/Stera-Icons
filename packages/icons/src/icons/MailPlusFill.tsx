import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailPlusFillProps = Omit<IconBaseProps, 'children'>;

const MailPlusFill = memo(
  forwardRef<SVGSVGElement, MailPlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 13.13c.48 0 .87.39.87.87v2.12H21c.48 0 .88.4.88.88s-.4.87-.88.87h-2.13V20c0 .48-.4.87-.87.88-.49 0-.88-.4-.88-.88v-2.13H15c-.48 0-.87-.4-.87-.87 0-.49.39-.88.87-.88h2.12V14c0-.48.4-.87.88-.87" />
        <path d="M17.33 4.13q.5 0 .91.04c.56.04 1.06.14 1.52.38q.84.43 1.37 1.17.18.25.32.52.09.16.14.33l.08.23.02.07.04.2.02.08.04.22v.07l.01.06.03.26q.06.8.05 2.04V12c0 .48-.4.88-.88.88s-.87-.4-.87-.88V9.37l-5.2 3.75c-1.75 1.26-4.11 1.26-5.86 0l-5.2-3.75v4.83c0 .85 0 1.44.04 1.9s.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04H13c.48 0 .88.39.88.87s-.4.88-.88.88H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04 0-.15.03-.28V7.4q.07-.44.21-.84l.03-.08.1-.23q.59-1.11 1.7-1.7.7-.33 1.52-.37.8-.06 2.04-.04h9.53" />
    </IconBase>
  ))
);

MailPlusFill.displayName = 'MailPlusFill';

// Triple export pattern
export { MailPlusFill, MailPlusFill as MailPlusFillIcon, MailPlusFill as SiMailPlusFill };
export default MailPlusFill;
export type { MailPlusFillProps };
