import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalBottomFillProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomFill = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 20.13c.48 0 .88.39.88.87s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM8.65 2.25q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v11.3q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72V4.6q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM16.15 8.25q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v5.3q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-.8q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-5.3q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.03.72-.02z" />
    </IconBase>
  ))
);

AlignVerticalBottomFill.displayName = 'AlignVerticalBottomFill';

// Triple export pattern
export { AlignVerticalBottomFill, AlignVerticalBottomFill as AlignVerticalBottomFillIcon, AlignVerticalBottomFill as SiAlignVerticalBottomFill };
export default AlignVerticalBottomFill;
export type { AlignVerticalBottomFillProps };
