import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AirplaneBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AirplaneBoldDuotone = memo(
  forwardRef<SVGSVGElement, AirplaneBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.9 13.2q-.19.25-.2.6c0 .55.45 1 1 1h.51l-3.66 5.04c-.53.73-1.37 1.16-2.27 1.16h-1.1L8 20.99c-.93-.12-1.52-1.12-1.13-2.02l1.83-4.22 1.48.05c.44.01.82-.26.96-.65l-.01.05-2.1 4.8h.26q.4 0 .65-.33l3.96-5.46zM9.28 3c.9 0 1.74.43 2.27 1.16L15.2 9.2h-.51c-.55 0-1 .45-1 1q0 .34.2.6l-.01-.01-3.96-5.46c-.15-.2-.4-.33-.65-.33h-.25l2.09 4.8.01.04c-.14-.38-.52-.65-.96-.64l-1.47.05-1.84-4.22C6.44 4.07 7.14 3 8.19 3z" opacity={0.4} />
        <path d="M11.2 13.83c-.02.56-.48.99-1.03.97l-3.45-.12-.73 1.3c-.37.66-1.08 1.07-1.85 1.07H3.5c-.86 0-1.53-.75-1.44-1.61L2.44 12l-.38-3.44c-.1-.86.58-1.61 1.44-1.61h.64c.77 0 1.48.41 1.85 1.08l.73 1.29 3.45-.12c.55-.02 1.01.41 1.03.97.02.55-.41 1.01-.97 1.03l-4.05.13c-.37.02-.72-.18-.9-.5L4.25 9q-.03-.06-.1-.06h-.03l.32 2.94v.07l.01.03v.12l-.33 2.94h.02q.08 0 .11-.06l1.03-1.82c.18-.32.53-.52.9-.5l4.05.13c.56.02.99.48.97 1.03m6.88-4.63c.98 0 1.92.39 2.62 1.08l1 1.01.07.08q.23.27.23.63 0 .42-.3.7l-1 1.02c-.7.69-1.64 1.08-2.62 1.08H14.7c-.55 0-1-.45-1-1s.45-1 1-1h3.38c.45 0 .88-.18 1.2-.5l.3-.3-.3-.3c-.31-.32-.75-.5-1.2-.5H14.7c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

AirplaneBoldDuotone.displayName = 'AirplaneBoldDuotone';

// Triple export pattern
export { AirplaneBoldDuotone, AirplaneBoldDuotone as AirplaneBoldDuotoneIcon, AirplaneBoldDuotone as SiAirplaneBoldDuotone };
export default AirplaneBoldDuotone;
export type { AirplaneBoldDuotoneProps };
