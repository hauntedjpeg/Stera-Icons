import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayersRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 10.66c1.1.55 1.1 2.13 0 2.68l-1.82.9 1.81.92c1.1.55 1.1 2.13 0 2.68l-5.87 2.94c-1.33.67-2.9.67-4.24 0L4 17.84c-1.1-.55-1.1-2.13 0-2.68l1.81-.91-1.81-.9c-1.1-.56-1.1-2.14 0-2.7l1.81-.9 1.68.84L4.68 12l5.87 2.94c.91.45 1.99.45 2.9 0L19.32 12 16.5 10.6l1.68-.84zm-5.88 5.62c-1.33.67-2.9.67-4.24 0l-2.38-1.2-2.82 1.42 5.87 2.94c.91.45 1.99.45 2.9 0l5.87-2.94-2.82-1.41z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M9.88 3.22c1.33-.67 2.9-.67 4.24 0L20 6.16c1.11.55 1.1 2.13 0 2.68l-5.87 2.94c-1.33.66-2.9.66-4.24 0L4 8.84C2.9 8.3 2.9 6.71 4 6.16zm3.57 1.35c-.91-.46-1.99-.46-2.9 0L4.68 7.5l5.87 2.93c.91.46 1.99.46 2.9 0l5.87-2.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersRegularDuotone.displayName = 'LayersRegularDuotone';

// Triple export pattern
export { LayersRegularDuotone, LayersRegularDuotone as LayersRegularDuotoneIcon, LayersRegularDuotone as SiLayersRegularDuotone };
export default LayersRegularDuotone;
export type { LayersRegularDuotoneProps };
