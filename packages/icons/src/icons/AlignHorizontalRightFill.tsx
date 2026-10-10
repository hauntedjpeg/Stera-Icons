import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalRightFillProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalRightFill = memo(
  forwardRef<SVGSVGElement, AlignHorizontalRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 2.13c.48 0 .88.39.88.87v18a.88.88 0 0 1-1.75 0V3c0-.48.39-.87.87-.87M15.9 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-5.3q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.03-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.27-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM15.9 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H4.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02z" />
    </IconBase>
  ))
);

AlignHorizontalRightFill.displayName = 'AlignHorizontalRightFill';

// Triple export pattern
export { AlignHorizontalRightFill, AlignHorizontalRightFill as AlignHorizontalRightFillIcon, AlignHorizontalRightFill as SiAlignHorizontalRightFill };
export default AlignHorizontalRightFill;
export type { AlignHorizontalRightFillProps };
