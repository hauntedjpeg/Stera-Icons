import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenFoldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenFoldBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenFoldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.73 5.54c3.37-.96 5.87-.5 7.55.28q.47.22.85.45-.07.34-.1.6l-.03.65V20q.01.46.32.73l-.04-.04-.08-.09-.07-.08q-.1-.11-.31-.3c-.3-.26-.75-.6-1.38-.89-1.24-.57-3.24-1-6.17-.17-.3.09-.62.03-.87-.16s-.4-.49-.4-.8V6.5c0-.44.3-.84.73-.96m6.71 2.1C8.31 7.1 6.54 6.7 4 7.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.18.72.37V8.7l-.18-.17c-.3-.26-.75-.6-1.38-.88" clipRule="evenodd" opacity={0.4} />
        <path d="M18 5q1.47.04 3.27.54c.43.12.73.52.73.96v11.7c0 .31-.15.61-.4.8s-.57.25-.87.16c-2.93-.83-4.93-.4-6.17.17-.63.3-1.09.63-1.38.89q-.22.19-.31.3l-.06.06q.19-.25.2-.58v-.59l.01-.26q.04-.62.27-1.42l.43-.21c1.46-.68 3.54-1.12 6.28-.59V7.28q-1.1-.24-2-.27z" opacity={0.4} />
        <path fillRule="evenodd" d="M17 2q.42 0 .7.3.3.28.3.7v11.03c0 .55-.45 1-1 1-1.16 0-1.92.31-2.45.72-.54.42-.9 1-1.14 1.62s-.35 1.28-.39 1.78l-.01.26V20c0 .48-.35.89-.8.98h-.01l-.08.01h-.1L12 21h-.07c-.52-.04-.93-.47-.93-1V7.52q0-.25.03-.64c.06-.52.2-1.23.55-1.96s.93-1.48 1.84-2.04C14.32 2.33 15.5 2 17 2m-1 2.07c-.67.1-1.17.3-1.54.52-.53.33-.87.76-1.08 1.2-.23.46-.32.93-.36 1.3q-.02.26-.02.42v6.93q.15-.14.33-.27 1.05-.84 2.67-1.08z" clipRule="evenodd" />
    </IconBase>
  ))
);

BookOpenFoldBoldDuotone.displayName = 'BookOpenFoldBoldDuotone';

// Triple export pattern
export { BookOpenFoldBoldDuotone, BookOpenFoldBoldDuotone as BookOpenFoldBoldDuotoneIcon, BookOpenFoldBoldDuotone as SiBookOpenFoldBoldDuotone };
export default BookOpenFoldBoldDuotone;
export type { BookOpenFoldBoldDuotoneProps };
