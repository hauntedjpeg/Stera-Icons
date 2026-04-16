import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleFillDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.38a7.62 7.62 0 1 1 0 15.25H5.93c-.44 0-.54 0-.62-.02a1.1 1.1 0 0 1-.92-.92 5 5 0 0 1-.01-.62V12A7.63 7.63 0 0 1 12 4.38" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.63a9.37 9.37 0 1 1 0 18.75H5.93q-.53.01-.91-.05a2.9 2.9 0 0 1-2.35-2.35q-.06-.38-.04-.9V12c0-5.18 4.2-9.37 9.37-9.37m0 1.75A7.63 7.63 0 0 0 4.38 12v6.07l.01.62c.08.47.45.84.92.92.08.01.18.02.62.02H12a7.62 7.62 0 1 0 0-15.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleFillDuotone.displayName = 'CommentBubbleFillDuotone';

// Triple export pattern (lucide-react style)
export { CommentBubbleFillDuotone, CommentBubbleFillDuotone as CommentBubbleFillDuotoneIcon, CommentBubbleFillDuotone as SiCommentBubbleFillDuotone };
export default CommentBubbleFillDuotone;
export type { CommentBubbleFillDuotoneProps };
