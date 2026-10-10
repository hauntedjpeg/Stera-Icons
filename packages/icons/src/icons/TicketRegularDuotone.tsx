import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TicketRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TicketRegularDuotone = memo(
  forwardRef<SVGSVGElement, TicketRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 15.25c.41 0 .75.34.75.75v1.75h-1.5V16c0-.41.34-.75.75-.75M14 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75M14.75 6.25V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.25z" opacity={0.4} />
        <path fillRule="evenodd" d="M18.6 4.75q.6 0 1.05.02c.3.03.59.08.87.23q.65.33.98.98.2.43.23.87t.02 1.05v1.6c0 .41-.34.75-.75.75-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75q.31 0 .53.22t.22.53v1.6q0 .6-.02 1.05c-.03.3-.08.59-.23.87q-.33.65-.98.98-.43.2-.87.23t-1.05.02H5.4q-.6 0-1.05-.02c-.3-.03-.59-.08-.87-.23q-.65-.33-.98-.98-.2-.43-.23-.87t-.02-1.05v-1.6c0-.41.34-.75.75-.75.97 0 1.75-.78 1.75-1.75S3.97 10.25 3 10.25c-.41 0-.75-.34-.75-.75V7.9q0-.6.02-1.05c.03-.3.08-.59.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.02 1.05-.02zM5.4 6.25c-.43 0-.71 0-.92.02-.2.01-.28.04-.32.06q-.22.11-.33.33c-.02.04-.05.11-.06.32q-.03.29-.02.92v.94c1.43.34 2.5 1.62 2.5 3.16s-1.07 2.82-2.5 3.16v.94q0 .63.02.92.02.28.06.32.11.22.33.33c.04.02.11.05.32.06q.29.03.92.02h13.2q.63 0 .92-.02.28-.02.32-.06.22-.11.33-.33c.02-.04.05-.11.06-.32q.03-.29.02-.92v-.94c-1.43-.34-2.5-1.62-2.5-3.16s1.07-2.82 2.5-3.16V7.9c0-.43 0-.71-.02-.92-.01-.2-.04-.28-.06-.32q-.11-.22-.33-.33c-.04-.02-.11-.05-.32-.06q-.29-.03-.92-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

TicketRegularDuotone.displayName = 'TicketRegularDuotone';

// Triple export pattern
export { TicketRegularDuotone, TicketRegularDuotone as TicketRegularDuotoneIcon, TicketRegularDuotone as SiTicketRegularDuotone };
export default TicketRegularDuotone;
export type { TicketRegularDuotoneProps };
