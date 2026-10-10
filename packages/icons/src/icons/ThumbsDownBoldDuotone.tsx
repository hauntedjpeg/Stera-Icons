import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.5 2h-.1c-.5.06-.9.48-.9 1s.4.94.9 1h.1c-1.66 0-3 1.34-3 3v6.26q-.41-.15-.86-.21c-.54-.08-1.05.3-1.13.84-.08.55.3 1.06.85 1.14L7 15c-2.2 0-4-1.8-4-4V7c0-2.76 2.24-5 5-5zM7.46 4.05C6.06 4.3 5 5.53 5 7v4l.01.2c.09.84.7 1.53 1.49 1.73V7c0-1.1.36-2.12.96-2.95" clipRule="evenodd" opacity={.4} />
        <path d="M15.7 2c1.8 0 3.37 1.2 3.86 2.92v.01l.01.03.04.12.12.42.4 1.39c.31 1.06.66 2.35.82 3.13.1.5.19 1.08.27 1.63.25 1.8-1.17 3.35-2.94 3.35h-1.82c.31 1.07.5 2.3.37 3.44-.1.86-.39 1.77-1.04 2.46Q14.77 21.99 13 22c-.36 0-.69-.2-.87-.5l-3-5.27c-.38-.66-1.04-1.1-1.77-1.2-.55-.08-.93-.6-.85-1.14s.59-.92 1.13-.84c1.34.2 2.54 1 3.22 2.19l2.69 4.7q.55-.12.78-.4.4-.41.51-1.32c.14-1.24-.25-2.8-.73-3.77-.16-.31-.14-.68.04-.98s.5-.47.85-.47h3.28c.6 0 1.03-.51.96-1.07l-.25-1.53c-.14-.68-.47-1.9-.77-2.96l-.4-1.37-.13-.42-.03-.1-.01-.04-.01-.04C17.4 4.6 16.6 4 15.7 4H11.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

ThumbsDownBoldDuotone.displayName = 'ThumbsDownBoldDuotone';

// Triple export pattern
export { ThumbsDownBoldDuotone, ThumbsDownBoldDuotone as ThumbsDownBoldDuotoneIcon, ThumbsDownBoldDuotone as SiThumbsDownBoldDuotone };
export default ThumbsDownBoldDuotone;
export type { ThumbsDownBoldDuotoneProps };
