import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookClosedBoldProps = Omit<IconBaseProps, 'children'>;

const BookClosedBold = memo(
  forwardRef<SVGSVGElement, BookClosedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 10c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1zM15 6.5c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M17 2q.5 0 .9.02.36.02.76.17l.11.06.16.08q.54.34.82.9c.16.3.2.6.23.87q.03.4.02.9v11.5c0 .55-.45 1-1 1l-.1.02c-.28.07-.7.43-.7 1.23 0 .91.55 1.25.8 1.25.55 0 1 .45 1 1s-.45 1-1 1H7.25C5.45 22 4 20.54 4 18.75V7.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM7.25 17.5c-.69 0-1.25.56-1.25 1.25S6.56 20 7.25 20h9.17q-.21-.61-.22-1.25 0-.64.22-1.25zM9.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C6 6.36 6 6.94 6 7.8v7.95q.57-.25 1.25-.25H18V5l-.01-.74-.02-.13q-.04-.06-.1-.1l-.13-.02L17 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookClosedBold.displayName = 'BookClosedBold';

// Triple export pattern
export { BookClosedBold, BookClosedBold as BookClosedBoldIcon, BookClosedBold as SiBookClosedBold };
export default BookClosedBold;
export type { BookClosedBoldProps };
