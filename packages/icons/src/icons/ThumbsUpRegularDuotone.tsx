import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 2.25q1.69.02 2.61 1.02c.6.64.88 1.48.97 2.32.13 1.2-.1 2.55-.47 3.66h2.17c1.62 0 2.92 1.42 2.69 3.06l-.13.83-.14.8c-.15.76-.5 2.04-.8 3.1l-.4 1.39-.13.42-.04.12V19h-.01c-.45 1.63-1.93 2.75-3.61 2.75H11.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.2c1.02 0 1.91-.68 2.18-1.66v-.02l.02-.04.03-.11.13-.42.4-1.37c.3-1.07.63-2.29.77-2.98q.14-.7.25-1.55c.1-.7-.45-1.35-1.2-1.35H15c-.26 0-.5-.13-.64-.36-.13-.22-.15-.5-.03-.72.5-1.01.9-2.62.76-3.92q-.11-.96-.57-1.46c-.23-.24-.57-.44-1.1-.51l-2.78 4.86C10 9.76 8.87 10.52 7.61 10.7c-.41.06-.8-.23-.85-.64-.06-.4.22-.79.63-.85.81-.12 1.54-.6 1.95-1.33l3-5.26c.14-.24.4-.38.66-.38" />
        <path fillRule="evenodd" d="M7.4 9.22c-.42.06-.7.44-.64.85s.44.7.85.64q.33-.06.64-.15V17c0 1.8 1.46 3.25 3.25 3.25-.41 0-.75.34-.75.75s.34.75.75.75H8c-2.62 0-4.75-2.13-4.75-4.75v-4c0-2.07 1.68-3.75 3.75-3.75zm-.65 1.54c-1.12.13-2 1.08-2 2.24v4c0 1.8 1.46 3.25 3.25 3.25h.04c-.8-.85-1.29-2-1.29-3.25z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ThumbsUpRegularDuotone.displayName = 'ThumbsUpRegularDuotone';

// Triple export pattern
export { ThumbsUpRegularDuotone, ThumbsUpRegularDuotone as ThumbsUpRegularDuotoneIcon, ThumbsUpRegularDuotone as SiThumbsUpRegularDuotone };
export default ThumbsUpRegularDuotone;
export type { ThumbsUpRegularDuotoneProps };
