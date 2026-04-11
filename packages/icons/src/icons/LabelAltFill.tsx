import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltFillProps = Omit<IconBaseProps, 'children'>;

const LabelAltFill = memo(
  forwardRef<SVGSVGElement, LabelAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.06 4.13a1.88 1.88 0 0 1 1.52 2.96l-3.04 4.26c-.28.39-.28.91 0 1.3l3.04 4.26c.89 1.24 0 2.97-1.52 2.97H8.03c-.93 0-1.8-.45-2.34-1.2l-3.57-5c-.72-1-.72-2.35 0-3.35l3.57-5a2.9 2.9 0 0 1 2.34-1.2z" />
    </IconBase>
  ))
);

LabelAltFill.displayName = 'LabelAltFill';

// Triple export pattern (lucide-react style)
export { LabelAltFill, LabelAltFill as LabelAltFillIcon, LabelAltFill as SiLabelAltFill };
export default LabelAltFill;
export type { LabelAltFillProps };
