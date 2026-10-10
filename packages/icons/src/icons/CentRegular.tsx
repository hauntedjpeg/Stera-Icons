import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CentRegularProps = Omit<IconBaseProps, 'children'>;

const CentRegular = memo(
  forwardRef<SVGSVGElement, CentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c.41 0 .75.34.75.75v2.75q.46.03.93.1c1.44.24 2.77.9 3.82 1.9.3.29.31.76.03 1.06s-.77.31-1.06.03c-.84-.8-1.9-1.32-3.03-1.51q-.35-.06-.69-.07v11.48q.66-.02 1.32-.2c1.1-.32 2.1-.96 2.83-1.84.27-.32.74-.36 1.06-.1.32.27.36.74.1 1.06-.94 1.11-2.19 1.92-3.59 2.32q-.85.23-1.72.26V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.86q-.53-.1-1.04-.26c-1.38-.46-2.59-1.32-3.47-2.48-.88-1.15-1.4-2.54-1.48-4-.08-1.45.28-2.89 1.03-4.13.74-1.25 1.85-2.24 3.17-2.85q.86-.4 1.79-.56V2c0-.41.34-.75.75-.75m-.75 5.14q-.6.13-1.16.39c-1.05.48-1.92 1.27-2.52 2.26s-.88 2.13-.81 3.28.47 2.26 1.17 3.17 1.66 1.6 2.75 1.97l.57.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

CentRegular.displayName = 'CentRegular';

// Triple export pattern
export { CentRegular, CentRegular as CentRegularIcon, CentRegular as SiCentRegular };
export default CentRegular;
export type { CentRegularProps };
