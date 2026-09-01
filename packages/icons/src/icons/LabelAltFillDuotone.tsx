import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelAltFillDuotone = memo(
  forwardRef<SVGSVGElement, LabelAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.97 5.88c.36 0 .7.17.92.47l3.57 5c.28.39.28.91 0 1.3l-3.57 5c-.22.3-.56.48-.92.48H3.94l-.06-.02-.05-.05-.01-.07.02-.06 3.04-4.26c.72-1 .72-2.34 0-3.34L3.84 6.07l-.02-.06.01-.07.05-.05.06-.01z" opacity={.4} />
        <path fillRule="evenodd" d="M15.97 4.13c.93 0 1.8.44 2.34 1.2l3.57 5c.72 1 .72 2.34 0 3.34l-3.57 5a2.9 2.9 0 0 1-2.34 1.2H3.94a1.88 1.88 0 0 1-1.52-2.96l3.04-4.26c.28-.39.28-.91 0-1.3L2.42 7.09a1.88 1.88 0 0 1 1.52-2.96zM3.94 5.88l-.06.01-.05.05-.01.07.02.06 3.04 4.26c.72 1 .72 2.34 0 3.34l-3.04 4.26-.02.06.01.07.05.05.06.02h12.03c.36 0 .7-.18.92-.48l3.57-5c.28-.39.28-.91 0-1.3l-3.57-5c-.22-.3-.56-.47-.92-.47z" clipRule="evenodd" />
    </IconBase>
  ))
);

LabelAltFillDuotone.displayName = 'LabelAltFillDuotone';

// Triple export pattern (lucide-react style)
export { LabelAltFillDuotone, LabelAltFillDuotone as LabelAltFillDuotoneIcon, LabelAltFillDuotone as SiLabelAltFillDuotone };
export default LabelAltFillDuotone;
export type { LabelAltFillDuotoneProps };
