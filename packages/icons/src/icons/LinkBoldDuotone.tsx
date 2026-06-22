import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkBoldDuotone = memo(
  forwardRef<SVGSVGElement, LinkBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.06 8.54a1 1 0 0 1 .88 1.8 3.42 3.42 0 0 0-.93 5.52l3.13 3.13a3.43 3.43 0 0 0 4.85-4.85l-1.7-1.7a1 1 0 0 1 1.42-1.42l1.7 1.7a5.43 5.43 0 0 1-7.68 7.69l-3.14-3.14a5.43 5.43 0 0 1 1.47-8.73" opacity={.4} />
        <path d="M3.6 3.6a5.43 5.43 0 0 1 7.67 0l3.14 3.13a5.43 5.43 0 0 1-1.47 8.73 1 1 0 0 1-.88-1.8A3.43 3.43 0 0 0 13 8.14L9.86 5.01a3.43 3.43 0 0 0-4.85 4.85l1.7 1.7a1 1 0 0 1-1.42 1.42l-1.7-1.7a5.43 5.43 0 0 1 0-7.69" />
    </IconBase>
  ))
);

LinkBoldDuotone.displayName = 'LinkBoldDuotone';

// Triple export pattern (lucide-react style)
export { LinkBoldDuotone, LinkBoldDuotone as LinkBoldDuotoneIcon, LinkBoldDuotone as SiLinkBoldDuotone };
export default LinkBoldDuotone;
export type { LinkBoldDuotoneProps };
