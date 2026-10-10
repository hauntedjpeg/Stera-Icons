import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.8 1q.81 0 1.4.03c.4.03.78.1 1.16.3q.87.44 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v13.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16q-.44.87-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03h-1.6q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V5.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3Q10.4.99 11.2 1zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" opacity={.4} />
        <path d="M12 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M12 16c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
    </IconBase>
  ))
);

MoreVFillDuotone.displayName = 'MoreVFillDuotone';

// Triple export pattern
export { MoreVFillDuotone, MoreVFillDuotone as MoreVFillDuotoneIcon, MoreVFillDuotone as SiMoreVFillDuotone };
export default MoreVFillDuotone;
export type { MoreVFillDuotoneProps };
