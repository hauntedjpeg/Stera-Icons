import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkOffFillDuotone = memo(
  forwardRef<SVGSVGElement, LinkOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.13 11.04c.49-.5 1.28-.5 1.76 0 .5.49.5 1.28 0 1.76l-.75.76c-1.19 1.19-1.19 3.11 0 4.3s3.11 1.19 4.3 0l.76-.75c.48-.5 1.27-.5 1.76 0 .5.48.5 1.27 0 1.76l-.75.76c-2.16 2.16-5.67 2.16-7.84 0s-2.16-5.68 0-7.84zM11.79 4.37c2.16-2.16 5.67-2.16 7.84 0s2.16 5.68 0 7.84l-.76.75c-.49.5-1.28.5-1.76 0-.5-.49-.5-1.28 0-1.76l.75-.76c1.19-1.19 1.19-3.11 0-4.3s-3.11-1.19-4.3 0l-.76.75c-.48.5-1.27.5-1.76 0-.5-.48-.5-1.27 0-1.76z" opacity={0.4} />
        <path d="M4 4c.5-.48 1.28-.48 1.77 0L20 18.24c.48.48.48 1.28 0 1.77-.5.48-1.29.48-1.77 0L4 5.77c-.5-.49-.5-1.28 0-1.76" />
    </IconBase>
  ))
);

LinkOffFillDuotone.displayName = 'LinkOffFillDuotone';

// Triple export pattern
export { LinkOffFillDuotone, LinkOffFillDuotone as LinkOffFillDuotoneIcon, LinkOffFillDuotone as SiLinkOffFillDuotone };
export default LinkOffFillDuotone;
export type { LinkOffFillDuotoneProps };
