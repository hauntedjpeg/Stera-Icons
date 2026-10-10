import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CommentBubbleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CommentBubbleFillDuotone = memo(
  forwardRef<SVGSVGElement, CommentBubbleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4.38c4.21 0 7.63 3.4 7.63 7.62 0 4.21-3.42 7.63-7.63 7.63H5.93c-.44 0-.54 0-.62-.02-.47-.08-.84-.45-.92-.92l-.01-.62V12c0-4.21 3.4-7.62 7.62-7.62" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.63c5.18 0 9.38 4.2 9.38 9.37 0 5.18-4.2 9.38-9.38 9.38H5.93q-.53.01-.91-.05c-1.2-.2-2.15-1.14-2.35-2.35q-.06-.38-.04-.9V12c0-5.18 4.2-9.37 9.37-9.37m0 1.75c-4.21 0-7.62 3.4-7.62 7.62v6.07l.01.62c.08.47.45.84.92.92.08.01.18.02.62.02H12c4.21 0 7.63-3.42 7.63-7.63S16.2 4.38 12 4.38" clipRule="evenodd" />
    </IconBase>
  ))
);

CommentBubbleFillDuotone.displayName = 'CommentBubbleFillDuotone';

// Triple export pattern
export { CommentBubbleFillDuotone, CommentBubbleFillDuotone as CommentBubbleFillDuotoneIcon, CommentBubbleFillDuotone as SiCommentBubbleFillDuotone };
export default CommentBubbleFillDuotone;
export type { CommentBubbleFillDuotoneProps };
