import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightRegularProps = Omit<IconBaseProps, 'children'>;

const RotateRightRegular = memo(
  forwardRef<SVGSVGElement, RotateRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.97 1.97c.3-.3.77-.3 1.06 0l3.5 3.5q.22.22.22.53t-.22.53l-3.5 3.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.22-2.22H12c-3.73 0-6.75 3.02-6.75 6.75s3.02 6.75 6.75 6.75 6.75-3.02 6.75-6.75c0-.41.34-.75.75-.75s.75.34.75.75c0 4.56-3.7 8.25-8.25 8.25s-8.25-3.7-8.25-8.25S7.45 5.25 12 5.25h3.19l-2.22-2.22c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

RotateRightRegular.displayName = 'RotateRightRegular';

// Triple export pattern
export { RotateRightRegular, RotateRightRegular as RotateRightRegularIcon, RotateRightRegular as SiRotateRightRegular };
export default RotateRightRegular;
export type { RotateRightRegularProps };
