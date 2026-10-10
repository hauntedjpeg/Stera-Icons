import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvPlayAltFillProps = Omit<IconBaseProps, 'children'>;

const TvPlayAltFill = memo(
  forwardRef<SVGSVGElement, TvPlayAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.1 1.72c.44-.22.97-.04 1.18.39l1.5 3.01h.43l1-2.01c.22-.43.75-.6 1.18-.4.43.22.6.75.4 1.18l-.62 1.23h.43q1.64-.01 2.7.06c.72.06 1.34.18 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v1.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48q-1.06.07-2.7.05H9.4q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.2-.48-1.91q-.07-1.06-.06-2.7v-1.2q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06h.43L8.72 2.9c-.22-.43-.04-.96.39-1.17m1.3 8q-.45.07-.71.42c-.19.26-.19.71-.19 1.62v2.48c0 .9 0 1.36.19 1.62q.27.36.7.41c.32.04.72-.19 1.5-.64l2.18-1.24c.8-.46 1.2-.68 1.33-.98.11-.26.11-.56 0-.82-.14-.3-.53-.52-1.33-.98l-2.18-1.24c-.78-.45-1.18-.68-1.5-.64" clipRule="evenodd" />
    </IconBase>
  ))
);

TvPlayAltFill.displayName = 'TvPlayAltFill';

// Triple export pattern
export { TvPlayAltFill, TvPlayAltFill as TvPlayAltFillIcon, TvPlayAltFill as SiTvPlayAltFill };
export default TvPlayAltFill;
export type { TvPlayAltFillProps };
