import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusRegularProps = Omit<IconBaseProps, 'children'>;

const LotusRegular = memo(
  forwardRef<SVGSVGElement, LotusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.53 3.42c.3-.24.73-.22 1 .05l2.34 2.34q.3.3.57.62l2.97-1.6.08-.03q.3-.11.59.02c.21.1.37.3.42.52l.82 3.91H22q.31 0 .53.22t.22.53v2c0 4.84-3.92 8.75-8.75 8.75h-4c-4.83 0-8.75-3.92-8.75-8.75v-2q0-.31.22-.53.22-.21.53-.22h1.68l.82-3.9.03-.09q.1-.3.4-.44c.2-.1.45-.1.66.02l2.98 1.59q.26-.32.56-.62l2.34-2.34zm8.18 7.34q-1.21.05-2.31.47c.22 2.49-.62 5.05-2.53 6.96l-1.06 1.06H14c4 0 7.25-3.24 7.25-7.25v-1.25h-1.54M2.75 12c0 4 3.25 7.25 7.25 7.25h.19l-1.06-1.06c-1.9-1.9-2.75-4.47-2.53-6.96q-1.08-.42-2.32-.47L4 10.75H2.75zm7.44-5.13q-.45.45-.8.95c-.66.93-1.07 1.98-1.24 3.06-.34 2.2.34 4.55 2.04 6.25l1.81 1.8 1.81-1.8c1.7-1.7 2.38-4.04 2.04-6.25-.17-1.09-.57-2.14-1.23-3.06q-.35-.49-.8-.95L12 5.06zm-5 2.46q.87.13 1.67.4.3-1.07.85-2.06L5.77 6.63zm11.1-1.66q.57.98.85 2.06.8-.28 1.66-.4l-.57-2.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusRegular.displayName = 'LotusRegular';

// Triple export pattern
export { LotusRegular, LotusRegular as LotusRegularIcon, LotusRegular as SiLotusRegular };
export default LotusRegular;
export type { LotusRegularProps };
