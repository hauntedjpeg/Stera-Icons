import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFillDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.75 8.98q0 .82.4 1.56l3.9 7.14c1 1.84-.33 4.07-2.42 4.07H7.37c-2.09 0-3.41-2.23-2.41-4.07l3.9-7.14q.38-.74.39-1.56V4h5.5z" opacity={.4} />
        <path d="M15 2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

FlaskFillDuotone.displayName = 'FlaskFillDuotone';

// Triple export pattern
export { FlaskFillDuotone, FlaskFillDuotone as FlaskFillDuotoneIcon, FlaskFillDuotone as SiFlaskFillDuotone };
export default FlaskFillDuotone;
export type { FlaskFillDuotoneProps };
