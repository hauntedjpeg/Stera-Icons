import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwordFillProps = Omit<IconBaseProps, 'children'>;

const SwordFill = memo(
  forwardRef<SVGSVGElement, SwordFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sword-fill" {...props}>
      <path d="M3.63 3.63c.22-.22.53-.3.83-.23l3.46.87q.25.05.4.23l8.04 8.03 1.1-1.11a.87.87 0 0 1 1.25 1.23l-1.48 1.48V16L19 17.76l1.06.35q.24.08.42.26l.25.24a1.1 1.1 0 0 1 0 1.55l-.56.56-.09.07c-.4.33-.97.33-1.37 0l-.09-.07-.24-.25a1 1 0 0 1-.26-.42l-.36-1.06L16 17.23h-1.87l-1.48 1.48a.88.88 0 0 1-1.24-1.24l1.12-1.11L4.5 8.33a1 1 0 0 1-.2-.3l-.03-.1-.87-3.47a.9.9 0 0 1 .23-.83" />
    </IconBase>
  ))
);

SwordFill.displayName = 'SwordFill';

// Triple export pattern (lucide-react style)
export { SwordFill, SwordFill as SwordFillIcon, SwordFill as SiSwordFill };
export default SwordFill;
export type { SwordFillProps };
