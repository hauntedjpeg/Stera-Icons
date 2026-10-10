import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PyramidFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PyramidFillDuotone = memo(
  forwardRef<SVGSVGElement, PyramidFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.5 14.47c.14.17.1.42-.09.53l-6.53 4.36V5.63z" opacity={.4} />
        <path fillRule="evenodd" d="M10.3 3.8c.85-1.12 2.55-1.12 3.4 0l7.2 9.62c.74.97.5 2.36-.51 3.04l-7.21 4.8c-.72.48-1.65.48-2.36 0l-7.2-4.8c-1.02-.68-1.26-2.07-.53-3.04zM4.5 14.48c-.14.17-.1.41.08.53l6.54 4.36V5.62zm8.37 4.9L19.41 15c.18-.11.23-.36.1-.53l-6.64-8.85z" clipRule="evenodd" />
    </IconBase>
  ))
);

PyramidFillDuotone.displayName = 'PyramidFillDuotone';

// Triple export pattern
export { PyramidFillDuotone, PyramidFillDuotone as PyramidFillDuotoneIcon, PyramidFillDuotone as SiPyramidFillDuotone };
export default PyramidFillDuotone;
export type { PyramidFillDuotoneProps };
