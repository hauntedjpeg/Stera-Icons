import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m17.36 20.67.34.67c-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37L6.98 20c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2z" opacity={.4} />
        <path d="M12 2.25c4.28 0 7.75 3.47 7.75 7.75v6.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64l-.34-.67-.34-.67q.65-.33.98-.98c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V10c0-3.45-2.8-6.25-6.25-6.25S5.75 6.55 5.75 10v6.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98l-.34.67-.34.67c-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V10c0-4.28 3.47-7.75 7.75-7.75" />
    </IconBase>
  ))
);

ArchwayRegularDuotone.displayName = 'ArchwayRegularDuotone';

// Triple export pattern
export { ArchwayRegularDuotone, ArchwayRegularDuotone as ArchwayRegularDuotoneIcon, ArchwayRegularDuotone as SiArchwayRegularDuotone };
export default ArchwayRegularDuotone;
export type { ArchwayRegularDuotoneProps };
