import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TallyMarksFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TallyMarksFillDuotone = memo(
  forwardRef<SVGSVGElement, TallyMarksFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.25 19c0 .69-.56 1.25-1.25 1.25S4.75 19.69 4.75 19v-1.1l2.5-1.53zM11.25 19c0 .69-.56 1.25-1.25 1.25S8.75 19.69 8.75 19v-3.55l2.5-1.53zM15.25 19c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-6l2.5-1.52zM19.25 19c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-8.44l2.5-1.53zM6 3.75c.69 0 1.25.56 1.25 1.25v8.44l-2.5 1.53V5c0-.69.56-1.25 1.25-1.25M10 3.75c.69 0 1.25.56 1.25 1.25v6l-2.5 1.52V5c0-.69.56-1.25 1.25-1.25M14 3.75c.69 0 1.25.56 1.25 1.25v3.55l-2.5 1.53V5c0-.69.56-1.25 1.25-1.25M18 3.75c.69 0 1.25.56 1.25 1.25v1.1l-2.5 1.53V5c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M20.35 5.43c.59-.36 1.36-.17 1.72.42s.17 1.36-.42 1.72l-18 11c-.59.36-1.36.17-1.72-.42s-.17-1.36.42-1.72z" />
    </IconBase>
  ))
);

TallyMarksFillDuotone.displayName = 'TallyMarksFillDuotone';

// Triple export pattern
export { TallyMarksFillDuotone, TallyMarksFillDuotone as TallyMarksFillDuotoneIcon, TallyMarksFillDuotone as SiTallyMarksFillDuotone };
export default TallyMarksFillDuotone;
export type { TallyMarksFillDuotoneProps };
