import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" opacity={.4} />
        <path d="M13.4 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H8.1q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM19.4 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H8.1q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02z" />
    </IconBase>
  ))
);

AlignHorizontalLeftFillDuotone.displayName = 'AlignHorizontalLeftFillDuotone';

// Triple export pattern
export { AlignHorizontalLeftFillDuotone, AlignHorizontalLeftFillDuotone as AlignHorizontalLeftFillDuotoneIcon, AlignHorizontalLeftFillDuotone as SiAlignHorizontalLeftFillDuotone };
export default AlignHorizontalLeftFillDuotone;
export type { AlignHorizontalLeftFillDuotoneProps };
