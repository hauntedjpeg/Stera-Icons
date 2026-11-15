import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EqualsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EqualsBoldDuotone = memo(
  forwardRef<SVGSVGElement, EqualsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M20 7c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

EqualsBoldDuotone.displayName = 'EqualsBoldDuotone';

// Triple export pattern
export { EqualsBoldDuotone, EqualsBoldDuotone as EqualsBoldDuotoneIcon, EqualsBoldDuotone as SiEqualsBoldDuotone };
export default EqualsBoldDuotone;
export type { EqualsBoldDuotoneProps };
