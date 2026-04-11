import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvPlayAltFillProps = Omit<IconBaseProps, 'children'>;

const TvPlayAltFill = memo(
  forwardRef<SVGSVGElement, TvPlayAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.1 1.72a.9.9 0 0 1 1.18.39l1.5 3.01h.43l1-2.01a.88.88 0 0 1 1.57.78l-.61 1.23h.43q1.64-.01 2.7.06a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v1.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48q-1.06.07-2.7.05H9.4q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-1.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06h.43L8.72 2.9a.9.9 0 0 1 .39-1.17m1.3 8a1 1 0 0 0-.71.42c-.19.26-.19.71-.19 1.62v2.48c0 .9 0 1.36.19 1.62a1 1 0 0 0 .7.41c.32.04.72-.19 1.5-.64l2.18-1.24c.8-.46 1.2-.68 1.33-.98a1 1 0 0 0 0-.82c-.14-.3-.53-.52-1.33-.98l-2.18-1.24c-.78-.45-1.18-.68-1.5-.64" clipRule="evenodd" />
    </IconBase>
  ))
);

TvPlayAltFill.displayName = 'TvPlayAltFill';

// Triple export pattern (lucide-react style)
export { TvPlayAltFill, TvPlayAltFill as TvPlayAltFillIcon, TvPlayAltFill as SiTvPlayAltFill };
export default TvPlayAltFill;
export type { TvPlayAltFillProps };
