import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleBoldProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleBold = memo(
  forwardRef<SVGSVGElement, CommentBubbleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5s-4.25 9.5-9.5 9.5H5.93q-.53.01-.93-.04c-1.26-.22-2.24-1.2-2.46-2.46q-.05-.4-.04-.93V12c0-5.25 4.25-9.5 9.5-9.5m0 2c-4.14 0-7.5 3.36-7.5 7.5v6.07l.01.6c.08.42.4.74.82.82l.6.01H12c4.14 0 7.5-3.36 7.5-7.5S16.14 4.5 12 4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleBold.displayName = 'CommentBubbleBold';

// Triple export pattern
export { CommentBubbleBold, CommentBubbleBold as CommentBubbleBoldIcon, CommentBubbleBold as SiCommentBubbleBold };
export default CommentBubbleBold;
export type { CommentBubbleBoldProps };
