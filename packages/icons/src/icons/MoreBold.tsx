import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreBoldProps = Omit<IconBaseProps, 'children'>;

const MoreBold = memo(
  forwardRef<SVGSVGElement, MoreBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M21 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" />
    </IconBase>
  ))
);

MoreBold.displayName = 'MoreBold';

// Triple export pattern
export { MoreBold, MoreBold as MoreBoldIcon, MoreBold as SiMoreBold };
export default MoreBold;
export type { MoreBoldProps };
