import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SwordBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwordBoldDuotone = memo(
  forwardRef<SVGSVGElement, SwordBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.54 3.54c.25-.25.61-.35.95-.26l3.46.86q.27.07.47.27l7.94 7.94-1.42 1.41L7.2 6.02l-1.58-.4.4 1.58 7.74 7.74-1.41 1.42-7.94-7.94q-.15-.15-.22-.34l-.04-.13-.87-3.46c-.08-.34.02-.7.26-.95" opacity={.4} />
        <path d="M17.38 11.33c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41l-1.43 1.44v1.76l1.7 1.7 1.02.35q.28.09.48.3l.24.24c.48.47.48 1.24 0 1.72l-.56.55-.09.09c-.44.36-1.09.36-1.53 0l-.1-.09-.24-.24q-.15-.16-.24-.34l-.05-.13-.34-1.03-1.7-1.7h-1.77l-1.44 1.44c-.4.39-1.02.39-1.41 0-.4-.4-.4-1.03 0-1.42z" />
    </IconBase>
  ))
);

SwordBoldDuotone.displayName = 'SwordBoldDuotone';

// Triple export pattern
export { SwordBoldDuotone, SwordBoldDuotone as SwordBoldDuotoneIcon, SwordBoldDuotone as SiSwordBoldDuotone };
export default SwordBoldDuotone;
export type { SwordBoldDuotoneProps };
