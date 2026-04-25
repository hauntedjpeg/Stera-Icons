import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkOffFillDuotone = memo(
  forwardRef<SVGSVGElement, LinkOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.13 11.04a1.25 1.25 0 1 1 1.76 1.76l-.75.76a3.04 3.04 0 0 0 4.3 4.3l.76-.75a1.25 1.25 0 0 1 1.76 1.76l-.75.76a5.54 5.54 0 0 1-7.84-7.84zM11.79 4.37a5.54 5.54 0 0 1 7.84 7.84l-.76.75a1.25 1.25 0 1 1-1.76-1.76l.75-.76a3.04 3.04 0 0 0-4.3-4.3l-.76.75a1.25 1.25 0 0 1-1.76-1.76z" opacity={0.4} />
        <path d="M4 4a1.25 1.25 0 0 1 1.77 0L20 18.24A1.25 1.25 0 0 1 18.23 20L4 5.77a1.25 1.25 0 0 1 0-1.76" />
    </IconBase>
  ))
);

LinkOffFillDuotone.displayName = 'LinkOffFillDuotone';

// Triple export pattern (lucide-react style)
export { LinkOffFillDuotone, LinkOffFillDuotone as LinkOffFillDuotoneIcon, LinkOffFillDuotone as SiLinkOffFillDuotone };
export default LinkOffFillDuotone;
export type { LinkOffFillDuotoneProps };
