import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreVBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoreVBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" opacity={.4} />
        <path d="M12 6.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M12 21.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
    </IconBase>
  ))
);

MoreVBoldDuotone.displayName = 'MoreVBoldDuotone';

// Triple export pattern
export { MoreVBoldDuotone, MoreVBoldDuotone as MoreVBoldDuotoneIcon, MoreVBoldDuotone as SiMoreVBoldDuotone };
export default MoreVBoldDuotone;
export type { MoreVBoldDuotoneProps };
