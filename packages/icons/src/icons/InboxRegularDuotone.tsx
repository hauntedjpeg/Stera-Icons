import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type InboxRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const InboxRegularDuotone = memo(
  forwardRef<SVGSVGElement, InboxRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m2.29 11.78.01-.06zM21.7 11.72l.01.06q0-.04-.02-.07zM16.65 3.75c1.12 0 2.13.68 2.55 1.73l2.49 6.22a.8.8 0 0 0-.69-.45h-1.1l-2.1-5.21a1.3 1.3 0 0 0-1.15-.79h-9.3c-.5 0-.97.31-1.16.79l-2.08 5.21H3c-.3 0-.57.19-.69.45l2.5-6.22a2.75 2.75 0 0 1 2.54-1.73z" opacity={0.4} />
        <path fillRule="evenodd" d="M8 11.25q.41 0 .64.36l1.78 2.89h3.16l1.78-2.9.06-.07a.8.8 0 0 1 .58-.28h5c.41 0 .75.34.75.75v2.7q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V12c0-.41.34-.75.75-.75zM3.75 14.7c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-1.95h-3.83l-1.78 2.9A.8.8 0 0 1 14 16h-4a.8.8 0 0 1-.64-.36l-1.78-2.89H3.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

InboxRegularDuotone.displayName = 'InboxRegularDuotone';

// Triple export pattern (lucide-react style)
export { InboxRegularDuotone, InboxRegularDuotone as InboxRegularDuotoneIcon, InboxRegularDuotone as SiInboxRegularDuotone };
export default InboxRegularDuotone;
export type { InboxRegularDuotoneProps };
