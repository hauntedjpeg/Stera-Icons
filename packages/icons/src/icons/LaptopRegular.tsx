import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LaptopRegularProps = Omit<IconBaseProps, 'children'>;

const LaptopRegular = memo(
  forwardRef<SVGSVGElement, LaptopRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.3 3.75q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v6.79q.12.16.2.36l1.2 3c.46 1.15-.39 2.4-1.63 2.4H3.98c-1.24 0-2.09-1.25-1.63-2.4l1.2-3q.08-.2.2-.36V7.7q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM5.18 15.25q-.17 0-.23.16l-1.2 3c-.07.16.05.34.23.34h16.04c.18 0 .3-.18.23-.34l-1.2-3q-.05-.16-.23-.16zm2.52-10c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v6.05h13.5V7.7q0-.83-.02-1.25c-.03-.29-.07-.43-.12-.52q-.18-.35-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

LaptopRegular.displayName = 'LaptopRegular';

// Triple export pattern
export { LaptopRegular, LaptopRegular as LaptopRegularIcon, LaptopRegular as SiLaptopRegular };
export default LaptopRegular;
export type { LaptopRegularProps };
