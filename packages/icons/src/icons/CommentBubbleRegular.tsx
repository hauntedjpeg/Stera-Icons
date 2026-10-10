import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleRegularProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleRegular = memo(
  forwardRef<SVGSVGElement, CommentBubbleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.75c5.1 0 9.25 4.14 9.25 9.25 0 5.1-4.14 9.25-9.25 9.25H5.93q-.54.01-.9-.04c-1.14-.2-2.05-1.1-2.24-2.25q-.05-.35-.04-.89V12c0-5.1 4.14-9.25 9.25-9.25m0 1.5c-4.28 0-7.75 3.47-7.75 7.75v6.07c0 .43 0 .55.02.64.09.52.5.93 1.02 1.02.09.02.21.02.64.02H12c4.28 0 7.75-3.47 7.75-7.75S16.28 4.25 12 4.25" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleRegular.displayName = 'CommentBubbleRegular';

// Triple export pattern
export { CommentBubbleRegular, CommentBubbleRegular as CommentBubbleRegularIcon, CommentBubbleRegular as SiCommentBubbleRegular };
export default CommentBubbleRegular;
export type { CommentBubbleRegularProps };
