import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusBoldDuotone = memo(
  forwardRef<SVGSVGElement, PlusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 13H4c-.55 0-1-.45-1-1s.45-1 1-1h7zM20 11c.55 0 1 .45 1 1s-.45 1-1 1h-7v-2z" opacity={0.4} />
        <path d="M12 3c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

PlusBoldDuotone.displayName = 'PlusBoldDuotone';

// Triple export pattern
export { PlusBoldDuotone, PlusBoldDuotone as PlusBoldDuotoneIcon, PlusBoldDuotone as SiPlusBoldDuotone };
export default PlusBoldDuotone;
export type { PlusBoldDuotoneProps };
