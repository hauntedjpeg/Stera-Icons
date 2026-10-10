import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersBoldProps = Omit<IconBaseProps, 'children'>;

const LayersBold = memo(
  forwardRef<SVGSVGElement, LayersBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.76 3c1.41-.7 3.07-.7 4.48 0l5.87 2.93c1.29.65 1.29 2.49 0 3.13l-1.37.69 1.37.68c1.29.65 1.29 2.49 0 3.13l-1.37.69 1.37.68c1.29.65 1.29 2.49 0 3.13L14.24 21c-1.41.7-3.07.7-4.48 0L3.9 18.06c-1.3-.64-1.3-2.48 0-3.13l1.36-.68-1.36-.69c-1.3-.64-1.3-2.48 0-3.13l1.36-.68-1.36-.69c-1.3-.64-1.3-2.48 0-3.13zm4.48 13.5c-1.41.7-3.07.7-4.48 0L7.5 15.37 5.24 16.5l5.42 2.71c.84.42 1.84.42 2.68 0l5.42-2.71-2.26-1.13zm0-4.5c-1.41.7-3.07.7-4.48 0L7.5 10.87 5.24 12l5.42 2.71c.84.42 1.84.42 2.68 0L18.76 12l-2.26-1.13zm-.9-7.21c-.84-.42-1.84-.42-2.68 0l-5.42 2.7 5.42 2.72q.24.12.49.2.24.06.5.1l.18.01h.34l.17-.01q.27-.04.51-.1.25-.09.5-.2l5.41-2.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersBold.displayName = 'LayersBold';

// Triple export pattern
export { LayersBold, LayersBold as LayersBoldIcon, LayersBold as SiLayersBold };
export default LayersBold;
export type { LayersBoldProps };
