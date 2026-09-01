import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyRegularDuotone = memo(
  forwardRef<SVGSVGElement, KeyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.63 4.16A6.52 6.52 0 1 1 13.33 15l-1.83 1.83v2.13a.75.75 0 0 1-.86.74l-2-.28V21c0 .41-.33.75-.75.75H3a.75.75 0 0 1-.75-.75v-3.26q0-.32.22-.53L9 10.68a6.5 6.5 0 0 1 1.63-6.52m8.15 1.06a5.02 5.02 0 0 0-8.22 5.38c.11.28.04.6-.17.8l-6.64 6.65v2.2h3.4v-1.7a.75.75 0 0 1 .85-.74l2 .29v-1.58q0-.31.22-.54l2.38-2.37.08-.08c.2-.15.48-.19.72-.1a5.02 5.02 0 0 0 5.38-8.21" clipRule="evenodd" opacity={.4} />
        <path d="M15.62 6.51c.52-.42 1.29-.39 1.78.1l.09.1a1.33 1.33 0 1 1-2.06 0l.09-.1z" />
    </IconBase>
  ))
);

KeyRegularDuotone.displayName = 'KeyRegularDuotone';

// Triple export pattern (lucide-react style)
export { KeyRegularDuotone, KeyRegularDuotone as KeyRegularDuotoneIcon, KeyRegularDuotone as SiKeyRegularDuotone };
export default KeyRegularDuotone;
export type { KeyRegularDuotoneProps };
