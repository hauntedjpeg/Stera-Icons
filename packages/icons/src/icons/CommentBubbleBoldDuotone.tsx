import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5s-4.25 9.5-9.5 9.5H5.93c.55 0 1-.45 1-1s-.45-1-1-1H12c4.14 0 7.5-3.36 7.5-7.5S16.14 4.5 12 4.5 4.5 7.86 4.5 12v6.07c0-.55-.45-1-1-1s-1 .45-1 1V12c0-5.25 4.25-9.5 9.5-9.5" opacity={.4} />
        <path d="M3.5 17.07c.55 0 1 .45 1 1l.01.6c.07.42.4.74.82.82l.6.01c.55 0 1 .45 1 1s-.45 1-1 1q-.53.01-.93-.04c-1.26-.22-2.24-1.2-2.46-2.46q-.05-.4-.04-.93c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

CommentBubbleBoldDuotone.displayName = 'CommentBubbleBoldDuotone';

// Triple export pattern
export { CommentBubbleBoldDuotone, CommentBubbleBoldDuotone as CommentBubbleBoldDuotoneIcon, CommentBubbleBoldDuotone as SiCommentBubbleBoldDuotone };
export default CommentBubbleBoldDuotone;
export type { CommentBubbleBoldDuotoneProps };
