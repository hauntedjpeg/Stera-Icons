import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowURightRegular = memo(
  forwardRef<SVGSVGElement, ArrowURightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 4.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75h7.69l-2.72-2.72c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l4 4q.22.22.22.53 0 .23-.13.42l-.09.11-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l2.72-2.72H10.5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25z" />
    </IconBase>
  ))
);

ArrowURightRegular.displayName = 'ArrowURightRegular';

// Triple export pattern
export { ArrowURightRegular, ArrowURightRegular as ArrowURightRegularIcon, ArrowURightRegular as SiArrowURightRegular };
export default ArrowURightRegular;
export type { ArrowURightRegularProps };
