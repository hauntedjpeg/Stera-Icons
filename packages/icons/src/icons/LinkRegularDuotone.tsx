import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkRegularDuotone = memo(
  forwardRef<SVGSVGElement, LinkRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.17 8.77a.75.75 0 0 1 .66 1.35 3.68 3.68 0 0 0-1 5.92l3.13 3.13a3.68 3.68 0 0 0 5.21-5.2l-1.7-1.7a.75.75 0 0 1 1.06-1.07l1.7 1.7a5.18 5.18 0 0 1-7.33 7.33L9.77 17.1a5.18 5.18 0 0 1 1.4-8.33" opacity={.4} />
        <path d="M3.77 3.77a5.2 5.2 0 0 1 7.33 0l3.13 3.13a5.18 5.18 0 0 1-1.4 8.33.75.75 0 0 1-.66-1.35 3.68 3.68 0 0 0 1-5.92l-3.13-3.13a3.68 3.68 0 0 0-5.21 5.2l1.7 1.7a.75.75 0 0 1-1.06 1.07l-1.7-1.7a5.2 5.2 0 0 1 0-7.33" />
    </IconBase>
  ))
);

LinkRegularDuotone.displayName = 'LinkRegularDuotone';

// Triple export pattern (lucide-react style)
export { LinkRegularDuotone, LinkRegularDuotone as LinkRegularDuotoneIcon, LinkRegularDuotone as SiLinkRegularDuotone };
export default LinkRegularDuotone;
export type { LinkRegularDuotoneProps };
