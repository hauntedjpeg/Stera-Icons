import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarCircleFillProps = Omit<IconBaseProps, 'children'>;

const DollarCircleFill = memo(
  forwardRef<SVGSVGElement, DollarCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m-.25 3.75c-.41 0-.75.34-.75.75v1.5h-.25c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h3c.55 0 1 .45 1 1s-.45 1-1 1H9c-.41 0-.75.34-.75.75s.34.75.75.75h2.5v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5h.75c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5h-3c-.55 0-1-.45-1-1s.45-1 1-1h3.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2v-1.5c0-.41-.34-.75-.75-.75" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarCircleFill.displayName = 'DollarCircleFill';

// Triple export pattern
export { DollarCircleFill, DollarCircleFill as DollarCircleFillIcon, DollarCircleFill as SiDollarCircleFill };
export default DollarCircleFill;
export type { DollarCircleFillProps };
