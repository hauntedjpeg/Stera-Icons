import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFullFillDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFullFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.75 8.98q0 .82.4 1.56l3.9 7.14c1 1.84-.33 4.07-2.42 4.07H7.37c-2.09 0-3.41-2.23-2.41-4.07l3.9-7.14q.38-.74.39-1.56V4h5.5zm-.26 3.94c-.64 0-1.28.17-1.81.53-1.08.71-2.38.94-3.61.67-.24-.06-.48.04-.6.25l-2.2 4.03c-.45.83.15 1.85 1.1 1.85h9.26c.95 0 1.55-1.02 1.1-1.85l-2.85-5.23q-.13-.22-.4-.25" clipRule="evenodd" opacity={.4} />
        <path d="M14.49 12.92q.25.01.39.25l2.85 5.23c.45.83-.15 1.85-1.1 1.85H7.37c-.95 0-1.55-1.02-1.1-1.85l2.2-4.03c.11-.21.36-.3.6-.25 1.23.27 2.53.04 3.6-.67.54-.36 1.18-.54 1.82-.53M15 2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

FlaskFullFillDuotone.displayName = 'FlaskFullFillDuotone';

// Triple export pattern
export { FlaskFullFillDuotone, FlaskFullFillDuotone as FlaskFullFillDuotoneIcon, FlaskFullFillDuotone as SiFlaskFullFillDuotone };
export default FlaskFullFillDuotone;
export type { FlaskFullFillDuotoneProps };
