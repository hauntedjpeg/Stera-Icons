import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopcornRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PopcornRegularDuotone = memo(
  forwardRef<SVGSVGElement, PopcornRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.06 2.25h.14l.14.02h.02l.3.05h.03l.15.04h.02a3 3 0 0 1 .48.18h.01a3 3 0 0 1 .9.61l.1.1a3 3 0 0 1 .6.9 3.24 3.24 0 0 1 5.02 3.49l-.3 1.11h-1.55l.4-1.5a1.75 1.75 0 0 0-3.33-1.08l-.07.25a.75.75 0 0 1-1.43-.47 1.7 1.7 0 0 0-.12-1.22l-.04-.07-.08-.14-.04-.06a2 2 0 0 0-.37-.37q-.02 0-.05-.03l-.1-.07-.04-.02-.1-.05-.07-.03-.09-.03-.26-.08h-.07l-.09-.02h-.34l-.1.01-.06.01-.27.08q-.04 0-.08.03l-.07.03-.1.05-.04.02-.11.08-.03.01-.27.25-.04.05-.2.28q0 .04-.03.07a1.8 1.8 0 0 0-.12 1.22.75.75 0 0 1-1.43.47l-.02-.08-.05-.17a1.75 1.75 0 0 0-3.33 1.08l.4 1.5H4.33l-.3-1.11a3.25 3.25 0 0 1 5.02-3.5 3.2 3.2 0 0 1 1.6-1.6 3 3 0 0 1 .5-.17l.02-.01.14-.03.02-.01.3-.05h.03l.13-.01h.15l.06-.01z" opacity={.4} />
        <path fillRule="evenodd" d="M20.5 8.75a.75.75 0 0 1 .73.9l-1.95 8.99q-.14.66-.26 1.1a2.75 2.75 0 0 1-1.54 1.78q-.45.18-.92.2-.46.04-1.14.03H8.58q-.68 0-1.14-.02a3 3 0 0 1-.92-.2q-.7-.3-1.14-.93c-.2-.26-.3-.55-.4-.85q-.13-.45-.26-1.11L2.77 9.66a.75.75 0 0 1 .73-.91zM6.18 18.32q.14.67.24 1c.07.23.12.33.18.4q.2.3.52.43.1.05.43.08c.25.02.56.02 1.03.02h.57l-1.3-10H4.42zm4.48 1.93h2.71l1.74-10H9.35zm4.23 0h.53q.69 0 1.03-.02.33-.03.43-.08.33-.15.52-.42c.06-.08.11-.18.18-.41q.1-.33.23-1l1.76-8.07h-2.94z" clipRule="evenodd" />
    </IconBase>
  ))
);

PopcornRegularDuotone.displayName = 'PopcornRegularDuotone';

// Triple export pattern
export { PopcornRegularDuotone, PopcornRegularDuotone as PopcornRegularDuotoneIcon, PopcornRegularDuotone as SiPopcornRegularDuotone };
export default PopcornRegularDuotone;
export type { PopcornRegularDuotoneProps };
