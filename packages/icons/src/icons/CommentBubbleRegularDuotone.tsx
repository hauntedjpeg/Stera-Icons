import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.75c5.1 0 9.25 4.14 9.25 9.25 0 5.1-4.14 9.25-9.25 9.25H5.93c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H12c4.28 0 7.75-3.47 7.75-7.75S16.28 4.25 12 4.25 4.25 7.72 4.25 12v6.07c0-.41-.34-.75-.75-.75s-.75.34-.75.75V12c0-5.1 4.14-9.25 9.25-9.25" opacity={.4} />
        <path d="M3.5 17.32c.41 0 .75.34.75.75 0 .43 0 .55.02.64.09.52.5.93 1.02 1.02.09.02.21.02.64.02.41 0 .75.34.75.75s-.34.75-.75.75q-.54.01-.9-.04c-1.14-.2-2.05-1.1-2.24-2.25q-.05-.35-.04-.89c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CommentBubbleRegularDuotone.displayName = 'CommentBubbleRegularDuotone';

// Triple export pattern
export { CommentBubbleRegularDuotone, CommentBubbleRegularDuotone as CommentBubbleRegularDuotoneIcon, CommentBubbleRegularDuotone as SiCommentBubbleRegularDuotone };
export default CommentBubbleRegularDuotone;
export type { CommentBubbleRegularDuotoneProps };
