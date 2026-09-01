import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyBoldProps = Omit<IconBaseProps, 'children'>;

const KeyBold = memo(
  forwardRef<SVGSVGElement, KeyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.46 6.32c.62-.5 1.54-.47 2.11.1l.11.13a1.58 1.58 0 1 1-2.45 0l.11-.12z" />
        <path fillRule="evenodd" d="M10.45 3.98a6.77 6.77 0 1 1 2.95 11.3l-1.65 1.65v2.03a1 1 0 0 1-1.14 1l-1.72-.25V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.26a1 1 0 0 1 .3-.7l6.42-6.44a6.8 6.8 0 0 1 1.73-6.62M18.6 5.4a4.77 4.77 0 0 0-7.8 5.1 1 1 0 0 1-.23 1.08L4 18.15V20h2.9v-1.45a1 1 0 0 1 1.14-.99l1.7.25v-1.3a1 1 0 0 1 .3-.7l2.38-2.38.11-.1a1 1 0 0 1 .96-.12A4.77 4.77 0 0 0 18.6 5.4" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyBold.displayName = 'KeyBold';

// Triple export pattern (lucide-react style)
export { KeyBold, KeyBold as KeyBoldIcon, KeyBold as SiKeyBold };
export default KeyBold;
export type { KeyBoldProps };
