import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 21a1 1 0 1 1-2 0v-2.5h2zM13 13h-2v-2h2zM12 2a1 1 0 0 1 1 1v2.5h-2V3a1 1 0 0 1 1-1" opacity={0.4} />
        <path d="M15.4 13q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H8.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02zM18.4 5.5q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02H5.6q-.4 0-.72-.02a2 2 0 0 1-.67-.17q-.5-.27-.77-.77a2 2 0 0 1-.17-.67q-.03-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02z" />
    </IconBase>
  ))
);

AlignHorizontalCenterBoldDuotone.displayName = 'AlignHorizontalCenterBoldDuotone';

// Triple export pattern
export { AlignHorizontalCenterBoldDuotone, AlignHorizontalCenterBoldDuotone as AlignHorizontalCenterBoldDuotoneIcon, AlignHorizontalCenterBoldDuotone as SiAlignHorizontalCenterBoldDuotone };
export default AlignHorizontalCenterBoldDuotone;
export type { AlignHorizontalCenterBoldDuotoneProps };
