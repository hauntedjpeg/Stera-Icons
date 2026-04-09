import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksFillProps = Omit<IconBaseProps, 'children'>;

const TallyMarksFill = memo(
  forwardRef<SVGSVGElement, TallyMarksFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tally-marks-fill" {...props}>
      <path d="M18 3.75c.69 0 1.25.56 1.25 1.25v1.1l1.1-.67a1.25 1.25 0 0 1 1.3 2.14l-2.4 1.46V19a1.25 1.25 0 0 1-2.5 0v-8.44l-1.5.92V19a1.25 1.25 0 0 1-2.5 0v-6l-1.5.92V19a1.25 1.25 0 0 1-2.5 0v-3.55l-1.5.92V19a1.25 1.25 0 0 1-2.5 0v-1.1l-1.1.67a1.25 1.25 0 0 1-1.3-2.14l2.4-1.46V5a1.25 1.25 0 1 1 2.5 0v8.44l1.5-.92V5a1.25 1.25 0 1 1 2.5 0v6l1.5-.92V5a1.25 1.25 0 0 1 2.5 0v3.55l1.5-.92V5c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

TallyMarksFill.displayName = 'TallyMarksFill';

// Triple export pattern (lucide-react style)
export { TallyMarksFill, TallyMarksFill as TallyMarksFillIcon, TallyMarksFill as SiTallyMarksFill };
export default TallyMarksFill;
export type { TallyMarksFillProps };
