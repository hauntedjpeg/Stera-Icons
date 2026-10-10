import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvPlayAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvPlayAltFillDuotone = memo(
  forwardRef<SVGSVGElement, TvPlayAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.6 5.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v1.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.4q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7v-1.2q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48.71-.06 1.6-.05 2.7-.05zm-4.2 4.6q-.45.06-.71.4c-.19.27-.19.72-.19 1.63v2.48c0 .9 0 1.36.19 1.62q.27.35.7.41c.32.04.72-.19 1.5-.64l2.18-1.24c.8-.46 1.2-.68 1.33-.98q.16-.41 0-.82c-.14-.3-.53-.52-1.33-.98l-2.18-1.24c-.78-.45-1.18-.68-1.5-.64" clipRule="evenodd" opacity={.4} />
        <path d="M9.1 1.72c.44-.22.97-.04 1.18.39l1.5 3.01H9.84L8.72 2.9c-.22-.43-.04-.96.39-1.17M13.22 3.1c.21-.42.74-.6 1.17-.38s.6.74.4 1.17l-.62 1.23H12.2zM9.5 11.76c0-.9 0-1.36.19-1.62q.27-.36.7-.41c.32-.04.72.19 1.5.64l2.18 1.24c.8.46 1.2.68 1.33.98q.16.41 0 .82c-.14.3-.53.52-1.33.98l-2.18 1.24c-.78.45-1.18.68-1.5.64q-.43-.06-.7-.4c-.19-.27-.19-.72-.19-1.63z" />
    </IconBase>
  ))
);

TvPlayAltFillDuotone.displayName = 'TvPlayAltFillDuotone';

// Triple export pattern
export { TvPlayAltFillDuotone, TvPlayAltFillDuotone as TvPlayAltFillDuotoneIcon, TvPlayAltFillDuotone as SiTvPlayAltFillDuotone };
export default TvPlayAltFillDuotone;
export type { TvPlayAltFillDuotoneProps };
