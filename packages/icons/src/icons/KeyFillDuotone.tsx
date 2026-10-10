import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.63 4.16c2.54-2.55 6.67-2.55 9.21 0s2.55 6.67 0 9.22c-1.76 1.76-4.29 2.3-6.52 1.62l-1.82 1.83v2.13q-.01.34-.26.57-.26.21-.6.17l-2-.28V21c0 .41-.33.75-.75.75H3c-.41 0-.75-.34-.75-.75v-3.26q0-.32.22-.53L9 10.68c-.68-2.23-.14-4.76 1.63-6.52m6.94 2.27c-.57-.58-1.49-.61-2.1-.11l-.13.1-.1.13c-.51.62-.47 1.53.1 2.1.62.62 1.62.62 2.23 0 .58-.57.62-1.48.11-2.1z" clipRule="evenodd" opacity={.4} />
        <path d="M15.46 6.32c.62-.5 1.53-.47 2.11.1l.11.13c.5.62.47 1.53-.1 2.1-.62.62-1.62.62-2.24 0-.57-.57-.61-1.48-.1-2.1l.1-.12z" />
    </IconBase>
  ))
);

KeyFillDuotone.displayName = 'KeyFillDuotone';

// Triple export pattern
export { KeyFillDuotone, KeyFillDuotone as KeyFillDuotoneIcon, KeyFillDuotone as SiKeyFillDuotone };
export default KeyFillDuotone;
export type { KeyFillDuotoneProps };
