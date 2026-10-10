import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookRegularProps = Omit<IconBaseProps, 'children'>;

const ContactBookRegular = memo(
  forwardRef<SVGSVGElement, ContactBookRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 7.75c1.8 0 3.25 1.46 3.25 3.25 0 .88-.35 1.68-.93 2.27 1.09.51 1.95 1.37 2.38 2.45.15.39-.04.82-.42.98-.39.15-.82-.04-.98-.42-.45-1.14-1.72-2.03-3.3-2.03s-2.85.89-3.3 2.03c-.16.38-.6.57-.98.42-.38-.16-.57-.6-.42-.98.43-1.08 1.3-1.94 2.38-2.45-.58-.59-.93-1.39-.93-2.27 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
        <path fillRule="evenodd" d="M15.2 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04h-4.4q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64q-.31-.65-.37-1.45H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-3H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-3H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.3q.04-.8.36-1.45c.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-4.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v6.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V8.8c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContactBookRegular.displayName = 'ContactBookRegular';

// Triple export pattern
export { ContactBookRegular, ContactBookRegular as ContactBookRegularIcon, ContactBookRegular as SiContactBookRegular };
export default ContactBookRegular;
export type { ContactBookRegularProps };
