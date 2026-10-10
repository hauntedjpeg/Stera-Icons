import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyRegularDuotone = memo(
  forwardRef<SVGSVGElement, KeyRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.63 4.16c2.54-2.55 6.67-2.55 9.21 0s2.55 6.67 0 9.22c-1.76 1.76-4.29 2.3-6.52 1.62l-1.82 1.83v2.13q-.01.34-.26.57-.26.21-.6.17l-2-.28V21c0 .41-.33.75-.75.75H3c-.41 0-.75-.34-.75-.75v-3.26q0-.32.22-.53L9 10.68c-.68-2.23-.14-4.76 1.63-6.52m8.15 1.06c-1.96-1.96-5.14-1.96-7.1 0-1.45 1.45-1.82 3.58-1.12 5.38.11.28.04.6-.17.8l-6.64 6.65v2.2h3.4v-1.7q0-.33.25-.56.26-.22.6-.18l2 .29v-1.58q0-.31.22-.54l2.38-2.37.08-.08c.2-.15.48-.19.72-.1 1.8.71 3.93.34 5.38-1.12 1.96-1.95 1.96-5.13 0-7.09" clipRule="evenodd" opacity={.4} />
        <path d="M15.62 6.51c.52-.42 1.29-.39 1.78.1l.09.1c.42.52.4 1.29-.1 1.77-.51.52-1.35.52-1.87 0-.49-.48-.52-1.25-.1-1.77l.1-.1z" />
    </IconBase>
  ))
);

KeyRegularDuotone.displayName = 'KeyRegularDuotone';

// Triple export pattern
export { KeyRegularDuotone, KeyRegularDuotone as KeyRegularDuotoneIcon, KeyRegularDuotone as SiKeyRegularDuotone };
export default KeyRegularDuotone;
export type { KeyRegularDuotoneProps };
