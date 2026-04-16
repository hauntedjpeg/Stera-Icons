import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleFillProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleFill = memo(
  forwardRef<SVGSVGElement, CommentBubbleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.63a9.37 9.37 0 1 1 0 18.75H5.93q-.53.01-.91-.05a2.9 2.9 0 0 1-2.35-2.35q-.06-.38-.04-.9V12c0-5.18 4.2-9.37 9.37-9.37" />
    </IconBase>
  ))
);

CommentBubbleFill.displayName = 'CommentBubbleFill';

// Triple export pattern (lucide-react style)
export { CommentBubbleFill, CommentBubbleFill as CommentBubbleFillIcon, CommentBubbleFill as SiCommentBubbleFill };
export default CommentBubbleFill;
export type { CommentBubbleFillProps };
