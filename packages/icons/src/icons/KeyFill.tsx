import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyFillProps = Omit<IconBaseProps, 'children'>;

const KeyFill = memo(
  forwardRef<SVGSVGElement, KeyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.63 4.16A6.52 6.52 0 1 1 13.33 15l-1.83 1.83v2.13a.75.75 0 0 1-.86.74l-2-.28V21c0 .41-.33.75-.75.75H3a.75.75 0 0 1-.75-.75v-3.26q0-.32.22-.53L9 10.68a6.5 6.5 0 0 1 1.63-6.52m6.94 2.27a1.6 1.6 0 0 0-2.1-.11l-.13.1-.1.13a1.58 1.58 0 1 0 2.44 0z" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyFill.displayName = 'KeyFill';

// Triple export pattern (lucide-react style)
export { KeyFill, KeyFill as KeyFillIcon, KeyFill as SiKeyFill };
export default KeyFill;
export type { KeyFillProps };
