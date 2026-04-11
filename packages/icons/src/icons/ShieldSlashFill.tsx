import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldSlashFillProps = Omit<IconBaseProps, 'children'>;

const ShieldSlashFill = memo(
  forwardRef<SVGSVGElement, ShieldSlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.16 7.93c.33-.13.7-.06.96.2l10.74 10.74a.9.9 0 0 1-.07 1.3q-.98.78-2.12 1.35l-1.28.64a.9.9 0 0 1-.78 0l-1.28-.64a12.1 12.1 0 0 1-6.7-10.85V8.74c0-.35.2-.67.53-.8M2.38 2.38a.9.9 0 0 1 1.24 0l17 17a.88.88 0 0 1-1.24 1.24l-17-17a.9.9 0 0 1 0-1.24M11.84 1.76a1 1 0 0 1 .47.05l7.5 2.8c.34.14.56.46.56.83v5.23q-.01 2.2-.74 4.2a.87.87 0 0 1-1.44.31L7.65 4.64a.88.88 0 0 1 .31-1.44l3.73-1.4z" />
    </IconBase>
  ))
);

ShieldSlashFill.displayName = 'ShieldSlashFill';

// Triple export pattern (lucide-react style)
export { ShieldSlashFill, ShieldSlashFill as ShieldSlashFillIcon, ShieldSlashFill as SiShieldSlashFill };
export default ShieldSlashFill;
export type { ShieldSlashFillProps };
