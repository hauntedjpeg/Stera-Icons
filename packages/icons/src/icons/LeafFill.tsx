import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafFillProps = Omit<IconBaseProps, 'children'>;

const LeafFill = memo(
  forwardRef<SVGSVGElement, LeafFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.78 17.07q.25.32.54.6.34.35.72.64-.28.34-.58.82c-.48.72-.92 1.5-1.13 2.15-.15.46-.65.7-1.1.55s-.71-.65-.56-1.1c.29-.86.83-1.8 1.33-2.57q.4-.61.78-1.09" />
        <path d="M20.88 3c0 4.04-.38 6.88-1.2 9.13-.84 2.28-2.1 3.9-3.75 5.55-2.7 2.7-6.95 2.9-9.9.63l.53-.64 4.14-4.14c.34-.34.34-.9 0-1.23-.34-.35-.9-.35-1.23 0l-4.15 4.14q-.22.22-.54.63c-2.37-2.94-2.2-7.27.54-10C6.64 5.75 8 4.48 10.23 3.57S15.44 2.12 20 2.12h.88z" />
    </IconBase>
  ))
);

LeafFill.displayName = 'LeafFill';

// Triple export pattern
export { LeafFill, LeafFill as LeafFillIcon, LeafFill as SiLeafFill };
export default LeafFill;
export type { LeafFillProps };
