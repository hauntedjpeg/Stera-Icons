import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TreeDeciduousFillProps = Omit<IconBaseProps, 'children'>;

const TreeDeciduousFill = memo(
  forwardRef<SVGSVGElement, TreeDeciduousFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c1.61 0 2.96 1.14 3.3 2.65 2 .12 3.57 1.8 3.57 3.84 0 .88-.3 1.69-.79 2.34 1.02.78 1.67 2 1.67 3.4 0 2.35-1.9 4.27-4.25 4.27H13V21c0 .55-.45 1-1 1s-1-.45-1-1v-2.25H8.5c-2.35 0-4.25-1.92-4.25-4.28 0-1.38.65-2.61 1.67-3.4-.5-.64-.8-1.45-.8-2.33 0-2.04 1.58-3.72 3.59-3.84.33-1.51 1.68-2.65 3.29-2.65" />
    </IconBase>
  ))
);

TreeDeciduousFill.displayName = 'TreeDeciduousFill';

// Triple export pattern
export { TreeDeciduousFill, TreeDeciduousFill as TreeDeciduousFillIcon, TreeDeciduousFill as SiTreeDeciduousFill };
export default TreeDeciduousFill;
export type { TreeDeciduousFillProps };
