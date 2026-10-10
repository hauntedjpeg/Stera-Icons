import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyBoldDuotone = memo(
  forwardRef<SVGSVGElement, KeyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.45 3.98c2.64-2.64 6.93-2.64 9.57 0s2.64 6.93 0 9.57c-1.8 1.8-4.35 2.37-6.62 1.73l-1.65 1.65v2.03q-.01.46-.35.76-.34.29-.8.23l-1.7-.24V21c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1v-3.26q0-.42.3-.7l6.42-6.44c-.64-2.27-.07-4.82 1.73-6.62M18.6 5.4c-1.86-1.86-4.88-1.86-6.74 0-1.38 1.38-1.74 3.4-1.07 5.1.15.38.06.8-.22 1.08L4 18.15V20h2.9v-1.45q0-.45.34-.75t.8-.24l1.7.25v-1.3q0-.4.3-.7l2.38-2.38.11-.1c.27-.2.64-.25.96-.12 1.71.67 3.73.3 5.11-1.07 1.86-1.86 1.86-4.88 0-6.74" clipRule="evenodd" opacity={.4} />
        <path d="M15.46 6.32c.62-.5 1.53-.47 2.11.1l.11.13c.5.62.47 1.53-.1 2.1-.62.62-1.62.62-2.24 0-.57-.57-.61-1.48-.1-2.1l.1-.12z" />
    </IconBase>
  ))
);

KeyBoldDuotone.displayName = 'KeyBoldDuotone';

// Triple export pattern
export { KeyBoldDuotone, KeyBoldDuotone as KeyBoldDuotoneIcon, KeyBoldDuotone as SiKeyBoldDuotone };
export default KeyBoldDuotone;
export type { KeyBoldDuotoneProps };
