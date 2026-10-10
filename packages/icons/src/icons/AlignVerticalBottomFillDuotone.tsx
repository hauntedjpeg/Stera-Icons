import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalBottomFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomFillDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.65 2.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v11.3q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V4.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM16.15 8.25q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v5.3q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-5.3q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.03.72-.02z" />
        <path d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
    </IconBase>
  ))
);

AlignVerticalBottomFillDuotone.displayName = 'AlignVerticalBottomFillDuotone';

// Triple export pattern
export { AlignVerticalBottomFillDuotone, AlignVerticalBottomFillDuotone as AlignVerticalBottomFillDuotoneIcon, AlignVerticalBottomFillDuotone as SiAlignVerticalBottomFillDuotone };
export default AlignVerticalBottomFillDuotone;
export type { AlignVerticalBottomFillDuotoneProps };
