import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltBoldProps = Omit<IconBaseProps, 'children'>;

const LabelAltBold = memo(
  forwardRef<SVGSVGElement, LabelAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.97 4c.97 0 1.88.47 2.44 1.26l3.57 5c.75 1.04.75 2.44 0 3.48l-3.57 5c-.56.8-1.47 1.26-2.44 1.26H3.94c-1.62 0-2.57-1.84-1.62-3.16l3.04-4.26c.24-.35.24-.81 0-1.16L2.32 7.16C1.37 5.84 2.32 4 3.94 4zM3.94 6l3.04 4.26c.75 1.04.75 2.44 0 3.48L3.94 18h12.03c.32 0 .63-.16.81-.42l3.58-5c.24-.35.24-.81 0-1.16l-3.58-5c-.18-.26-.49-.42-.8-.42z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltBold.displayName = 'LabelAltBold';

// Triple export pattern
export { LabelAltBold, LabelAltBold as LabelAltBoldIcon, LabelAltBold as SiLabelAltBold };
export default LabelAltBold;
export type { LabelAltBoldProps };
