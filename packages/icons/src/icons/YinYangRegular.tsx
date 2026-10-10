import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type YinYangRegularProps = Omit<IconBaseProps, 'children'>;

const YinYangRegular = memo(
  forwardRef<SVGSVGElement, YinYangRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 15.08c.79 0 1.42.63 1.42 1.42s-.63 1.42-1.42 1.42-1.42-.63-1.42-1.42.63-1.42 1.42-1.42M12 6.15c.75 0 1.35.6 1.35 1.35s-.6 1.35-1.35 1.35-1.35-.6-1.35-1.35.6-1.35 1.35-1.35" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75h-.27C6.47 21.6 2.25 17.28 2.25 12c0-5.38 4.37-9.75 9.75-9.75m4.75 3q.49 1.03.5 2.25c0 2.9-2.35 5.25-5.25 5.25-2.07 0-3.75 1.68-3.75 3.75 0 2 1.57 3.64 3.56 3.74l.19.01c4.56 0 8.25-3.7 8.25-8.25 0-2.79-1.39-5.25-3.5-6.75M12 3.75c-4.56 0-8.25 3.7-8.25 8.25 0 2.79 1.38 5.25 3.5 6.75q-.49-1.04-.5-2.25c0-2.9 2.35-5.25 5.25-5.25 2.07 0 3.75-1.68 3.75-3.75S14.07 3.75 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

YinYangRegular.displayName = 'YinYangRegular';

// Triple export pattern
export { YinYangRegular, YinYangRegular as YinYangRegularIcon, YinYangRegular as SiYinYangRegular };
export default YinYangRegular;
export type { YinYangRegularProps };
