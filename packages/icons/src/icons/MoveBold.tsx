import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveBoldProps = Omit<IconBaseProps, 'children'>;

const MoveBold = memo(
  forwardRef<SVGSVGElement, MoveBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12.1 2 .06.01.04.01.05.01.04.01q.15.05.27.13l.07.06.08.06 2.5 2.5c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0L13 5.4V11h5.59l-.8-.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l2.5 2.5q.09.08.16.2v.01q.09.15.11.3v.03L22 12q-.01.34-.2.6l-.1.1-2.5 2.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l.79-.8H13v5.59l.8-.8c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-2.5 2.5-.1.09q-.14.1-.3.16h-.05l-.05.02h-.03L12 22l-.16-.01h-.02l-.15-.05h-.01l-.15-.07h-.01l-.13-.1-.08-.06-2.5-2.5c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l.79.8V13H5.41l.8.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-2.5-2.5-.06-.07-.06-.07Q2.01 12.32 2 12l.01-.16v-.02q.04-.17.12-.3v-.02q.07-.12.16-.2l2.5-2.5c.4-.4 1.03-.4 1.42 0 .39.38.39 1.02 0 1.4l-.8.8H11V5.41l-.8.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l2.5-2.5.07-.06.13-.1h.01l.15-.07.16-.04h.02Q11.92 2 12 2z" />
    </IconBase>
  ))
);

MoveBold.displayName = 'MoveBold';

// Triple export pattern
export { MoveBold, MoveBold as MoveBoldIcon, MoveBold as SiMoveBold };
export default MoveBold;
export type { MoveBoldProps };
