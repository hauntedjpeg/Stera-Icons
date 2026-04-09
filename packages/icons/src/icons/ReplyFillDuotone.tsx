import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReplyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ReplyFillDuotone = memo(
  forwardRef<SVGSVGElement, ReplyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="reply-fill-duotone" {...props}>
      <path d="M10.13 9.5c0 .48.39.87.87.88 3.74 0 5.92.51 7.22 1.7.91.84 1.5 2.12 1.75 4.15l-.13-.13A10 10 0 0 0 13 13.62h-2c-.48 0-.87.4-.87.88v3.39L4.22 12l5.9-5.89z" opacity={.4} />
        <path fillRule="evenodd" d="M10.38 3.38a.88.88 0 0 1 1.5.62v4.64c3.32.07 5.84.6 7.53 2.15 1.85 1.7 2.46 4.42 2.46 8.21a.87.87 0 0 1-1.67.36l-.01-.03a4 4 0 0 0-.32-.55 7 7 0 0 0-1.2-1.38A8.2 8.2 0 0 0 13 15.37h-1.13V20a.88.88 0 0 1-1.49.62l-8-8a.9.9 0 0 1 0-1.24zM4.24 12l5.88 5.89V14.5c0-.48.4-.88.88-.88h2a10 10 0 0 1 6.83 2.48l.14.13c-.26-2.03-.84-3.31-1.75-4.15-1.3-1.2-3.48-1.7-7.22-1.7a.9.9 0 0 1-.88-.88V6.11z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReplyFillDuotone.displayName = 'ReplyFillDuotone';

// Triple export pattern (lucide-react style)
export { ReplyFillDuotone, ReplyFillDuotone as ReplyFillDuotoneIcon, ReplyFillDuotone as SiReplyFillDuotone };
export default ReplyFillDuotone;
export type { ReplyFillDuotoneProps };
