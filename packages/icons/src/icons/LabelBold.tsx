import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelBoldProps = Omit<IconBaseProps, 'children'>;

const LabelBold = memo(
  forwardRef<SVGSVGElement, LabelBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.46 4a4 4 0 0 1 3.25 1.67l3.27 4.59a3 3 0 0 1 0 3.48l-3.27 4.59A4 4 0 0 1 15.46 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM6 6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h9.46a2 2 0 0 0 1.62-.84l3.28-4.58a1 1 0 0 0 0-1.16l-3.28-4.58A2 2 0 0 0 15.46 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelBold.displayName = 'LabelBold';

// Triple export pattern (lucide-react style)
export { LabelBold, LabelBold as LabelBoldIcon, LabelBold as SiLabelBold };
export default LabelBold;
export type { LabelBoldProps };
