import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreBoldProps = Omit<IconBaseProps, 'children'>;

const MoreBold = memo(
  forwardRef<SVGSVGElement, MoreBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0M21 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </IconBase>
  ))
);

MoreBold.displayName = 'MoreBold';

// Triple export pattern (lucide-react style)
export { MoreBold, MoreBold as MoreBoldIcon, MoreBold as SiMoreBold };
export default MoreBold;
export type { MoreBoldProps };
