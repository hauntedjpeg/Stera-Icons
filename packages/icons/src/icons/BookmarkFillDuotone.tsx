import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookmarkFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookmarkFillDuotone = memo(
  forwardRef<SVGSVGElement, BookmarkFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.4 3.88c1 0 1.69 0 2.23.04.53.04.83.12 1.06.24q.76.39 1.15 1.15c.12.23.2.53.24 1.06.04.54.05 1.24.05 2.23v10.04c0 .62 0 1.03-.03 1.32q-.02.18-.04.23l-.03.01-.19-.13-.95-.92-2.86-2.85q-.35-.37-.64-.62c-.2-.17-.44-.34-.73-.43q-.66-.21-1.32 0-.44.16-.73.43-.29.25-.64.62L7.1 19.15c-.44.44-.73.73-.95.92l-.19.13-.04-.01-.03-.23c-.02-.3-.03-.7-.03-1.32V8.6c0-1 0-1.69.05-2.23.04-.53.12-.83.24-1.06q.39-.76 1.15-1.15c.23-.12.53-.2 1.06-.24.54-.04 1.24-.04 2.23-.04z" opacity={.4} />
        <path fillRule="evenodd" d="M13.4 2.13q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v10.04q0 .9-.03 1.47c-.03.36-.1.83-.41 1.2-.4.45-.98.7-1.58.65-.48-.04-.86-.32-1.13-.55q-.45-.38-1.07-1.02l-2.85-2.86-.55-.52-.13-.1q-.12-.03-.24 0l-.13.1q-.18.15-.55.52L8.35 20.4q-.62.63-1.07 1.02c-.27.23-.65.5-1.13.55-.6.04-1.19-.2-1.58-.66-.3-.36-.38-.83-.41-1.19q-.05-.58-.04-1.47V8.6q-.01-1.44.06-2.37c.05-.64.16-1.2.42-1.72.42-.82 1.09-1.49 1.91-1.9.52-.27 1.08-.38 1.72-.43q.93-.08 2.37-.06zm-2.8 1.75c-1 0-1.69 0-2.23.04-.53.04-.83.12-1.06.24q-.76.39-1.15 1.15c-.12.23-.2.53-.24 1.06-.04.54-.04 1.24-.04 2.23v10.04c0 .62 0 1.03.02 1.32l.03.23.04.01.19-.13.95-.92 2.86-2.85q.35-.37.64-.62c.2-.17.44-.34.73-.43q.66-.21 1.32 0 .44.16.73.43.29.25.64.62l2.86 2.85q.64.65.95.92l.19.13.03-.01q.02-.05.04-.23c.02-.3.02-.7.02-1.32V8.6c0-1 0-1.69-.04-2.23-.04-.53-.12-.83-.24-1.06q-.39-.76-1.15-1.15c-.23-.12-.53-.2-1.06-.24-.54-.04-1.24-.04-2.23-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookmarkFillDuotone.displayName = 'BookmarkFillDuotone';

// Triple export pattern
export { BookmarkFillDuotone, BookmarkFillDuotone as BookmarkFillDuotoneIcon, BookmarkFillDuotone as SiBookmarkFillDuotone };
export default BookmarkFillDuotone;
export type { BookmarkFillDuotoneProps };
