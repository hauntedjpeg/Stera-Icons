import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BookOpenBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BookOpenBoldDuotone = memo(
  forwardRef<SVGSVGElement, BookOpenBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.73 4.54c3.37-.96 5.87-.5 7.55.28.83.38 1.45.84 1.86 1.2q.3.27.47.46l.13.15q.2.22.24.5v.02l.02.15V19c0 .43-.28.81-.68.95s-.86 0-1.12-.35l-.07-.08q-.1-.11-.31-.3c-.3-.26-.75-.6-1.38-.89-1.24-.57-3.24-1-6.17-.17-.3.09-.62.03-.87-.16s-.4-.49-.4-.8V5.5c0-.44.3-.84.73-.96m6.71 2.1C8.31 6.1 6.54 5.7 4 6.28v9.65c2.74-.53 4.82-.09 6.28.59q.39.19.72.37V7.7l-.18-.17c-.3-.26-.75-.6-1.38-.88" clipRule="evenodd" />
        <path d="M13.72 4.82c1.68-.78 4.18-1.24 7.55-.28.43.12.73.52.73.96v11.7c0 .31-.15.61-.4.8s-.57.25-.87.16c-2.93-.83-4.93-.4-6.17.17-.63.3-1.09.63-1.38.89q-.22.19-.31.3l-.07.07v.02l-.04.03q.23-.27.24-.64v-2.1q.33-.2.72-.38c1.46-.68 3.54-1.12 6.28-.59V6.28c-2.53-.57-4.3-.17-5.44.36-.63.29-1.09.62-1.38.88l-.18.17V7.3l-.01-.15v-.02q-.06-.28-.24-.5h-.01l-.13-.15q-.15-.19-.47-.46L12 5.9c.4-.34.98-.74 1.72-1.08" opacity={.4} />
    </IconBase>
  ))
);

BookOpenBoldDuotone.displayName = 'BookOpenBoldDuotone';

// Triple export pattern
export { BookOpenBoldDuotone, BookOpenBoldDuotone as BookOpenBoldDuotoneIcon, BookOpenBoldDuotone as SiBookOpenBoldDuotone };
export default BookOpenBoldDuotone;
export type { BookOpenBoldDuotoneProps };
