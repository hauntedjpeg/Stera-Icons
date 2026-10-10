import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopcornFillProps = Omit<IconBaseProps, 'children'>;

const PopcornFill = memo(
  forwardRef<SVGSVGElement, PopcornFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.06 2.13h.15l.15.02h.02l.12.01.07.02.12.02h.03l.15.04.03.01q.15.04.28.1h.03l.09.04q.59.24 1.02.66l.13.13q.31.33.53.74l.02.04a3.37 3.37 0 0 1 5.09 3.7l-.26.96h.67a.88.88 0 0 1 .86 1.07l-1.96 8.98q-.14.64-.26 1.11-.14.47-.41.9-.46.64-1.2.96a3 3 0 0 1-.96.21q-.48.03-1.15.02H8.58q-.67 0-1.15-.02a3 3 0 0 1-.96-.21q-.73-.31-1.2-.97a3 3 0 0 1-.4-.89q-.14-.46-.27-1.11L2.64 9.69a.88.88 0 0 1 .86-1.06h.67l-.26-.96A3.38 3.38 0 0 1 9 3.96q.22-.44.55-.78l.13-.13.07-.06.04-.04a3.4 3.4 0 0 1 1.31-.7l.03-.01h.02l.47-.1h.19l.13-.01h.12M6.31 18.29c.1.47.16.77.23 1 .06.21.12.3.16.36q.18.26.47.38c.06.03.16.06.39.08l1.02.02H9l-1.27-9.75H4.6zm12.38-7.91h-1.95l-1.7 9.74h.38l1.02-.01q.31-.03.4-.08.27-.11.46-.38.07-.06.16-.36c.07-.23.13-.53.23-1l1.72-7.91h-.72m-6.85-6.5-.09.02h-.04l-.27.07-.06.03-.3.16-.05.03-.06.06-.06.05-.11.11-.05.05-.05.07-.04.05-.06.09-.02.04-.05.1-.02.05-.04.1q-.16.46-.04.96a.88.88 0 0 1-1.66.54l-.08-.24a1.63 1.63 0 0 0-3.09 1l.38 1.4h12.04l.38-1.4a1.63 1.63 0 0 0-3.14-.85.88.88 0 1 1-1.7-.45q.14-.52-.04-.98l-.02-.07-.03-.07-.05-.09-.02-.04a2 2 0 0 0-.44-.48l-.04-.03-.3-.16-.06-.02-.28-.08h-.03l-.1-.02h-.31" clipRule="evenodd" />
    </IconBase>
  ))
);

PopcornFill.displayName = 'PopcornFill';

// Triple export pattern
export { PopcornFill, PopcornFill as PopcornFillIcon, PopcornFill as SiPopcornFill };
export default PopcornFill;
export type { PopcornFillProps };
