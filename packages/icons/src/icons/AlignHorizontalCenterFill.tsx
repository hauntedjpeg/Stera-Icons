import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalCenterFillProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalCenterFill = memo(
  forwardRef<SVGSVGElement, AlignHorizontalCenterFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13c.48 0 .88.39.88.87v2.5h5.52q.4 0 .72.02.32 0 .67.17.5.26.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-5.52v2h2.52q.4 0 .72.02.32 0 .67.17.5.27.77.77.17.35.17.67.02.3.02.72v.8q0 .4-.02.72 0 .32-.17.67-.27.5-.77.77-.35.17-.67.17-.3.02-.72.02h-2.53V21c0 .48-.39.88-.87.88s-.87-.4-.87-.88v-2.5H8.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.02-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02h2.53v-2H5.6q-.4 0-.72-.02-.32 0-.67-.17-.5-.27-.77-.77-.17-.35-.17-.67-.03-.3-.02-.72v-.8q0-.4.02-.72 0-.32.17-.67.26-.5.77-.77.35-.17.67-.17.3-.02.72-.02h5.53V3c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

AlignHorizontalCenterFill.displayName = 'AlignHorizontalCenterFill';

// Triple export pattern
export { AlignHorizontalCenterFill, AlignHorizontalCenterFill as AlignHorizontalCenterFillIcon, AlignHorizontalCenterFill as SiAlignHorizontalCenterFill };
export default AlignHorizontalCenterFill;
export type { AlignHorizontalCenterFillProps };
