import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleRegularProps = Omit<IconBaseProps, 'children'>;

const PopsicleRegular = memo(
  forwardRef<SVGSVGElement, PopsicleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c3.73 0 6.75 3.02 6.75 6.75v6.8c0 1.08-.87 1.95-1.95 1.95h-2.05V20c0 1.52-1.23 2.75-2.75 2.75S9.25 21.52 9.25 20v-3.25H7.2c-1.08 0-1.95-.87-1.95-1.95V8c0-3.73 3.02-6.75 6.75-6.75M10.75 20c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-3.25h-2.5zM12 2.75C9.1 2.75 6.75 5.1 6.75 8v6.8c0 .25.2.45.45.45h9.6c.25 0 .45-.2.45-.45V8c0-2.9-2.35-5.25-5.25-5.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleRegular.displayName = 'PopsicleRegular';

// Triple export pattern
export { PopsicleRegular, PopsicleRegular as PopsicleRegularIcon, PopsicleRegular as SiPopsicleRegular };
export default PopsicleRegular;
export type { PopsicleRegularProps };
