import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopcornRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PopcornRegularDuotone = memo(
  forwardRef<SVGSVGElement, PopcornRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.06 2.25h.14l.14.02h.02l.3.05h.03l.15.04h.02l.23.08.25.1h.01q.44.2.78.5l.12.11.1.1.1.12q.3.35.5.77c.76-.54 1.75-.74 2.72-.48 1.73.46 2.76 2.24 2.3 3.98l-.3 1.11h-1.55l.4-1.5c.25-.94-.3-1.9-1.24-2.15-.87-.23-1.77.24-2.09 1.07l-.07.25c-.14.35-.52.55-.9.45-.4-.1-.64-.52-.53-.92q.14-.55-.05-1.05l-.03-.07q0-.04-.04-.1l-.04-.07-.04-.07-.04-.07-.04-.06-.06-.07-.06-.07-.05-.06-.06-.05-.07-.06-.07-.06q-.02 0-.05-.03l-.1-.07-.04-.02-.1-.05-.07-.03-.09-.03q-.12-.06-.26-.08h-.07l-.09-.02h-.34l-.1.01-.06.01-.27.08q-.04 0-.08.03l-.07.03-.1.05-.04.02-.11.08-.03.01-.09.07-.06.06-.05.05-.07.07-.04.05-.06.07-.05.07-.04.07-.04.07-.04.07-.05.1-.02.07c-.12.32-.15.7-.05 1.05.1.4-.13.81-.53.92-.38.1-.76-.1-.9-.45l-.02-.08-.05-.17c-.32-.83-1.22-1.3-2.1-1.07-.93.25-1.48 1.21-1.23 2.15l.4 1.5H4.33l-.3-1.11c-.46-1.74.57-3.52 2.3-3.98.97-.26 1.96-.06 2.72.48q.3-.65.82-1.1.35-.3.77-.5h.02l.24-.1.25-.07.02-.01.14-.03.02-.01.3-.05h.03l.13-.01h.15l.06-.01z" opacity={.4} />
        <path fillRule="evenodd" d="M20.5 8.75q.36 0 .58.28t.15.63l-1.95 8.98q-.14.66-.26 1.1c-.1.31-.2.6-.4.86q-.44.61-1.14.93-.45.17-.92.2-.46.02-1.14.02H8.58q-.68 0-1.14-.02-.48-.03-.92-.2-.7-.3-1.14-.93c-.2-.26-.3-.55-.4-.85q-.13-.45-.26-1.11L2.77 9.66q-.07-.35.15-.63.22-.27.58-.28zM6.18 18.32q.14.67.24 1c.07.23.12.33.18.4q.2.3.52.43.1.05.43.08c.25.02.56.02 1.03.02h.57l-1.3-10H4.42zm4.48 1.93h2.71l1.74-10H9.35zm4.23 0h.53q.69 0 1.03-.02.33-.03.43-.08.33-.15.52-.42c.06-.08.11-.18.18-.41q.1-.33.23-1l1.76-8.07h-2.94z" clipRule="evenodd" />
    </IconBase>
  ))
);

PopcornRegularDuotone.displayName = 'PopcornRegularDuotone';

// Triple export pattern
export { PopcornRegularDuotone, PopcornRegularDuotone as PopcornRegularDuotoneIcon, PopcornRegularDuotone as SiPopcornRegularDuotone };
export default PopcornRegularDuotone;
export type { PopcornRegularDuotoneProps };
