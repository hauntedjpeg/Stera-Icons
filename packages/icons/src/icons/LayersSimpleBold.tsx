import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayersSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const LayersSimpleBold = memo(
  forwardRef<SVGSVGElement, LayersSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.6 3.17c1.5-.82 3.3-.82 4.8 0l7.07 3.85c1.56.86 1.56 3.1 0 3.96L19.59 12l1.88 1.02c1.56.86 1.56 3.1 0 3.96l-7.08 3.85c-1.49.82-3.3.82-4.78 0l-7.08-3.85c-1.56-.86-1.56-3.1 0-3.96L4.41 12l-1.88-1.02c-1.56-.86-1.56-3.1 0-3.96zm4.8 11.66c-1.5.82-3.3.82-4.8 0l-3.1-1.7-3.01 1.65c-.17.1-.17.34 0 .44l7.07 3.86c.9.49 1.98.49 2.88 0l7.07-3.86c.17-.1.17-.35 0-.44l-3.01-1.64zm-.96-9.9c-.9-.5-1.98-.5-2.88 0L3.5 8.77c-.17.1-.17.34 0 .44l7.07 3.86c.9.49 1.98.49 2.88 0l7.07-3.86c.17-.1.17-.35 0-.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

LayersSimpleBold.displayName = 'LayersSimpleBold';

// Triple export pattern
export { LayersSimpleBold, LayersSimpleBold as LayersSimpleBoldIcon, LayersSimpleBold as SiLayersSimpleBold };
export default LayersSimpleBold;
export type { LayersSimpleBoldProps };
