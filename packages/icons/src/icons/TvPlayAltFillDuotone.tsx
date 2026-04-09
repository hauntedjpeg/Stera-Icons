import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TvPlayAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TvPlayAltFillDuotone = memo(
  forwardRef<SVGSVGElement, TvPlayAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tv-play-alt-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.6 5.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v1.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.4q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-1.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48c.71-.06 1.6-.05 2.7-.05zm-4.2 4.6a1 1 0 0 0-.71.4c-.19.27-.19.72-.19 1.63v2.48c0 .9 0 1.36.19 1.62a1 1 0 0 0 .7.41c.32.04.72-.19 1.5-.64l2.18-1.24c.8-.46 1.2-.68 1.33-.98a1 1 0 0 0 0-.82c-.14-.3-.53-.52-1.33-.98l-2.18-1.24c-.78-.45-1.18-.68-1.5-.64" clipRule="evenodd" opacity={.4} />
        <path d="M9.1 1.72a.9.9 0 0 1 1.18.39l1.5 3.01H9.84L8.72 2.9a.9.9 0 0 1 .39-1.17M13.22 3.1a.88.88 0 0 1 1.56.8l-.61 1.22H12.2zM9.5 11.76c0-.9 0-1.36.19-1.62a1 1 0 0 1 .7-.41c.32-.04.72.19 1.5.64l2.18 1.24c.8.46 1.2.68 1.33.98a1 1 0 0 1 0 .82c-.14.3-.53.52-1.33.98l-2.18 1.24c-.78.45-1.18.68-1.5.64a1 1 0 0 1-.7-.4c-.19-.27-.19-.72-.19-1.63z" />
    </IconBase>
  ))
);

TvPlayAltFillDuotone.displayName = 'TvPlayAltFillDuotone';

// Triple export pattern (lucide-react style)
export { TvPlayAltFillDuotone, TvPlayAltFillDuotone as TvPlayAltFillDuotoneIcon, TvPlayAltFillDuotone as SiTvPlayAltFillDuotone };
export default TvPlayAltFillDuotone;
export type { TvPlayAltFillDuotoneProps };
