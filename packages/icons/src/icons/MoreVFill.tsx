import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreVFillProps = Omit<IconBaseProps, 'children'>;

const MoreVFill = memo(
  forwardRef<SVGSVGElement, MoreVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 18.8q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16q-.44.87-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03h-1.6q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V5.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3Q10.4.99 11.2 1h1.6q.81 0 1.4.03c.4.03.78.1 1.16.3q.87.44 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4zM14 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m0 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m0 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreVFill.displayName = 'MoreVFill';

// Triple export pattern
export { MoreVFill, MoreVFill as MoreVFillIcon, MoreVFill as SiMoreVFill };
export default MoreVFill;
export type { MoreVFillProps };
