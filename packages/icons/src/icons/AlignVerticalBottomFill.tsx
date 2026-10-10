import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalBottomFillProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomFill = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 20.13a.88.88 0 0 1 0 1.75H3a.88.88 0 0 1 0-1.75zM8.65 2.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v11.3q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72V4.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM16.15 8.25q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v5.3q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-5.3q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.03.72-.02z" />
    </IconBase>
  ))
);

AlignVerticalBottomFill.displayName = 'AlignVerticalBottomFill';

// Triple export pattern
export { AlignVerticalBottomFill, AlignVerticalBottomFill as AlignVerticalBottomFillIcon, AlignVerticalBottomFill as SiAlignVerticalBottomFill };
export default AlignVerticalBottomFill;
export type { AlignVerticalBottomFillProps };
