import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusBoldProps = Omit<IconBaseProps, 'children'>;

const PlusBold = memo(
  forwardRef<SVGSVGElement, PlusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3c.55 0 1 .45 1 1v7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7v7c0 .55-.45 1-1 1s-1-.45-1-1v-7H4c-.55 0-1-.45-1-1s.45-1 1-1h7V4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

PlusBold.displayName = 'PlusBold';

// Triple export pattern
export { PlusBold, PlusBold as PlusBoldIcon, PlusBold as SiPlusBold };
export default PlusBold;
export type { PlusBoldProps };
