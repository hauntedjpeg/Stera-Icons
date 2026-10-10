import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldBoldProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldBold = memo(
  forwardRef<SVGSVGElement, BookOpenFoldBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 2q.42 0 .7.3.3.28.3.7v2q1.48.05 3.27.54c.43.12.73.52.73.96v11.7c0 .31-.15.61-.4.8s-.57.25-.87.16c-2.93-.83-4.93-.4-6.17.17-.63.3-1.08.63-1.37.89q-.22.19-.31.3l-.07.07q-.32.4-.8.41t-.8-.4l-.07-.08q-.1-.11-.31-.3c-.3-.26-.75-.6-1.38-.89-1.25-.57-3.25-1-6.18-.17-.3.09-.62.03-.87-.16s-.4-.49-.4-.8V6.5c0-.44.3-.84.73-.96 3.37-.96 5.87-.5 7.55.28q.47.22.84.45c.09-.4.23-.88.46-1.35.35-.73.93-1.48 1.84-2.04C14.32 2.33 15.5 2 17 2M9.44 7.64C8.31 7.1 6.54 6.7 4 7.28v9.65c2.74-.53 4.82-.09 6.29.59q.39.18.72.38L11 8.69l-.18-.17c-.3-.26-.75-.6-1.38-.88M18 14.03c0 .55-.45 1-1 1-1.8 0-2.72.76-3.24 1.62q-.31.53-.47 1.09.2-.12.43-.22c1.46-.68 3.54-1.12 6.28-.59V7.28q-1.1-.24-2-.27zm-2-9.96c-.67.1-1.17.3-1.54.52-.53.33-.87.76-1.09 1.2-.22.46-.31.93-.35 1.3q-.02.26-.02.42v6.93c.74-.67 1.72-1.17 3-1.35z" clipRule="evenodd" />
        <path d="M12.8 20.6" />
    </IconBase>
  ))
);

BookOpenFoldBold.displayName = 'BookOpenFoldBold';

// Triple export pattern
export { BookOpenFoldBold, BookOpenFoldBold as BookOpenFoldBoldIcon, BookOpenFoldBold as SiBookOpenFoldBold };
export default BookOpenFoldBold;
export type { BookOpenFoldBoldProps };
