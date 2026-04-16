import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkBoldProps = Omit<IconBaseProps, 'children'>;

const LinkBold = memo(
  forwardRef<SVGSVGElement, LinkBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.06 8.54a1 1 0 0 1 .88 1.8 3.43 3.43 0 0 0-.93 5.52L14.14 19a3.43 3.43 0 0 0 4.85-4.86l-1.7-1.7a1 1 0 0 1 1.42-1.42l1.7 1.7a5.43 5.43 0 0 1-7.68 7.69l-3.14-3.14a5.43 5.43 0 0 1 1.47-8.73" />
        <path d="M3.6 3.6a5.43 5.43 0 0 1 7.67 0l3.14 3.13a5.43 5.43 0 0 1-1.47 8.73 1 1 0 0 1-.88-1.8A3.43 3.43 0 0 0 13 8.14L9.86 5.01a3.43 3.43 0 0 0-4.85 4.85l1.7 1.7a1 1 0 0 1-1.42 1.42l-1.7-1.7a5.43 5.43 0 0 1 0-7.69" />
    </IconBase>
  ))
);

LinkBold.displayName = 'LinkBold';

// Triple export pattern (lucide-react style)
export { LinkBold, LinkBold as LinkBoldIcon, LinkBold as SiLinkBold };
export default LinkBold;
export type { LinkBoldProps };
