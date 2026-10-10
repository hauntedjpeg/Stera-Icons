import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LinkOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LinkOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, LinkOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.06 10.46c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-1.5 1.51c-1.3 1.29-1.3 3.37 0 4.66 1.28 1.28 3.36 1.28 4.65 0l1.5-1.51c.4-.4 1.03-.4 1.42 0 .4.39.4 1.02 0 1.41l-1.5 1.51c-2.07 2.07-5.42 2.07-7.49 0s-2.07-5.42 0-7.48zM11.97 4.55c2.06-2.07 5.41-2.07 7.48 0s2.07 5.42 0 7.48l-1.5 1.51c-.4.4-1.03.4-1.42 0-.4-.39-.4-1.02 0-1.41l1.5-1.51c1.3-1.29 1.3-3.37 0-4.66-1.28-1.28-3.36-1.28-4.65 0l-1.5 1.51c-.4.4-1.03.4-1.42 0-.4-.39-.4-1.02 0-1.41z" opacity={0.4} />
        <path d="M4.18 4.18c.4-.39 1.03-.39 1.42 0L19.82 18.4c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0L4.18 5.6c-.39-.4-.39-1.03 0-1.42" />
    </IconBase>
  ))
);

LinkOffBoldDuotone.displayName = 'LinkOffBoldDuotone';

// Triple export pattern
export { LinkOffBoldDuotone, LinkOffBoldDuotone as LinkOffBoldDuotoneIcon, LinkOffBoldDuotone as SiLinkOffBoldDuotone };
export default LinkOffBoldDuotone;
export type { LinkOffBoldDuotoneProps };
