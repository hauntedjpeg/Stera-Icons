import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleFillProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleFill = memo(
  forwardRef<SVGSVGElement, CommentBubbleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.63c5.18 0 9.38 4.2 9.38 9.37 0 5.18-4.2 9.38-9.38 9.38H5.93q-.53.01-.91-.05c-1.2-.2-2.15-1.14-2.35-2.35q-.06-.38-.04-.9V12c0-5.18 4.2-9.37 9.37-9.37" />
    </IconBase>
  ))
);

CommentBubbleFill.displayName = 'CommentBubbleFill';

// Triple export pattern
export { CommentBubbleFill, CommentBubbleFill as CommentBubbleFillIcon, CommentBubbleFill as SiCommentBubbleFill };
export default CommentBubbleFill;
export type { CommentBubbleFillProps };
