import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PushPinAltFillDuotone = memo(
  forwardRef<SVGSVGElement, PushPinAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.3 2.33c.77-.77 2.01-.77 2.78 0l6.6 6.6c.76.76.76 2 0 2.76-.53.53-1.3.71-2.01.48l-.64-.21c-.17-.06-.37-.02-.5.12l-2.45 2.44q-.18.2-.14.45l.43 2.15c.13.66-.07 1.33-.54 1.8l-.72.73c-.78.78-2.05.78-2.83 0l-7.93-7.93c-.78-.78-.78-2.04 0-2.83l.72-.72c.48-.47 1.15-.67 1.81-.54l2.15.43q.26.04.45-.14l2.44-2.44q.21-.22.12-.51l-.2-.64c-.24-.7-.06-1.48.47-2" opacity={.4} />
        <path d="M9.02 16.4 5.4 20.01c-.4.39-1.02.39-1.41 0-.4-.4-.4-1.03 0-1.42l3.62-3.62z" />
    </IconBase>
  ))
);

PushPinAltFillDuotone.displayName = 'PushPinAltFillDuotone';

// Triple export pattern
export { PushPinAltFillDuotone, PushPinAltFillDuotone as PushPinAltFillDuotoneIcon, PushPinAltFillDuotone as SiPushPinAltFillDuotone };
export default PushPinAltFillDuotone;
export type { PushPinAltFillDuotoneProps };
