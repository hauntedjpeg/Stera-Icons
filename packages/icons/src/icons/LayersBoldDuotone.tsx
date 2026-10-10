import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.1 10.44c1.3.64 1.3 2.48 0 3.12l-1.36.69 1.37.69c1.29.64 1.29 2.48 0 3.12L14.24 21c-1.41.7-3.07.7-4.48 0L3.9 18.06c-1.3-.64-1.3-2.48 0-3.12l1.37-.7-1.37-.68c-1.3-.64-1.3-2.48 0-3.12l1.36-.69 2.24 1.12L5.24 12l5.42 2.71c.84.42 1.84.42 2.68 0L18.76 12l-2.26-1.13 2.23-1.12zm-5.86 6.06c-1.41.7-3.07.7-4.48 0L7.5 15.37 5.23 16.5l5.43 2.71c.84.42 1.84.42 2.68 0l5.42-2.71-2.26-1.13z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M9.76 3c1.41-.7 3.07-.7 4.48 0l5.87 2.94c1.29.64 1.29 2.48 0 3.13L14.24 12c-1.41.7-3.07.7-4.48 0L3.9 9.07c-1.3-.65-1.3-2.49 0-3.13zm3.58 1.79c-.84-.42-1.84-.42-2.68 0L5.24 7.5l5.42 2.71c.84.42 1.84.42 2.68 0l5.42-2.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersBoldDuotone.displayName = 'LayersBoldDuotone';

// Triple export pattern
export { LayersBoldDuotone, LayersBoldDuotone as LayersBoldDuotoneIcon, LayersBoldDuotone as SiLayersBoldDuotone };
export default LayersBoldDuotone;
export type { LayersBoldDuotoneProps };
