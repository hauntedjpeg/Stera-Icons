import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilTipBoldProps = Omit<IconBaseProps, 'children'>;

const PencilTipBold = memo(
  forwardRef<SVGSVGElement, PencilTipBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c.3 0 .6.14.79.39l6.37 8.18c.54.7.84 1.57.84 2.46V22c0 .55-.45 1-1 1s-1-.45-1-1v-9.28l-1.01.58c-.92.53-2.06.53-2.98 0L13 12.72V22c0 .55-.45 1-1 1s-1-.45-1-1v-9.28l-1.01.58c-.92.53-2.06.53-2.98 0L6 12.72V22c0 .55-.45 1-1 1s-1-.45-1-1v-9.97c0-.89.3-1.75.84-2.46l6.37-8.18.08-.09q.29-.3.71-.3m2.43 5.75c-1.51.84-3.35.84-4.86 0L6.5 10.7l1.5.86c.31.18.69.18 1 0l1.51-.86c.92-.53 2.06-.53 2.98 0l1.51.86c.31.18.69.18 1 0l1.5-.86zm-3.6-1.61c.75.31 1.6.31 2.34 0L12 3.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilTipBold.displayName = 'PencilTipBold';

// Triple export pattern
export { PencilTipBold, PencilTipBold as PencilTipBoldIcon, PencilTipBold as SiPencilTipBold };
export default PencilTipBold;
export type { PencilTipBoldProps };
