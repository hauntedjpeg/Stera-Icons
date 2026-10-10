import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkFillDuotone = memo(
  forwardRef<SVGSVGElement, LinkFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.96 8.32c.62-.3 1.36-.04 1.66.58s.05 1.37-.58 1.67q-.46.22-.86.61c-1.24 1.25-1.24 3.26 0 4.5l3.14 3.14c1.24 1.24 3.25 1.24 4.5 0 1.24-1.24 1.24-3.26 0-4.5l-1.7-1.7c-.5-.5-.5-1.28 0-1.77.48-.5 1.28-.5 1.76 0l1.7 1.7c2.23 2.22 2.23 5.82 0 8.04-2.21 2.22-5.81 2.21-8.03 0L9.4 17.45c-2.21-2.22-2.21-5.82 0-8.04q.7-.69 1.55-1.1" opacity={.4} />
        <path d="M3.41 3.41c2.22-2.22 5.82-2.21 8.04 0l3.14 3.14c2.21 2.22 2.21 5.82 0 8.03q-.7.7-1.55 1.1c-.62.3-1.36.04-1.67-.58s-.04-1.37.58-1.67q.47-.22.87-.61c1.24-1.25 1.24-3.26 0-4.5L9.68 5.18c-1.24-1.24-3.25-1.24-4.5 0-1.24 1.24-1.24 3.26 0 4.5l1.7 1.7c.5.5.5 1.28 0 1.77-.48.49-1.28.49-1.76 0l-1.7-1.7c-2.22-2.22-2.23-5.82 0-8.04" />
    </IconBase>
  ))
);

LinkFillDuotone.displayName = 'LinkFillDuotone';

// Triple export pattern
export { LinkFillDuotone, LinkFillDuotone as LinkFillDuotoneIcon, LinkFillDuotone as SiLinkFillDuotone };
export default LinkFillDuotone;
export type { LinkFillDuotoneProps };
