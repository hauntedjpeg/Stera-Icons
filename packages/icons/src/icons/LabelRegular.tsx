import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelRegularProps = Omit<IconBaseProps, 'children'>;

const LabelRegular = memo(
  forwardRef<SVGSVGElement, LabelRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.46 4.25c1.2 0 2.34.58 3.05 1.57l3.27 4.58c.68.96.68 2.24 0 3.2l-3.27 4.58a3.8 3.8 0 0 1-3.05 1.57H6A3.75 3.75 0 0 1 2.25 16V8A3.75 3.75 0 0 1 6 4.25zM6 5.75c-1.24 0-2.25 1-2.25 2.25v8c0 1.24 1 2.25 2.25 2.25h9.46c.72 0 1.4-.35 1.83-.94l3.27-4.58c.31-.44.31-1.02 0-1.46L17.29 6.7c-.43-.59-1.1-.94-1.83-.94z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelRegular.displayName = 'LabelRegular';

// Triple export pattern (lucide-react style)
export { LabelRegular, LabelRegular as LabelRegularIcon, LabelRegular as SiLabelRegular };
export default LabelRegular;
export type { LabelRegularProps };
