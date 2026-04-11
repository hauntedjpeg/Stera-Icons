import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliFillProps = Omit<IconBaseProps, 'children'>;

const CliFill = memo(
  forwardRef<SVGSVGElement, CliFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 17.25a1.25 1.25 0 0 1 0 2.5h-9a1.25 1.25 0 0 1 0-2.5zM3.12 4.62a1.25 1.25 0 0 1 1.76 0l6 6c.5.48.5 1.28 0 1.76l-6 6a1.25 1.25 0 0 1-1.76-1.76l5.11-5.12-5.11-5.12a1.25 1.25 0 0 1 0-1.76" />
    </IconBase>
  ))
);

CliFill.displayName = 'CliFill';

// Triple export pattern (lucide-react style)
export { CliFill, CliFill as CliFillIcon, CliFill as SiCliFill };
export default CliFill;
export type { CliFillProps };
