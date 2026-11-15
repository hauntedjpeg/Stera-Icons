import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EqualsBoldProps = Omit<IconBaseProps, 'children'>;

const EqualsBold = memo(
  forwardRef<SVGSVGElement, EqualsBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 15c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1zM20 7c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

EqualsBold.displayName = 'EqualsBold';

// Triple export pattern
export { EqualsBold, EqualsBold as EqualsBoldIcon, EqualsBold as SiEqualsBold };
export default EqualsBold;
export type { EqualsBoldProps };
