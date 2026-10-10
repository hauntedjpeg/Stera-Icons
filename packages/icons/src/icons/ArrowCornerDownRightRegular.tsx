import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.25c.41 0 .75.34.75.75 0 1.92 0 2.7.2 3.31.43 1.3 1.44 2.31 2.74 2.73.6.2 1.39.21 3.31.21h7.19l-3.72-3.72c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l5 5q.22.22.22.53 0 .23-.13.42l-.09.11-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.72-3.72H11c-1.8 0-2.88 0-3.78-.28-1.75-.57-3.12-1.94-3.69-3.7-.29-.89-.28-1.97-.28-3.77 0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownRightRegular.displayName = 'ArrowCornerDownRightRegular';

// Triple export pattern
export { ArrowCornerDownRightRegular, ArrowCornerDownRightRegular as ArrowCornerDownRightRegularIcon, ArrowCornerDownRightRegular as SiArrowCornerDownRightRegular };
export default ArrowCornerDownRightRegular;
export type { ArrowCornerDownRightRegularProps };
