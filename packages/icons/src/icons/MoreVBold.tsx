import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVBoldProps = Omit<IconBaseProps, 'children'>;

const MoreVBold = memo(
  forwardRef<SVGSVGElement, MoreVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M12 21.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
    </IconBase>
  ))
);

MoreVBold.displayName = 'MoreVBold';

// Triple export pattern
export { MoreVBold, MoreVBold as MoreVBoldIcon, MoreVBold as SiMoreVBold };
export default MoreVBold;
export type { MoreVBoldProps };
