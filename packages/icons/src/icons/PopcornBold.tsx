import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopcornBoldProps = Omit<IconBaseProps, 'children'>;

const PopcornBold = memo(
  forwardRef<SVGSVGElement, PopcornBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.1 2h.06l.18.02h.09l.1.02h.04q.24.05.49.13h.03l.35.14.04.02a4 4 0 0 1 .94.64l.1.1.01.02q.3.3.52.7a3.49 3.49 0 0 1 5.16 3.91l-.21.8h.5a1 1 0 0 1 .98 1.21l-1.95 8.98q-.14.66-.27 1.13-.13.48-.43.93a3 3 0 0 1-1.25 1q-.5.2-1 .23-.49.02-1.16.02H8.58q-.67 0-1.16-.02a3 3 0 0 1-1-.23 3 3 0 0 1-1.25-1q-.29-.45-.43-.93-.13-.47-.27-1.13L2.52 9.71A1 1 0 0 1 3.5 8.5H4l-.21-.8a3.5 3.5 0 0 1 5.16-3.92 3.5 3.5 0 0 1 1.4-1.36l.06-.04.1-.04.05-.03.25-.1.1-.04h.03q.24-.08.49-.12h.03l.11-.02.08-.01.19-.02h.26M6.43 18.27c.1.46.16.76.23.98.06.21.1.29.14.33a1 1 0 0 0 .42.34q.04.04.35.06c.23.02.53.02 1 .02h.3l-1.25-9.5H4.74zM10.88 20h2.28l1.65-9.5H9.64zm4.3 0h.24q.69 0 1.01-.02c.22-.01.3-.04.35-.06a1 1 0 0 0 .42-.34c.03-.04.08-.12.14-.33l.23-.98 1.69-7.77h-2.42zm-3.3-16a2 2 0 0 0-.4.1l-.06.02-.13.06-.07.04q-.02 0-.05.03l-.06.04-.22.2-.04.05-.14.2-.03.04-.09.21q-.15.44-.04.9a1 1 0 0 1-1.93.52 1.5 1.5 0 0 0-2.9.77l.35 1.32h11.86l.35-1.32a1.5 1.5 0 0 0-2.9-.77 1 1 0 0 1-1.93-.52 1.5 1.5 0 0 0-.08-.99l-.02-.05-.11-.2-.03-.04a2 2 0 0 0-.38-.36l-.06-.03-.13-.08-.05-.02-.3-.09-.07-.01-.09-.01h-.25" clipRule="evenodd" />
    </IconBase>
  ))
);

PopcornBold.displayName = 'PopcornBold';

// Triple export pattern (lucide-react style)
export { PopcornBold, PopcornBold as PopcornBoldIcon, PopcornBold as SiPopcornBold };
export default PopcornBold;
export type { PopcornBoldProps };
