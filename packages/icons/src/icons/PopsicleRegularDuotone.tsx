import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PopsicleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PopsicleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.75 20c0 1.52-1.23 2.75-2.75 2.75S9.25 21.52 9.25 20v-3.25h1.5V20c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-3.25h1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.25c3.73 0 6.75 3.02 6.75 6.75v6.8c0 1.08-.87 1.95-1.95 1.95H7.2c-1.08 0-1.95-.87-1.95-1.95V8c0-3.73 3.02-6.75 6.75-6.75m0 1.5C9.1 2.75 6.75 5.1 6.75 8v6.8c0 .25.2.45.45.45h9.6c.25 0 .45-.2.45-.45V8c0-2.9-2.35-5.25-5.25-5.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleRegularDuotone.displayName = 'PopsicleRegularDuotone';

// Triple export pattern
export { PopsicleRegularDuotone, PopsicleRegularDuotone as PopsicleRegularDuotoneIcon, PopsicleRegularDuotone as SiPopsicleRegularDuotone };
export default PopsicleRegularDuotone;
export type { PopsicleRegularDuotoneProps };
