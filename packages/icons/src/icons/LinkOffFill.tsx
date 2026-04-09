import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkOffFillProps = Omit<IconBaseProps, 'children'>;

const LinkOffFill = memo(
  forwardRef<SVGSVGElement, LinkOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="link-off-fill" {...props}>
      <path d="M5.13 11.04a1.25 1.25 0 1 1 1.76 1.76l-.75.76a3.04 3.04 0 0 0 4.3 4.3l.76-.75a1.25 1.25 0 0 1 1.76 1.76l-.75.76a5.54 5.54 0 0 1-7.84-7.84zM4 4a1.25 1.25 0 0 1 1.77 0L20 18.23A1.25 1.25 0 0 1 18.23 20L4 5.77A1.25 1.25 0 0 1 4 4M11.79 4.37a5.54 5.54 0 0 1 7.84 7.84l-.76.75a1.25 1.25 0 1 1-1.76-1.76l.75-.76a3.04 3.04 0 0 0-4.3-4.3l-.76.75a1.25 1.25 0 0 1-1.76-1.76z" />
    </IconBase>
  ))
);

LinkOffFill.displayName = 'LinkOffFill';

// Triple export pattern (lucide-react style)
export { LinkOffFill, LinkOffFill as LinkOffFillIcon, LinkOffFill as SiLinkOffFill };
export default LinkOffFill;
export type { LinkOffFillProps };
