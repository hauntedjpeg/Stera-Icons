import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwordFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwordFillDuotone = memo(
  forwardRef<SVGSVGElement, SwordFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.38 3.38c.22-.22.53-.3.83-.23l3.46.87q.24.05.4.23l8.29 8.27-3.84 3.84-8.27-8.28a1 1 0 0 1-.2-.3l-.03-.1-.87-3.47a.9.9 0 0 1 .23-.83" opacity={.4} />
        <path d="M17.47 11.41a.88.88 0 0 1 1.24 1.24l-1.48 1.48v1.86L19 17.76l1.06.35q.24.08.42.26l.25.24a1.1 1.1 0 0 1 0 1.55l-.56.56-.09.07c-.4.33-.97.33-1.37 0l-.09-.07-.24-.25a1 1 0 0 1-.26-.42l-.36-1.06L16 17.23h-1.87l-1.48 1.48a.88.88 0 0 1-1.24-1.24z" />
    </IconBase>
  ))
);

SwordFillDuotone.displayName = 'SwordFillDuotone';

// Triple export pattern (lucide-react style)
export { SwordFillDuotone, SwordFillDuotone as SwordFillDuotoneIcon, SwordFillDuotone as SiSwordFillDuotone };
export default SwordFillDuotone;
export type { SwordFillDuotoneProps };
