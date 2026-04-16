import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ReplyFillProps = Omit<IconBaseProps, 'children'>;

const ReplyFill = memo(
  forwardRef<SVGSVGElement, ReplyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.38 3.38a.88.88 0 0 1 1.5.62v4.64c3.32.07 5.84.6 7.52 2.15 1.86 1.7 2.47 4.42 2.47 8.21a.87.87 0 0 1-1.67.36l-.01-.03a4 4 0 0 0-.32-.55 7 7 0 0 0-1.2-1.38A8.2 8.2 0 0 0 13 15.37h-1.13V20a.88.88 0 0 1-1.49.62l-8-8a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

ReplyFill.displayName = 'ReplyFill';

// Triple export pattern (lucide-react style)
export { ReplyFill, ReplyFill as ReplyFillIcon, ReplyFill as SiReplyFill };
export default ReplyFill;
export type { ReplyFillProps };
