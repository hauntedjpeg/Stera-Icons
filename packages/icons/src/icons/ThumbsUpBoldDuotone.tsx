import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M7.36 8.97c-.55.08-.93.6-.85 1.14s.59.92 1.13.84q.45-.06.86-.21V17c0 1.66 1.34 3 3 3h-.1c-.5.06-.9.48-.9 1 0 .55.45 1 1 1H8c-2.76 0-5-2.24-5-5v-4c0-2.2 1.8-4 4-4h.18zm-.86 2.1c-.8.2-1.4.89-1.49 1.73L5 13v4c0 1.47 1.06 2.7 2.46 2.95-.6-.83-.96-1.85-.96-2.95z" clipRule="evenodd" opacity={.4} />
        <path d="M15.7 22c1.8 0 3.37-1.2 3.86-2.92v-.01l.01-.03.04-.12.12-.42.4-1.39c.31-1.06.66-2.35.82-3.13.1-.5.19-1.08.27-1.63.25-1.8-1.17-3.35-2.94-3.35h-1.82c.31-1.07.5-2.3.37-3.44-.1-.86-.39-1.77-1.04-2.46Q14.77 2.01 13 2c-.36 0-.69.2-.87.5l-3 5.27c-.38.66-1.04 1.1-1.77 1.2-.55.08-.93.6-.85 1.14s.59.92 1.13.84c1.34-.2 2.54-1 3.22-2.19l2.69-4.7c.38.07.62.23.78.4q.4.41.51 1.32c.14 1.24-.25 2.8-.73 3.77-.16.31-.14.68.04.98s.5.47.85.47h3.28c.6 0 1.03.51.96 1.07l-.25 1.53c-.14.68-.47 1.9-.77 2.96l-.4 1.37-.13.42-.03.1-.01.04-.01.04C17.4 19.4 16.6 20 15.7 20H11.5c-.55 0-1 .45-1 1s.45 1 1 1z" />
    </IconBase>
  ))
);

ThumbsUpBoldDuotone.displayName = 'ThumbsUpBoldDuotone';

// Triple export pattern
export { ThumbsUpBoldDuotone, ThumbsUpBoldDuotone as ThumbsUpBoldDuotoneIcon, ThumbsUpBoldDuotone as SiThumbsUpBoldDuotone };
export default ThumbsUpBoldDuotone;
export type { ThumbsUpBoldDuotoneProps };
