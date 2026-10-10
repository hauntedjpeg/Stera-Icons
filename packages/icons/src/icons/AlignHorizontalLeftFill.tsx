import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalLeftFillProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalLeftFill = memo(
  forwardRef<SVGSVGElement, AlignHorizontalLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2.13c.48 0 .88.39.88.87v18c0 .48-.4.88-.88.88s-.87-.4-.87-.88V3c0-.48.39-.87.87-.87M13.4 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H8.1q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM19.4 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H8.1q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02z" />
    </IconBase>
  ))
);

AlignHorizontalLeftFill.displayName = 'AlignHorizontalLeftFill';

// Triple export pattern
export { AlignHorizontalLeftFill, AlignHorizontalLeftFill as AlignHorizontalLeftFillIcon, AlignHorizontalLeftFill as SiAlignHorizontalLeftFill };
export default AlignHorizontalLeftFill;
export type { AlignHorizontalLeftFillProps };
