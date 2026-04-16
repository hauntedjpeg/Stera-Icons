import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkFillDuotone = memo(
  forwardRef<SVGSVGElement, LinkFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.96 8.32a1.25 1.25 0 0 1 1.08 2.25 3.18 3.18 0 0 0-.86 5.11l3.14 3.14a3.18 3.18 0 0 0 4.5-4.5l-1.7-1.7a1.25 1.25 0 1 1 1.76-1.77l1.7 1.7a5.68 5.68 0 0 1-8.03 8.04L9.4 17.45a5.68 5.68 0 0 1 1.55-9.13" opacity={.4} />
        <path d="M3.41 3.41a5.7 5.7 0 0 1 8.04 0l3.14 3.14a5.68 5.68 0 0 1-1.54 9.13 1.25 1.25 0 1 1-1.1-2.25 3.17 3.17 0 0 0 .87-5.11L9.68 5.18a3.18 3.18 0 0 0-4.5 4.5l1.7 1.7a1.25 1.25 0 0 1-1.76 1.77l-1.7-1.7a5.7 5.7 0 0 1 0-8.04" />
    </IconBase>
  ))
);

LinkFillDuotone.displayName = 'LinkFillDuotone';

// Triple export pattern (lucide-react style)
export { LinkFillDuotone, LinkFillDuotone as LinkFillDuotoneIcon, LinkFillDuotone as SiLinkFillDuotone };
export default LinkFillDuotone;
export type { LinkFillDuotoneProps };
