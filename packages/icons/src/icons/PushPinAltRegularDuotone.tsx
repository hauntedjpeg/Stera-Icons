import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PushPinAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PushPinAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, PushPinAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.3 2.33c.77-.77 2.01-.77 2.78 0l6.6 6.6c.76.76.76 2 0 2.76-.53.53-1.3.71-2.01.48l-.64-.21q-.29-.09-.5.12l-2.45 2.44q-.18.2-.14.45l.43 2.15c.13.66-.07 1.33-.54 1.8l-.72.73c-.78.78-2.05.78-2.83 0l-7.93-7.93c-.78-.78-.78-2.05 0-2.83l.72-.72c.48-.47 1.15-.67 1.81-.54l2.15.43q.26.04.45-.14l2.44-2.44q.21-.22.12-.51l-.2-.64c-.24-.7-.06-1.48.47-2m1.72 1.06c-.18-.18-.47-.18-.65 0q-.2.2-.11.47l.2.63c.25.72.06 1.51-.48 2.05l-2.44 2.44c-.47.47-1.15.68-1.8.55L6.59 9.1q-.27-.05-.46.13l-.72.72c-.2.2-.2.52 0 .71l7.93 7.93c.2.2.51.2.7 0l.73-.72q.18-.2.13-.46l-.43-2.15c-.13-.65.08-1.33.55-1.8l2.44-2.44c.54-.54 1.33-.73 2.05-.49l.63.21q.27.09.47-.1c.18-.19.18-.48 0-.66z" clipRule="evenodd" opacity={.4} />
        <path d="m8.85 16.21-3.63 3.63c-.29.3-.76.3-1.06 0-.29-.3-.29-.77 0-1.06l3.62-3.63z" />
    </IconBase>
  ))
);

PushPinAltRegularDuotone.displayName = 'PushPinAltRegularDuotone';

// Triple export pattern
export { PushPinAltRegularDuotone, PushPinAltRegularDuotone as PushPinAltRegularDuotoneIcon, PushPinAltRegularDuotone as SiPushPinAltRegularDuotone };
export default PushPinAltRegularDuotone;
export type { PushPinAltRegularDuotoneProps };
