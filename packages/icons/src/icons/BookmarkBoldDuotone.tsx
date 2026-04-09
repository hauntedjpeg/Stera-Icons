import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookmarkBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookmarkBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookmarkBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bookmark-bold-duotone" {...props}>
      <path d="M12 4h-1.4c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C6 6.92 6 7.6 6 8.6v10.04c0 .62 0 1.02.03 1.3V20q.02 0 .05-.03c.22-.18.5-.47.94-.9l2.86-2.86q.35-.37.65-.63c.2-.17.46-.35.77-.45l.18-.05q.25-.06.52-.06v2h-.07l-.1.09c-.13.1-.28.25-.54.51l-2.85 2.86q-.62.63-1.08 1.02c-.27.23-.68.54-1.2.58a2 2 0 0 1-1.68-.7c-.34-.4-.41-.9-.45-1.26Q4 19.52 4 18.64V8.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q9.16 2 10.6 2H12z" />
        <path d="M13.4 2q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v10.04q0 .89-.03 1.48c-.04.36-.11.87-.45 1.26a2 2 0 0 1-1.68.7 2.2 2.2 0 0 1-1.2-.58q-.45-.39-1.08-1.02l-2.85-2.86-.64-.6H12v-2q.35 0 .7.1.46.18.77.46.3.27.65.63l2.86 2.85c.44.44.72.73.94.91l.05.03v-.05c.03-.29.03-.69.03-1.31V8.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C15.08 4 14.4 4 13.4 4H12V2z" opacity={.4} />
    </IconBase>
  ))
);

BookmarkBoldDuotone.displayName = 'BookmarkBoldDuotone';

// Triple export pattern (lucide-react style)
export { BookmarkBoldDuotone, BookmarkBoldDuotone as BookmarkBoldDuotoneIcon, BookmarkBoldDuotone as SiBookmarkBoldDuotone };
export default BookmarkBoldDuotone;
export type { BookmarkBoldDuotoneProps };
