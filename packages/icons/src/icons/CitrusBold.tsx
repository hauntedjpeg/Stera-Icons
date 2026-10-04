import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusBoldProps = Omit<IconBaseProps, 'children'>;

const CitrusBold = memo(
  forwardRef<SVGSVGElement, CitrusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.91 2a1 1 0 0 1 .7.3 11.5 11.5 0 0 1 0 16.32 11.5 11.5 0 0 1-16.32 0 1 1 0 0 1 0-1.42L17.2 2.3a1 1 0 0 1 .71-.3m-.7 3.11a8.6 8.6 0 0 1-.66 11.44 8.6 8.6 0 0 1-11.44.66l-.66.66a9.5 9.5 0 0 0 12.75-.67 9.5 9.5 0 0 0 .67-12.75zM6.54 15.8a6.6 6.6 0 0 0 2.92 1.2v-4.12zm4.92 1.2a6.6 6.6 0 0 0 2.91-1.2l-2.91-2.92zm4.33-2.62a6.6 6.6 0 0 0 1.2-2.91h-4.12zm-2.92-4.91h4.12a6.6 6.6 0 0 0-1.2-2.92z" clipRule="evenodd" />
    </IconBase>
  ))
);

CitrusBold.displayName = 'CitrusBold';

// Triple export pattern (lucide-react style)
export { CitrusBold, CitrusBold as CitrusBoldIcon, CitrusBold as SiCitrusBold };
export default CitrusBold;
export type { CitrusBoldProps };
