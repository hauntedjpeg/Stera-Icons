import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CitrusBoldDuotone = memo(
  forwardRef<SVGSVGElement, CitrusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.91 2q.42 0 .7.3c2.26 2.25 3.4 5.2 3.39 8.16s-1.13 5.9-3.38 8.16S13.4 22 10.46 22s-5.91-1.13-8.17-3.38q-.28-.3-.29-.7 0-.42.3-.72l2.06-2.07.08-.07c.4-.32.97-.3 1.34.07 1.29 1.3 2.98 1.94 4.68 1.94s3.38-.64 4.67-1.94c1.3-1.29 1.94-2.98 1.94-4.67v-.32c-.08-1.59-.72-3.15-1.94-4.36-.39-.4-.39-1.03 0-1.42L17.2 2.3q.31-.28.71-.29m-.7 3.11c1.24 1.57 1.86 3.46 1.86 5.35 0 2.2-.84 4.4-2.52 6.09s-3.89 2.52-6.1 2.52c-1.88 0-3.77-.62-5.34-1.86l-.66.66C6.2 19.3 8.33 20 10.45 20c2.45 0 4.9-.93 6.75-2.8 1.87-1.86 2.8-4.3 2.8-6.74 0-2.13-.7-4.26-2.13-6z" clipRule="evenodd" />
        <path d="M15.13 4.36c-.39.4-.39 1.03 0 1.42q.95.96 1.43 2.14-.3-.74-.77-1.38l-2.92 2.92h4.12q.06.34.07.68l.01.32q0 .7-.14 1.37l.06-.37h-4.12l2.92 2.91q.12-.15.22-.33-.37.59-.88 1.1-.65.65-1.43 1.08.35-.2.67-.43l-2.91-2.92V17l.37-.06q-.68.15-1.37.14t-1.38-.14q.19.04.38.06v-4.12l-2.92 2.92q1.16.84 2.51 1.13c-1.2-.26-2.34-.85-3.27-1.79-.37-.36-.95-.39-1.34-.07l-.08.07z" opacity={.4} />
    </IconBase>
  ))
);

CitrusBoldDuotone.displayName = 'CitrusBoldDuotone';

// Triple export pattern
export { CitrusBoldDuotone, CitrusBoldDuotone as CitrusBoldDuotoneIcon, CitrusBoldDuotone as SiCitrusBoldDuotone };
export default CitrusBoldDuotone;
export type { CitrusBoldDuotoneProps };
