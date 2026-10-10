import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckRegularProps = Omit<IconBaseProps, 'children'>;

const CheckRegular = memo(
  forwardRef<SVGSVGElement, CheckRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.45 5.49c.29-.3.76-.32 1.06-.04s.32.76.04 1.06L10.02 17.8l-.32.33q-.15.17-.5.29-.44.12-.86-.06c-.21-.1-.35-.25-.45-.36q-.13-.16-.27-.37l-4.23-6.05c-.24-.34-.16-.8.18-1.04s.8-.16 1.04.18l4.24 6.05.03.05.05-.04z" />
    </IconBase>
  ))
);

CheckRegular.displayName = 'CheckRegular';

// Triple export pattern
export { CheckRegular, CheckRegular as CheckRegularIcon, CheckRegular as SiCheckRegular };
export default CheckRegular;
export type { CheckRegularProps };
