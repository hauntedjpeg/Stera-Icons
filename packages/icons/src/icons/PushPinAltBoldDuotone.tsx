import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PushPinAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, PushPinAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.13 2.15c.86-.86 2.26-.86 3.13 0l6.6 6.6c.85.86.85 2.26 0 3.12-.6.6-1.48.8-2.27.53l-.63-.2q-.16-.05-.26.05l-2.44 2.45q-.1.1-.07.22l.43 2.15c.15.74-.08 1.5-.62 2.03l-.72.72c-.87.88-2.3.88-3.18 0L4.18 11.9c-.88-.88-.88-2.3 0-3.18L4.9 8c.53-.53 1.3-.77 2.03-.62l2.15.43q.13.03.23-.07l2.44-2.44q.1-.11.06-.25l-.21-.64c-.27-.8-.06-1.67.53-2.26m1.71 1.41c-.08-.08-.21-.08-.3 0q-.08.1-.05.22l.21.63c.27.81.06 1.7-.54 2.3l-2.44 2.45c-.53.53-1.3.76-2.03.61l-2.15-.43q-.13-.02-.23.07l-.72.72c-.1.1-.1.26 0 .35l7.93 7.93c.1.1.25.1.35 0l.72-.72q.09-.1.07-.23l-.43-2.15c-.15-.73.08-1.5.61-2.03l2.45-2.44c.6-.6 1.49-.81 2.3-.54l.63.2q.13.04.22-.04c.08-.09.08-.22 0-.3z" clipRule="evenodd" opacity={.4} />
        <path d="M8.85 16.57 5.4 20.02c-.4.39-1.02.39-1.41 0-.4-.4-.4-1.03 0-1.42l3.44-3.45zM9.55 14.45h.01l-.02-.01z" />
    </IconBase>
  ))
);

PushPinAltBoldDuotone.displayName = 'PushPinAltBoldDuotone';

// Triple export pattern
export { PushPinAltBoldDuotone, PushPinAltBoldDuotone as PushPinAltBoldDuotoneIcon, PushPinAltBoldDuotone as SiPushPinAltBoldDuotone };
export default PushPinAltBoldDuotone;
export type { PushPinAltBoldDuotoneProps };
