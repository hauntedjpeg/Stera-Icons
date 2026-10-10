import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBoldProps = Omit<IconBaseProps, 'children'>;

const CheckBold = memo(
  forwardRef<SVGSVGElement, CheckBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.27 5.32c.38-.4 1-.43 1.41-.05s.43 1 .05 1.41L10.21 17.96l-.34.34c-.12.11-.32.27-.6.35q-.52.15-1.03-.08c-.26-.12-.43-.3-.54-.42l-.29-.39-4.23-6.04c-.32-.46-.2-1.08.25-1.4s1.07-.2 1.39.25l4.1 5.84z" />
    </IconBase>
  ))
);

CheckBold.displayName = 'CheckBold';

// Triple export pattern
export { CheckBold, CheckBold as CheckBoldIcon, CheckBold as SiCheckBold };
export default CheckBold;
export type { CheckBoldProps };
