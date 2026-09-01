import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltBoldProps = Omit<IconBaseProps, 'children'>;

const LabelAltBold = memo(
  forwardRef<SVGSVGElement, LabelAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.97 4a3 3 0 0 1 2.44 1.26l3.57 5a3 3 0 0 1 0 3.48l-3.57 5A3 3 0 0 1 15.97 20H3.94a2 2 0 0 1-1.62-3.16l3.04-4.26a1 1 0 0 0 0-1.16L2.32 7.16A2 2 0 0 1 3.94 4zM3.94 6l3.04 4.26a3 3 0 0 1 0 3.48L3.94 18h12.03a1 1 0 0 0 .81-.42l3.58-5a1 1 0 0 0 0-1.16l-3.58-5a1 1 0 0 0-.8-.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltBold.displayName = 'LabelAltBold';

// Triple export pattern (lucide-react style)
export { LabelAltBold, LabelAltBold as LabelAltBoldIcon, LabelAltBold as SiLabelAltBold };
export default LabelAltBold;
export type { LabelAltBoldProps };
