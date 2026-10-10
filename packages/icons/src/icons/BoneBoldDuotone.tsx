import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BoneBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BoneBoldDuotone = memo(
  forwardRef<SVGSVGElement, BoneBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.91 5.09c.75.1 1.47.44 2.04 1.01 1.4 1.4 1.4 3.68 0 5.08-1.16 1.16-2.9 1.36-4.27.6l-4.9 4.9c.76 1.36.56 3.11-.6 4.27-1.4 1.4-3.67 1.4-5.08 0-.57-.57-.9-1.3-1.01-2.04q.6.1 1.21-.04c.54-.1.9-.63.79-1.17l-.03-.1q.08.23.03.5c-.1.5.04 1.05.43 1.44.62.62 1.63.62 2.25 0 .62-.63.62-1.63 0-2.25-.4-.4-.4-1.03 0-1.42l6.1-6.1.08-.07q.27-.22.63-.23.41 0 .7.3c.63.62 1.63.62 2.25 0s.62-1.63 0-2.25c-.39-.4-.93-.54-1.43-.44.38-.07.7-.37.78-.78q.12-.6.03-1.21" opacity={.4} />
        <path d="M12.82 3.05c1.4-1.4 3.68-1.4 5.08 0 .88.89 1.2 2.12.98 3.25-.11.54-.64.9-1.18.79s-.9-.64-.78-1.18c.1-.51-.05-1.05-.44-1.44-.62-.62-1.62-.62-2.25 0s-.62 1.62 0 2.24c.4.4.4 1.03 0 1.42l-6.1 6.1c-.4.4-1.02.4-1.42 0-.62-.62-1.62-.62-2.24 0s-.62 1.63 0 2.25c.39.4.93.54 1.44.44.54-.11 1.07.24 1.18.78s-.25 1.07-.79 1.18c-1.13.22-2.36-.1-3.25-.98-1.4-1.4-1.4-3.68 0-5.08 1.16-1.16 2.9-1.36 4.27-.6l4.9-4.9c-.76-1.36-.56-3.11.6-4.27" />
    </IconBase>
  ))
);

BoneBoldDuotone.displayName = 'BoneBoldDuotone';

// Triple export pattern
export { BoneBoldDuotone, BoneBoldDuotone as BoneBoldDuotoneIcon, BoneBoldDuotone as SiBoneBoldDuotone };
export default BoneBoldDuotone;
export type { BoneBoldDuotoneProps };
