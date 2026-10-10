import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailXFillDuotone = memo(
  forwardRef<SVGSVGElement, MailXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.33 4.13q.5 0 .91.04c.56.04 1.06.14 1.52.38q.84.43 1.37 1.17.18.25.32.52.09.16.14.33l.08.23.02.07.04.2.02.08.04.22v.07l.01.06.03.26q.06.8.05 2.04v1.7c0 .48-.4.88-.88.88s-.87-.4-.87-.88V9.21l-5.28 3.8-.16.12-.33.2c-.73.4-1.55.61-2.36.61-1 0-2-.3-2.85-.92l-5.27-3.8v4.98c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h4.7c.48 0 .88.39.88.87s-.4.88-.88.88H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04 0-.15.03-.28V7.4q.07-.44.21-.84l.03-.08.1-.23q.59-1.11 1.7-1.7.7-.33 1.52-.37.8-.06 2.04-.04h9.53" opacity={.4} />
        <path d="M20.38 14.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.88 1.88 1.88 1.88c.34.34.34.9 0 1.24s-.9.34-1.24 0l-1.88-1.89-1.88 1.89c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l1.88-1.88-1.88-1.88c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l1.88 1.88z" />
    </IconBase>
  ))
);

MailXFillDuotone.displayName = 'MailXFillDuotone';

// Triple export pattern
export { MailXFillDuotone, MailXFillDuotone as MailXFillDuotoneIcon, MailXFillDuotone as SiMailXFillDuotone };
export default MailXFillDuotone;
export type { MailXFillDuotoneProps };
