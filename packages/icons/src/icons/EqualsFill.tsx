import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EqualsFillProps = Omit<IconBaseProps, 'children'>;

const EqualsFill = memo(
  forwardRef<SVGSVGElement, EqualsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 14.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 6.75c.69 0 1.25.56 1.25 1.25S20.69 9.25 20 9.25H4c-.69 0-1.25-.56-1.25-1.25S3.31 6.75 4 6.75z" />
    </IconBase>
  ))
);

EqualsFill.displayName = 'EqualsFill';

// Triple export pattern
export { EqualsFill, EqualsFill as EqualsFillIcon, EqualsFill as SiEqualsFill };
export default EqualsFill;
export type { EqualsFillProps };
