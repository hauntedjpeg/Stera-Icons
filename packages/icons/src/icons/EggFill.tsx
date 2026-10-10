import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EggFillProps = Omit<IconBaseProps, 'children'>;

const EggFill = memo(
  forwardRef<SVGSVGElement, EggFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c2.18 0 4.28 1.67 5.77 3.75a13.6 13.6 0 0 1 2.6 7.62c0 5.56-4.5 8.38-8.37 8.38s-8.37-2.82-8.37-8.38c0-2.7 1.07-5.5 2.6-7.62C7.72 3.8 9.83 2.13 12 2.13" />
    </IconBase>
  ))
);

EggFill.displayName = 'EggFill';

// Triple export pattern
export { EggFill, EggFill as EggFillIcon, EggFill as SiEggFill };
export default EggFill;
export type { EggFillProps };
