import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightRegularProps = Omit<IconBaseProps, 'children'>;

const RotationRightRegular = memo(
  forwardRef<SVGSVGElement, RotationRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.99 7.08c-.27-.32-.74-.37-1.06-.1-.32.26-.37.73-.1 1.05.75.91 1.23 2.02 1.37 3.2.15 1.17-.04 2.37-.55 3.44-.5 1.07-1.3 1.98-2.3 2.6-1 .64-2.17.98-3.35.98h-1.19l1.72-1.72c.3-.3.3-.77 0-1.06s-.77-.3-1.06 0l-3 3c-.3.3-.3.77 0 1.06l3 3c.3.3.77.3 1.06 0s.3-.77 0-1.06l-1.72-1.72h1.47c1.37-.05 2.7-.47 3.87-1.2 1.24-.79 2.23-1.91 2.86-3.24s.86-2.8.68-4.27c-.18-1.45-.77-2.83-1.7-3.96M12.53 1.47c-.3-.3-.77-.3-1.06 0s-.3.77 0 1.06l1.72 1.72h-1.46c-1.38.05-2.72.47-3.88 1.2-1.24.8-2.24 1.92-2.86 3.25-.63 1.33-.86 2.81-.68 4.27.19 1.46.78 2.84 1.72 3.97.26.32.74.36 1.06.1.31-.26.36-.74.1-1.06-.76-.91-1.24-2.02-1.4-3.2-.14-1.17.05-2.37.56-3.44.5-1.07 1.3-1.98 2.3-2.62.94-.6 2.02-.93 3.13-.97h1.41l-1.72 1.72c-.3.3-.3.77 0 1.06s.77.3 1.06 0l3-3c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

RotationRightRegular.displayName = 'RotationRightRegular';

// Triple export pattern
export { RotationRightRegular, RotationRightRegular as RotationRightRegularIcon, RotationRightRegular as SiRotationRightRegular };
export default RotationRightRegular;
export type { RotationRightRegularProps };
