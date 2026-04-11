import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkFillProps = Omit<IconBaseProps, 'children'>;

const LinkFill = memo(
  forwardRef<SVGSVGElement, LinkFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.3 7.51a1.25 1.25 0 0 1 1.4 2.08q-.33.2-.61.5a4 4 0 0 0 0 5.69l2.8 2.8a4.02 4.02 0 0 0 6.1-5.2A1.25 1.25 0 1 1 21 11.9a6.52 6.52 0 0 1-9.9 8.44l-2.79-2.8A6.52 6.52 0 0 1 9.3 7.51" />
        <path d="M3.66 3.66a6.5 6.5 0 0 1 9.22 0l2.8 2.8a6.52 6.52 0 0 1-.98 10.03 1.25 1.25 0 0 1-1.4-2.08q.33-.2.61-.5a4 4 0 0 0 0-5.69l-2.8-2.8a4.02 4.02 0 0 0-6.1 5.21A1.25 1.25 0 0 1 3 12.1a6.5 6.5 0 0 1 .67-8.44" />
    </IconBase>
  ))
);

LinkFill.displayName = 'LinkFill';

// Triple export pattern (lucide-react style)
export { LinkFill, LinkFill as LinkFillIcon, LinkFill as SiLinkFill };
export default LinkFill;
export type { LinkFillProps };
