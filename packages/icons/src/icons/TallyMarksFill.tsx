import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksFillProps = Omit<IconBaseProps, 'children'>;

const TallyMarksFill = memo(
  forwardRef<SVGSVGElement, TallyMarksFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 3.75c.7 0 1.25.56 1.25 1.25v1.1l1.1-.67c.59-.36 1.36-.17 1.72.42s.17 1.36-.42 1.72l-2.4 1.46V19c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-8.44l-1.5.92V19c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6l-1.5.92V19c0 .69-.56 1.25-1.25 1.25S8.75 19.69 8.75 19v-3.55l-1.5.92V19c0 .69-.56 1.25-1.25 1.25S4.75 19.69 4.75 19v-1.1l-1.1.67c-.59.36-1.36.17-1.72-.42s-.17-1.36.42-1.72l2.4-1.46V5c0-.69.56-1.25 1.25-1.25.7 0 1.25.56 1.25 1.25v8.44l1.5-.92V5c0-.69.56-1.25 1.25-1.25.7 0 1.25.56 1.25 1.25v6l1.5-.92V5c0-.69.56-1.25 1.25-1.25.7 0 1.25.56 1.25 1.25v3.55l1.5-.92V5c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

TallyMarksFill.displayName = 'TallyMarksFill';

// Triple export pattern
export { TallyMarksFill, TallyMarksFill as TallyMarksFillIcon, TallyMarksFill as SiTallyMarksFill };
export default TallyMarksFill;
export type { TallyMarksFillProps };
