import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailRegularDuotone = memo(
  forwardRef<SVGSVGElement, MailRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.7 7.69q.06.83.05 2.11v4.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.8q-.02-1.44.07-2.33c-.02.27.1.53.31.69l1.12.81v5.23c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V8.97l1.12-.81c.22-.16.34-.43.3-.7z" opacity={.4} />
        <path fillRule="evenodd" d="M16.2 4.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64q.26.53.33 1.15c.04.28-.08.55-.3.7l-6.59 4.77c-1.66 1.2-3.9 1.2-5.56 0L2.63 8.16c-.22-.16-.34-.43-.3-.7q.07-.62.33-1.16c.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-8.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.66.35-.98.99l-.1.24 6.2 4.48c1.13.82 2.67.82 3.8 0l6.2-4.48q-.04-.13-.1-.24-.33-.65-.98-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailRegularDuotone.displayName = 'MailRegularDuotone';

// Triple export pattern
export { MailRegularDuotone, MailRegularDuotone as MailRegularDuotoneIcon, MailRegularDuotone as SiMailRegularDuotone };
export default MailRegularDuotone;
export type { MailRegularDuotoneProps };
