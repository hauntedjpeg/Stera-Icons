import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.8 7q.81 0 1.4.03c.4.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.59.03 1.4v1.6q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16q-.44.87-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 13.6 1 12.8v-1.6q0-.81.03-1.4c.03-.4.1-.78.3-1.16q.44-.87 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 6.99 5.2 7zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" opacity={.4} />
        <path d="M4 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M16 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2" />
    </IconBase>
  ))
);

MoreFillDuotone.displayName = 'MoreFillDuotone';

// Triple export pattern
export { MoreFillDuotone, MoreFillDuotone as MoreFillDuotoneIcon, MoreFillDuotone as SiMoreFillDuotone };
export default MoreFillDuotone;
export type { MoreFillDuotoneProps };
