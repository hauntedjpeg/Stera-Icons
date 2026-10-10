import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersRegularProps = Omit<IconBaseProps, 'children'>;

const LayersRegular = memo(
  forwardRef<SVGSVGElement, LayersRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.87 3.22c1.34-.66 2.92-.66 4.25 0L20 6.16c1.1.55 1.1 2.13 0 2.68l-1.81.9 1.81.92c1.1.55 1.1 2.13 0 2.68l-1.81.9 1.81.92c1.1.55 1.1 2.13 0 2.68l-5.87 2.94c-1.33.66-2.9.66-4.25 0l-5.86-2.94c-1.1-.55-1.11-2.13 0-2.68l1.81-.91-1.81-.9c-1.1-.56-1.11-2.14 0-2.7l1.81-.9-1.81-.9c-1.1-.56-1.1-2.14 0-2.7zm4.25 13.06c-1.33.66-2.9.66-4.25 0l-2.37-1.2-2.82 1.42 5.87 2.93c.91.46 1.99.46 2.9 0l5.87-2.93-2.82-1.41zm0-4.5q-.5.24-1.04.37-1.07.25-2.17 0-.53-.12-1.04-.37l-2.37-1.2L4.68 12l5.87 2.93c.91.46 1.99.46 2.9 0L19.32 12l-2.82-1.41zm-.67-7.22c-.91-.45-1.99-.45-2.9 0L4.68 7.5l3.14 1.57h.01l2.72 1.36q.34.17.7.26l.2.04q.55.09 1.1 0l.2-.04q.36-.09.7-.26l5.87-2.93z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersRegular.displayName = 'LayersRegular';

// Triple export pattern
export { LayersRegular, LayersRegular as LayersRegularIcon, LayersRegular as SiLayersRegular };
export default LayersRegular;
export type { LayersRegularProps };
