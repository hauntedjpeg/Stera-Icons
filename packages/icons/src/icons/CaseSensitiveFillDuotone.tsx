import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveFillDuotone = memo(
  forwardRef<SVGSVGElement, CaseSensitiveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 9.25c.69 0 1.25.56 1.25 1.25v7c0 .69-.56 1.25-1.25 1.25-.46 0-.86-.25-1.08-.62q-1.02.61-2.3.62c-2.6 0-4.62-2.17-4.62-4.75s2.03-4.75 4.63-4.75q1.27.02 2.29.62c.22-.37.62-.62 1.08-.62m-3.37 2.5c-1.14 0-2.13.96-2.13 2.25s1 2.25 2.13 2.25 2.12-.96 2.12-2.25-1-2.25-2.12-2.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M5.86 6.38c.55-1.46 2.58-1.5 3.22-.14l.06.14 4.03 10.68c.24.64-.08 1.37-.73 1.6-.64.25-1.37-.07-1.6-.72L9.8 15.25H5.2l-1.02 2.7c-.25.64-.97.96-1.61.72s-.97-.97-.73-1.61zm.27 6.37h2.74L7.5 9.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveFillDuotone.displayName = 'CaseSensitiveFillDuotone';

// Triple export pattern
export { CaseSensitiveFillDuotone, CaseSensitiveFillDuotone as CaseSensitiveFillDuotoneIcon, CaseSensitiveFillDuotone as SiCaseSensitiveFillDuotone };
export default CaseSensitiveFillDuotone;
export type { CaseSensitiveFillDuotoneProps };
