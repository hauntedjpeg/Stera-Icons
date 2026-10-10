import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookmarkRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookmarkRegularDuotone = memo(
  forwardRef<SVGSVGElement, BookmarkRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.75h-1.4c-1 0-1.7 0-2.24.04-.53.05-.86.13-1.1.26q-.8.4-1.21 1.2c-.13.25-.21.58-.26 1.11-.04.55-.04 1.25-.04 2.24v10.04c0 .62 0 1.03.03 1.33q.03.26.04.3.08.06.18.06.03 0 .24-.17c.23-.19.52-.48.96-.92l2.86-2.86q.35-.36.63-.6.29-.27.7-.41.3-.1.61-.1v1.5q-.08 0-.15.02-.01-.02-.19.13t-.54.52L8.26 20.3q-.63.64-1.06 1.01c-.27.23-.63.49-1.06.52-.56.04-1.1-.18-1.47-.6-.29-.34-.36-.77-.39-1.13q-.04-.57-.03-1.46V8.6q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05H12z" />
        <path d="M13.4 2.25q1.44-.01 2.36.05.93.05 1.67.41c.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.93.05 2.36v10.04q0 .89-.03 1.46c-.03.36-.1.79-.39 1.12-.36.43-.9.65-1.47.61-.43-.03-.79-.29-1.06-.52q-.44-.38-1.06-1.01l-2.86-2.86q-.36-.37-.54-.52l-.19-.13-.15-.02v-1.5q.31 0 .62.1c.27.08.5.24.69.4q.28.25.63.61l2.86 2.86c.44.44.73.73.96.92q.2.17.24.17.1 0 .17-.07.03-.01.05-.3c.03-.29.03-.7.03-1.32V8.6c0-1 0-1.7-.04-2.24-.05-.53-.13-.86-.26-1.1q-.4-.8-1.2-1.21c-.25-.13-.58-.21-1.11-.26-.55-.04-1.25-.04-2.24-.04H12v-1.5z" opacity={.4} />
    </IconBase>
  ))
);

BookmarkRegularDuotone.displayName = 'BookmarkRegularDuotone';

// Triple export pattern
export { BookmarkRegularDuotone, BookmarkRegularDuotone as BookmarkRegularDuotoneIcon, BookmarkRegularDuotone as SiBookmarkRegularDuotone };
export default BookmarkRegularDuotone;
export type { BookmarkRegularDuotoneProps };
