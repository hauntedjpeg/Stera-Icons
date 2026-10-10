import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalCenterFillProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterFill = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.65 3.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v5.53h2V8.6q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.02.72-.02h.8q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v2.53H21a.88.88 0 0 1 0 1.74h-2.5v2.53q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-2.53h-2v5.53q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-5.52H3a.88.88 0 0 1 0-1.76h2.5V5.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.03.72-.02z" />
    </IconBase>
  ))
);

AlignVerticalCenterFill.displayName = 'AlignVerticalCenterFill';

// Triple export pattern
export { AlignVerticalCenterFill, AlignVerticalCenterFill as AlignVerticalCenterFillIcon, AlignVerticalCenterFill as SiAlignVerticalCenterFill };
export default AlignVerticalCenterFill;
export type { AlignVerticalCenterFillProps };
