import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusFillProps = Omit<IconBaseProps, 'children'>;

const PlusFill = memo(
  forwardRef<SVGSVGElement, PlusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.75c.69 0 1.25.56 1.25 1.25v6.75H20a1.25 1.25 0 1 1 0 2.5h-6.75V20a1.25 1.25 0 1 1-2.5 0v-6.75H4a1.25 1.25 0 1 1 0-2.5h6.75V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

PlusFill.displayName = 'PlusFill';

// Triple export pattern (lucide-react style)
export { PlusFill, PlusFill as PlusFillIcon, PlusFill as SiPlusFill };
export default PlusFill;
export type { PlusFillProps };
