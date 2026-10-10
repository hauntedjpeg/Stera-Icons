import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayRegularProps = Omit<IconBaseProps, 'children'>;

const ArchwayRegular = memo(
  forwardRef<SVGSVGElement, ArchwayRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c4.28 0 7.75 3.47 7.75 7.75v6.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V10c0-4.28 3.47-7.75 7.75-7.75m0 1.5c-3.45 0-6.25 2.8-6.25 6.25v6.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V10c0-3.45-2.8-6.25-6.25-6.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchwayRegular.displayName = 'ArchwayRegular';

// Triple export pattern
export { ArchwayRegular, ArchwayRegular as ArchwayRegularIcon, ArchwayRegular as SiArchwayRegular };
export default ArchwayRegular;
export type { ArchwayRegularProps };
