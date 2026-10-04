import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CitrusBoldDuotone = memo(
  forwardRef<SVGSVGElement, CitrusBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.91 2a1 1 0 0 1 .7.3 11.5 11.5 0 0 1 0 16.32 11.5 11.5 0 0 1-16.32 0 1 1 0 0 1 0-1.42l2.07-2.07.08-.07a1 1 0 0 1 1.34.07 6.6 6.6 0 0 0 9.35 0 6.6 6.6 0 0 0 1.94-4.67v-.32a6.6 6.6 0 0 0-1.94-4.36 1 1 0 0 1 0-1.42L17.2 2.3a1 1 0 0 1 .71-.29m-.7 3.11a8.6 8.6 0 0 1-.66 11.44 8.6 8.6 0 0 1-11.44.66l-.66.66a9.5 9.5 0 0 0 12.75-.67 9.5 9.5 0 0 0 .67-12.75z" clipRule="evenodd" />
        <path d="M15.13 4.36a1 1 0 0 0 0 1.42 7 7 0 0 1 .66.76l-2.92 2.92h4.12q.06.34.07.68l.01.32a7 7 0 0 1-.08 1h-4.12l2.92 2.91a7 7 0 0 0-1.42 1.42l-2.91-2.92V17a7 7 0 0 0-2 0v-4.12l-2.92 2.92a7 7 0 0 0-.76-.66 1 1 0 0 0-1.34-.07l-.08.07z" opacity={.4} />
    </IconBase>
  ))
);

CitrusBoldDuotone.displayName = 'CitrusBoldDuotone';

// Triple export pattern (lucide-react style)
export { CitrusBoldDuotone, CitrusBoldDuotone as CitrusBoldDuotoneIcon, CitrusBoldDuotone as SiCitrusBoldDuotone };
export default CitrusBoldDuotone;
export type { CitrusBoldDuotoneProps };
