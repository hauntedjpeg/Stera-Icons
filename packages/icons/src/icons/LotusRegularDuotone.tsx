import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LotusRegularDuotone = memo(
  forwardRef<SVGSVGElement, LotusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.92 4.82q.34-.15.67.02l2.98 1.59q-.5.59-.86 1.24L5.77 6.63l-.57 2.7q-.6-.08-1.2-.08h-.32l.82-3.9.03-.09q.1-.3.4-.44M18.4 4.84q.35-.17.68-.02c.21.1.37.3.42.52l.82 3.91H20q-.6 0-1.2.08l-.57-2.7-1.94 1.04q-.37-.65-.86-1.24z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.53 3.42c.3-.24.73-.22 1 .05l2.34 2.34C16 6.94 16.75 8.3 17.14 9.73q1.35-.47 2.86-.48h2q.31 0 .53.22t.22.53v2c0 4.84-3.92 8.75-8.75 8.75h-4c-4.83 0-8.75-3.92-8.75-8.75v-2q0-.31.22-.53.22-.21.53-.22h2q1.5 0 2.86.48C7.25 8.29 8 6.93 9.13 5.8l2.34-2.34zM20 10.75q-1.39 0-2.6.48c.22 2.49-.62 5.05-2.53 6.96l-1.06 1.06H14c4 0 7.25-3.24 7.25-7.25v-1.25zM2.75 12c0 4 3.25 7.25 7.25 7.25h.19l-1.06-1.06c-1.9-1.9-2.75-4.47-2.53-6.96q-1.21-.47-2.6-.48H2.75zm7.44-5.13c-1.13 1.13-1.81 2.54-2.04 4-.34 2.22.34 4.56 2.04 6.26l1.81 1.8 1.81-1.8c1.7-1.7 2.38-4.04 2.04-6.25-.23-1.47-.9-2.88-2.04-4L12 5.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusRegularDuotone.displayName = 'LotusRegularDuotone';

// Triple export pattern
export { LotusRegularDuotone, LotusRegularDuotone as LotusRegularDuotoneIcon, LotusRegularDuotone as SiLotusRegularDuotone };
export default LotusRegularDuotone;
export type { LotusRegularDuotoneProps };
