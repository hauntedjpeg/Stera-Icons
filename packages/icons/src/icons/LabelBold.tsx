import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelBoldProps = Omit<IconBaseProps, 'children'>;

const LabelBold = memo(
  forwardRef<SVGSVGElement, LabelBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.46 4c1.29 0 2.5.62 3.25 1.67l3.27 4.59c.75 1.04.75 2.44 0 3.48l-3.27 4.59c-.75 1.05-1.96 1.67-3.25 1.67H6c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4zM6 6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9.46c.64 0 1.25-.31 1.62-.84l3.28-4.58c.24-.35.24-.81 0-1.16l-3.28-4.58C16.71 6.3 16.1 6 15.46 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelBold.displayName = 'LabelBold';

// Triple export pattern
export { LabelBold, LabelBold as LabelBoldIcon, LabelBold as SiLabelBold };
export default LabelBold;
export type { LabelBoldProps };
