import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusBoldProps = Omit<IconBaseProps, 'children'>;

const CitrusBold = memo(
  forwardRef<SVGSVGElement, CitrusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.91 2q.42 0 .7.3c2.26 2.25 3.4 5.2 3.39 8.16s-1.13 5.9-3.38 8.16S13.4 22 10.46 22s-5.91-1.13-8.17-3.38q-.28-.3-.29-.7 0-.42.3-.72L17.2 2.3q.31-.3.71-.3m-.7 3.11c1.24 1.57 1.86 3.46 1.86 5.35 0 2.2-.84 4.4-2.52 6.09s-3.89 2.52-6.1 2.52c-1.88 0-3.77-.62-5.34-1.86l-.66.66C6.2 19.3 8.33 20 10.45 20c2.45 0 4.9-.93 6.75-2.8 1.87-1.86 2.8-4.3 2.8-6.74 0-2.13-.7-4.26-2.13-6zM6.54 15.8q1.34.97 2.92 1.2v-4.12zm4.92 1.2c1.03-.15 2.03-.55 2.91-1.2l-2.91-2.92zm4.33-2.62c.64-.88 1.05-1.88 1.2-2.91h-4.12zm-2.92-4.91h4.12q-.22-1.58-1.2-2.92z" clipRule="evenodd" />
    </IconBase>
  ))
);

CitrusBold.displayName = 'CitrusBold';

// Triple export pattern
export { CitrusBold, CitrusBold as CitrusBoldIcon, CitrusBold as SiCitrusBold };
export default CitrusBold;
export type { CitrusBoldProps };
