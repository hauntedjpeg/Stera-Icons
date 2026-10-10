import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, LayersSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m6.5 13.14-3.01 1.64c-.17.1-.17.34 0 .44l7.07 3.86c.9.49 1.98.49 2.88 0l7.07-3.86c.17-.1.17-.34 0-.44l-3.01-1.64L19.59 12l1.88 1.02c1.56.86 1.56 3.1 0 3.96l-7.08 3.85c-1.49.82-3.3.82-4.79 0l-7.07-3.85c-1.56-.86-1.56-3.1 0-3.96L4.41 12z" opacity={.4} />
        <path fillRule="evenodd" d="M9.6 3.17c1.5-.82 3.3-.82 4.8 0l7.07 3.85c1.56.86 1.56 3.1 0 3.96l-7.08 3.85c-1.49.82-3.3.82-4.78 0l-7.08-3.85c-1.56-.86-1.56-3.1 0-3.96zm3.84 1.75c-.9-.49-1.98-.49-2.88 0L3.5 8.78c-.17.1-.17.34 0 .44l7.07 3.86c.9.49 1.98.49 2.88 0l7.07-3.86c.17-.1.17-.35 0-.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleBoldDuotone.displayName = 'LayersSimpleBoldDuotone';

// Triple export pattern
export { LayersSimpleBoldDuotone, LayersSimpleBoldDuotone as LayersSimpleBoldDuotoneIcon, LayersSimpleBoldDuotone as SiLayersSimpleBoldDuotone };
export default LayersSimpleBoldDuotone;
export type { LayersSimpleBoldDuotoneProps };
