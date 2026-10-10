import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.5 2.25c-.41 0-.75.34-.75.75s.34.75.75.75C9.7 3.75 8.25 5.21 8.25 7v6.44q-.3-.09-.64-.15c-.41-.06-.8.23-.85.64-.06.4.22.79.63.85L7 14.75c-2.07 0-3.75-1.68-3.75-3.75V7c0-2.62 2.13-4.75 4.75-4.75zM8 3.75C6.2 3.75 4.75 5.21 4.75 7v4l.01.23c.1 1.05.94 1.89 1.99 2V7c0-1.26.49-2.4 1.29-3.25z" clipRule="evenodd" opacity={.4} />
        <path d="M15.7 2.25c1.7 0 3.17 1.12 3.62 2.74V5l.01.03.04.12.12.42.4 1.38c.31 1.07.66 2.35.81 3.12l.14.79.13.83c.23 1.64-1.07 3.06-2.7 3.06h-2.16c.37 1.1.6 2.45.47 3.66-.1.84-.37 1.68-.97 2.32q-.93 1-2.61 1.02c-.27 0-.52-.14-.65-.38l-3-5.26c-.42-.73-1.15-1.21-1.96-1.33-.4-.06-.7-.44-.63-.85s.44-.7.85-.64c1.26.19 2.39.95 3.03 2.07l2.78 4.86c.53-.07.87-.27 1.1-.51q.46-.5.57-1.46c.14-1.3-.26-2.9-.76-3.91-.12-.24-.1-.51.03-.73q.23-.35.64-.36h3.28c.75 0 1.3-.64 1.2-1.35-.07-.54-.16-1.09-.25-1.55-.14-.7-.47-1.91-.77-2.98L18.06 6l-.13-.42-.03-.11-.01-.03v-.01l-.01-.02c-.27-.98-1.16-1.66-2.17-1.66H11.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ThumbsDownRegularDuotone.displayName = 'ThumbsDownRegularDuotone';

// Triple export pattern
export { ThumbsDownRegularDuotone, ThumbsDownRegularDuotone as ThumbsDownRegularDuotoneIcon, ThumbsDownRegularDuotone as SiThumbsDownRegularDuotone };
export default ThumbsDownRegularDuotone;
export type { ThumbsDownRegularDuotoneProps };
