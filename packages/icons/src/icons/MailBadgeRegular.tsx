import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailBadgeRegularProps = Omit<IconBaseProps, 'children'>;

const MailBadgeRegular = memo(
  forwardRef<SVGSVGElement, MailBadgeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.5 4.25c.41 0 .75.34.75.75s-.34.75-.75.75H7.8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99l-.1.24 6.2 4.48c1.13.82 2.67.82 3.8 0l3.53-2.55c.34-.24.8-.16 1.05.17.24.34.16.8-.17 1.05l-3.53 2.55c-1.66 1.2-3.9 1.2-5.56 0L3.75 8.97v5.23c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-3.7c0-.41.34-.75.75-.75s.75.34.75.75v3.7q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.8c0-.98 0-1.75.08-2.35q.07-.63.33-1.15c.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04z" />
        <path d="M20.5 2.75c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75-2.75-1.23-2.75-2.75 1.23-2.75 2.75-2.75" />
    </IconBase>
  ))
);

MailBadgeRegular.displayName = 'MailBadgeRegular';

// Triple export pattern
export { MailBadgeRegular, MailBadgeRegular as MailBadgeRegularIcon, MailBadgeRegular as SiMailBadgeRegular };
export default MailBadgeRegular;
export type { MailBadgeRegularProps };
