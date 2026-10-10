import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckRegularDuotone = memo(
  forwardRef<SVGSVGElement, CheckRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m9.34 18.51-.1.1q-.12.08-.24.1.2-.05.34-.2M3.57 10.53c.34-.24.8-.16 1.04.18l4.27 6.1-.63.68c-.24.26-.26.65-.07.94l-4.8-6.86c-.23-.34-.15-.8.2-1.04" opacity={0.4} />
        <path d="M19.45 5.49c.28-.3.76-.32 1.06-.04s.32.76.04 1.06l-11.2 12c-.28.3-.76.32-1.06.04s-.32-.76-.04-1.06z" />
    </IconBase>
  ))
);

CheckRegularDuotone.displayName = 'CheckRegularDuotone';

// Triple export pattern
export { CheckRegularDuotone, CheckRegularDuotone as CheckRegularDuotoneIcon, CheckRegularDuotone as SiCheckRegularDuotone };
export default CheckRegularDuotone;
export type { CheckRegularDuotoneProps };
