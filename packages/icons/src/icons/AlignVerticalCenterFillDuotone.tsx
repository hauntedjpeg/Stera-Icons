import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 12.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2.5zM13 12.88h-2v-1.76h2zM21 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-2.5v-1.76z" opacity={0.4} />
        <path d="M8.65 3.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v12.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72V5.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.03.72-.02zM16.15 6.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v6.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72V8.6q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.02.72-.02z" />
    </IconBase>
  ))
);

AlignVerticalCenterFillDuotone.displayName = 'AlignVerticalCenterFillDuotone';

// Triple export pattern
export { AlignVerticalCenterFillDuotone, AlignVerticalCenterFillDuotone as AlignVerticalCenterFillDuotoneIcon, AlignVerticalCenterFillDuotone as SiAlignVerticalCenterFillDuotone };
export default AlignVerticalCenterFillDuotone;
export type { AlignVerticalCenterFillDuotoneProps };
