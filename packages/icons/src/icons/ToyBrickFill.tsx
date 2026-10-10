import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToyBrickFillProps = Omit<IconBaseProps, 'children'>;

const ToyBrickFill = memo(
  forwardRef<SVGSVGElement, ToyBrickFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 4.75c.97 0 1.75.78 1.75 1.75V8h1.5V6.5c0-.97.78-1.75 1.75-1.75h3c.97 0 1.75.78 1.75 1.75v1.77C20.28 8.75 21 9.8 21 11v6c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-6c0-1.21.72-2.25 1.75-2.73V6.5c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

ToyBrickFill.displayName = 'ToyBrickFill';

// Triple export pattern
export { ToyBrickFill, ToyBrickFill as ToyBrickFillIcon, ToyBrickFill as SiToyBrickFill };
export default ToyBrickFill;
export type { ToyBrickFillProps };
