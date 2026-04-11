import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookmarkFillProps = Omit<IconBaseProps, 'children'>;

const BookmarkFill = memo(
  forwardRef<SVGSVGElement, BookmarkFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.4 2.13q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v10.04q0 .9-.03 1.47c-.03.36-.1.83-.41 1.2-.4.45-.98.7-1.58.65a2 2 0 0 1-1.13-.55q-.45-.38-1.07-1.02l-2.85-2.86a10 10 0 0 0-.68-.62.4.4 0 0 0-.24 0l-.13.1q-.18.15-.55.52L8.35 20.4q-.62.63-1.07 1.02c-.27.23-.65.5-1.13.55-.6.04-1.19-.2-1.58-.66a2 2 0 0 1-.41-1.19q-.05-.58-.04-1.47V8.6q-.01-1.44.06-2.37c.05-.64.16-1.2.42-1.72a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43q.93-.08 2.37-.06z" />
    </IconBase>
  ))
);

BookmarkFill.displayName = 'BookmarkFill';

// Triple export pattern (lucide-react style)
export { BookmarkFill, BookmarkFill as BookmarkFillIcon, BookmarkFill as SiBookmarkFill };
export default BookmarkFill;
export type { BookmarkFillProps };
