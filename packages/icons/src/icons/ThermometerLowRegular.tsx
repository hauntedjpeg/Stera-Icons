import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThermometerLowRegularProps = Omit<IconBaseProps, 'children'>;

const ThermometerLowRegular = memo(
  forwardRef<SVGSVGElement, ThermometerLowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.75c.41 0 .75.34.75.75v1.11c0 .75.5 1.36 1 1.78.61.5 1 1.26 1 2.11 0 1.52-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75c0-.85.39-1.6 1-2.11.5-.42 1-1.03 1-1.78V11.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c2.07 0 3.75 1.68 3.75 3.75V12q-.01.11.14.27c1.14 1.05 1.86 2.56 1.86 4.23 0 3.18-2.57 5.75-5.75 5.75s-5.75-2.57-5.75-5.75c0-1.67.72-3.18 1.86-4.23q.14-.16.14-.27V5.5c0-2.07 1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25V12c0 .56-.27 1.04-.63 1.37-.84.78-1.37 1.9-1.37 3.13 0 2.35 1.9 4.25 4.25 4.25s4.25-1.9 4.25-4.25c0-1.24-.53-2.35-1.37-3.13-.36-.33-.63-.8-.63-1.37V5.5c0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ThermometerLowRegular.displayName = 'ThermometerLowRegular';

// Triple export pattern
export { ThermometerLowRegular, ThermometerLowRegular as ThermometerLowRegularIcon, ThermometerLowRegular as SiThermometerLowRegular };
export default ThermometerLowRegular;
export type { ThermometerLowRegularProps };
