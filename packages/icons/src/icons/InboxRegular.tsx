import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InboxRegularProps = Omit<IconBaseProps, 'children'>;

const InboxRegular = memo(
  forwardRef<SVGSVGElement, InboxRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.65 3.75c1.12 0 2.13.68 2.55 1.73l2.49 6.22v.02l.02.06q.03.1.04.22v4.5A3.75 3.75 0 0 1 18 20.25H6a3.75 3.75 0 0 1-3.75-3.75V12q0-.12.04-.22l.01-.06.01-.02 2.5-6.22a2.75 2.75 0 0 1 2.54-1.73zM3.75 14.7c0 .85 0 1.45.04 1.9.03.45.1.7.2.9l.01.03q.34.64.98.97c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.64-.34.98-.98l.01-.03c.1-.2.17-.45.2-.9.04-.45.04-1.05.04-1.9v-1.95h-3.83l-1.78 2.9A.8.8 0 0 1 14 16h-4a.8.8 0 0 1-.64-.36l-1.78-2.89H3.75zm3.6-9.45c-.5 0-.97.31-1.16.79l-2.08 5.21H8q.41 0 .64.36l1.78 2.89h3.16l1.78-2.9.06-.07a.8.8 0 0 1 .58-.28h3.9l-2.1-5.21a1.3 1.3 0 0 0-1.15-.79z" clipRule="evenodd" />
    </IconBase>
  ))
);

InboxRegular.displayName = 'InboxRegular';

// Triple export pattern (lucide-react style)
export { InboxRegular, InboxRegular as InboxRegularIcon, InboxRegular as SiInboxRegular };
export default InboxRegular;
export type { InboxRegularProps };
