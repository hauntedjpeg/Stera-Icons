import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04h-4.4q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.45H3a.75.75 0 0 1 0-1.5h2.25v-3H3a.75.75 0 0 1 0-1.5h2.25v-3H3a.75.75 0 1 1 0-1.5h2.3q.04-.8.36-1.45c.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-4.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v6.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V8.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13 7.75a3.25 3.25 0 0 1 2.32 5.52 4.7 4.7 0 0 1 2.38 2.45.75.75 0 1 1-1.4.56 3.5 3.5 0 0 0-3.3-2.03 3.5 3.5 0 0 0-3.3 2.03.75.75 0 1 1-1.4-.56 4.7 4.7 0 0 1 2.38-2.45A3.24 3.24 0 0 1 13 7.75m0 1.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ContactBookRegularDuotone.displayName = 'ContactBookRegularDuotone';

// Triple export pattern (lucide-react style)
export { ContactBookRegularDuotone, ContactBookRegularDuotone as ContactBookRegularDuotoneIcon, ContactBookRegularDuotone as SiContactBookRegularDuotone };
export default ContactBookRegularDuotone;
export type { ContactBookRegularDuotoneProps };
