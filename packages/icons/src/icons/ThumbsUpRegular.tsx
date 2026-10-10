import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpRegularProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpRegular = memo(
  forwardRef<SVGSVGElement, ThumbsUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.7 21.75c1.7 0 3.17-1.12 3.62-2.74V19l.01-.03.04-.12.12-.42c.11-.36.26-.85.4-1.38.31-1.07.66-2.35.81-3.12.1-.49.19-1.07.27-1.62.23-1.64-1.07-3.06-2.7-3.06h-2.16c.37-1.1.6-2.45.47-3.66-.1-.84-.37-1.68-.97-2.32q-.93-1-2.61-1.02c-.27 0-.52.14-.65.38l-3 5.26C8.85 8.73 7.96 9.25 7 9.25c-2.07 0-3.75 1.68-3.75 3.75v4c0 2.62 2.13 4.75 4.75 4.75zm-4.2-1.5c-1.8 0-3.25-1.46-3.25-3.25v-6.44c1-.31 1.86-.99 2.4-1.92l2.77-4.86c.53.07.87.27 1.1.51q.46.5.57 1.46c.14 1.3-.26 2.9-.76 3.92-.12.23-.1.5.03.72q.23.35.64.36h3.28c.75 0 1.3.64 1.2 1.35-.07.54-.16 1.09-.25 1.55-.14.7-.47 1.91-.77 2.98l-.4 1.37-.13.42-.03.11-.01.03v.01l-.01.02c-.27.98-1.16 1.66-2.17 1.66zm-3.5 0c-1.8 0-3.25-1.46-3.25-3.25v-4c0-1.16.88-2.11 2-2.23V17c0 1.26.49 2.4 1.29 3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsUpRegular.displayName = 'ThumbsUpRegular';

// Triple export pattern
export { ThumbsUpRegular, ThumbsUpRegular as ThumbsUpRegularIcon, ThumbsUpRegular as SiThumbsUpRegular };
export default ThumbsUpRegular;
export type { ThumbsUpRegularProps };
