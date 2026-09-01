import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LabelBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LabelBoldDuotone = memo(
  forwardRef<SVGSVGElement, LabelBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.38 16.74" clipRule="evenodd" opacity={0.4} />
        <path d="m22.53 12.23-.02.23-.05.22z" opacity={0.4} />
        <path d="M17.62 5.86A1 1 0 0 1 19 6.1l2.97 4.17a3 3 0 0 1 0 3.48l-2.97 4.17a1 1 0 0 1-1.63-1.17l2.98-4.16a1 1 0 0 0 0-1.16l-2.98-4.16a1 1 0 0 1 .24-1.4" />
        <path fillRule="evenodd" d="m18.93 5.99.05.06zm.08.1-.03-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M15.46 4a4 4 0 0 1 3.25 1.67l3.27 4.59-2.97-4.17-.08-.1h-.01l-.12-.11a1 1 0 0 0-1.42 1.38l-.3-.42A2 2 0 0 0 15.46 6H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h9.46a2 2 0 0 0 1.62-.84l.3-.42a1 1 0 0 0 1.63 1.17l-.3.42A4 4 0 0 1 15.46 20H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" opacity={.4} />
    </IconBase>
  ))
);

LabelBoldDuotone.displayName = 'LabelBoldDuotone';

// Triple export pattern (lucide-react style)
export { LabelBoldDuotone, LabelBoldDuotone as LabelBoldDuotoneIcon, LabelBoldDuotone as SiLabelBoldDuotone };
export default LabelBoldDuotone;
export type { LabelBoldDuotoneProps };
