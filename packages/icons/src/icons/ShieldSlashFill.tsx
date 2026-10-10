import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashFillProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFill = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.21 7.8c.28-.1.6-.04.82.17l10.88 10.88q.23.23.22.56-.03.33-.28.55-1.03.83-2.23 1.45l-1.29.64c-.2.1-.45.1-.67 0l-1.28-.64c-4.06-2.04-6.63-6.2-6.63-10.74V8.5c0-.3.18-.58.46-.7M2.38 2.38c.34-.34.9-.34 1.24 0l17 17c.34.34.34.9 0 1.24s-.9.34-1.24 0l-17-17c-.34-.34-.34-.9 0-1.24M12 1.88q.33 0 .56.25c1.39 1.56 3.14 2.47 4.57 3q1.09.37 1.78.5l.5.1.14.02h.03l.14.03c.3.1.53.39.53.72v4.17q0 2.28-.81 4.34-.16.37-.55.46-.4.08-.68-.2L8.46 5.52q-.26-.27-.21-.64t.38-.55c.97-.53 1.96-1.24 2.8-2.2l.06-.06q.22-.19.5-.2" />
    </IconBase>
  ))
);

ShieldSlashFill.displayName = 'ShieldSlashFill';

// Triple export pattern
export { ShieldSlashFill, ShieldSlashFill as ShieldSlashFillIcon, ShieldSlashFill as SiShieldSlashFill };
export default ShieldSlashFill;
export type { ShieldSlashFillProps };
