import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleRegular = memo(
  forwardRef<SVGSVGElement, LayersSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.73 3.39c1.41-.78 3.13-.78 4.54 0l7.08 3.85c1.39.76 1.39 2.76 0 3.52L19.07 12l2.28 1.24c1.39.76 1.39 2.76 0 3.52l-7.08 3.85c-1.41.78-3.13.78-4.54 0l-7.08-3.85c-1.39-.76-1.39-2.76 0-3.52L4.93 12l-2.28-1.24C1.26 10 1.26 8 2.65 7.24zm4.54 11.22c-1.41.78-3.13.78-4.54 0L6.5 12.85l-3.13 1.71c-.35.2-.35.69 0 .88l7.07 3.86c.97.53 2.15.53 3.12 0l7.07-3.86c.35-.2.35-.69 0-.88l-3.13-1.7zm-.71-9.9c-.97-.54-2.15-.54-3.12 0L3.37 8.55c-.35.2-.35.69 0 .88l7.07 3.86c.97.53 2.15.53 3.12 0l7.07-3.86c.35-.2.35-.69 0-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleRegular.displayName = 'LayersSimpleRegular';

// Triple export pattern
export { LayersSimpleRegular, LayersSimpleRegular as LayersSimpleRegularIcon, LayersSimpleRegular as SiLayersSimpleRegular };
export default LayersSimpleRegular;
export type { LayersSimpleRegularProps };
