import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.63 4.16A6.52 6.52 0 1 1 13.33 15l-1.83 1.83v2.13a.75.75 0 0 1-.86.74l-2-.28V21c0 .41-.33.75-.75.75H3a.75.75 0 0 1-.75-.75v-3.26q0-.32.22-.53L9 10.68a6.5 6.5 0 0 1 1.63-6.52m6.94 2.27a1.6 1.6 0 0 0-2.1-.11l-.13.1-.1.13a1.58 1.58 0 1 0 2.44 0z" clipRule="evenodd" opacity={.4} />
        <path d="M15.46 6.32c.62-.5 1.53-.47 2.11.1l.11.13a1.58 1.58 0 1 1-2.45 0l.11-.12z" />
    </IconBase>
  ))
);

KeyFillDuotone.displayName = 'KeyFillDuotone';

// Triple export pattern (lucide-react style)
export { KeyFillDuotone, KeyFillDuotone as KeyFillDuotoneIcon, KeyFillDuotone as SiKeyFillDuotone };
export default KeyFillDuotone;
export type { KeyFillDuotoneProps };
