import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleRegularProps = Omit<IconBaseProps, 'children'>;

const PopsicleRegular = memo(
  forwardRef<SVGSVGElement, PopsicleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25A6.75 6.75 0 0 1 18.75 8v6.8c0 1.08-.87 1.95-1.95 1.95h-2.05V20a2.75 2.75 0 1 1-5.5 0v-3.25H7.2a1.95 1.95 0 0 1-1.95-1.95V8A6.75 6.75 0 0 1 12 1.25M10.75 20a1.25 1.25 0 1 0 2.5 0v-3.25h-2.5zM12 2.75A5.25 5.25 0 0 0 6.75 8v6.8c0 .25.2.45.45.45h9.6c.25 0 .45-.2.45-.45V8c0-2.9-2.35-5.25-5.25-5.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleRegular.displayName = 'PopsicleRegular';

// Triple export pattern (lucide-react style)
export { PopsicleRegular, PopsicleRegular as PopsicleRegularIcon, PopsicleRegular as SiPopsicleRegular };
export default PopsicleRegular;
export type { PopsicleRegularProps };
