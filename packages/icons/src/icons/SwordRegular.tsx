import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwordRegularProps = Omit<IconBaseProps, 'children'>;

const SwordRegular = memo(
  forwardRef<SVGSVGElement, SwordRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="sword" {...props}>
      <path fillRule="evenodd" d="M3.72 3.72a.8.8 0 0 1 .71-.2l3.46.87q.2.05.35.2l8.12 8.11 1.2-1.2a.75.75 0 1 1 1.06 1.06l-1.51 1.51v1.98l1.81 1.81 1.09.36q.21.07.37.24l.25.24c.37.38.37 1 0 1.37l-.56.56-.07.06a1 1 0 0 1-1.22 0l-.08-.06-.24-.25a1 1 0 0 1-.2-.27l-.04-.1-.36-1.09-1.81-1.81h-1.98l-1.5 1.5a.75.75 0 0 1-1.07-1.05l1.2-1.2-8.12-8.12a1 1 0 0 1-.16-.25l-.03-.1-.87-3.46a.8.8 0 0 1 .2-.71m2.07 3.6 7.97 7.98 1.54-1.54L7.33 5.8l-2.05-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwordRegular.displayName = 'SwordRegular';

// Triple export pattern (lucide-react style)
export { SwordRegular, SwordRegular as SwordRegularIcon, SwordRegular as SiSwordRegular };
export default SwordRegular;
export type { SwordRegularProps };
