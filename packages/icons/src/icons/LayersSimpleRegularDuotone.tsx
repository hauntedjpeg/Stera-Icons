import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayersSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.35 13.24c1.39.76 1.39 2.76 0 3.52l-7.08 3.85c-1.41.78-3.13.78-4.54 0l-7.08-3.85c-1.39-.76-1.39-2.76 0-3.52L4.93 12l1.57.85-3.13 1.71c-.35.2-.35.69 0 .88l7.07 3.86c.97.53 2.15.53 3.12 0l7.07-3.86c.35-.2.35-.69 0-.88l-3.13-1.7 1.57-.86z" opacity={.4} />
        <path fillRule="evenodd" d="M9.73 3.39c1.41-.78 3.13-.78 4.54 0l7.08 3.85c1.39.76 1.39 2.76 0 3.52l-7.08 3.85c-1.41.78-3.13.78-4.54 0l-7.08-3.85C1.26 10 1.26 8 2.65 7.24zm3.83 1.31c-.97-.53-2.15-.53-3.12 0L3.37 8.56c-.35.2-.35.69 0 .88l7.07 3.86c.97.53 2.15.53 3.12 0l7.07-3.86c.35-.2.35-.69 0-.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleRegularDuotone.displayName = 'LayersSimpleRegularDuotone';

// Triple export pattern
export { LayersSimpleRegularDuotone, LayersSimpleRegularDuotone as LayersSimpleRegularDuotoneIcon, LayersSimpleRegularDuotone as SiLayersSimpleRegularDuotone };
export default LayersSimpleRegularDuotone;
export type { LayersSimpleRegularDuotoneProps };
