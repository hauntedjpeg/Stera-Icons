import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ServerFillProps = Omit<IconBaseProps, 'children'>;

const ServerFill = memo(
  forwardRef<SVGSVGElement, ServerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.1 13.25q.6 0 1.05.02t.87.23q.65.33.98.98.2.43.23.87t.02 1.05v1.7q0 .6-.02 1.05c-.03.3-.08.59-.23.87q-.33.65-.98.98-.43.2-.87.23t-1.05.02H5.9q-.6 0-1.05-.02c-.3-.03-.59-.08-.87-.23q-.65-.33-.98-.98-.2-.43-.23-.87t-.02-1.05v-1.7q0-.6.02-1.05c.03-.3.08-.59.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.02 1.05-.02zM7 16c-.69 0-1.25.56-1.25 1.25S6.31 18.5 7 18.5s1.25-.56 1.25-1.25S7.69 16 7 16M18.1 2.75q.6 0 1.05.02c.3.03.59.08.87.23q.65.33.98.98.2.43.23.87t.02 1.05v1.7q0 .6-.02 1.05c-.03.3-.08.59-.23.87q-.33.65-.98.98c-.28.15-.58.2-.87.23q-.44.02-1.05.02H5.9q-.6 0-1.05-.02t-.87-.23q-.65-.33-.98-.98-.2-.43-.23-.87T2.75 7.6V5.9q0-.6.02-1.05c.03-.3.08-.59.23-.87q.33-.65.98-.98.43-.2.87-.23t1.05-.02zM7 5.5c-.69 0-1.25.56-1.25 1.25S6.31 8 7 8s1.25-.56 1.25-1.25S7.69 5.5 7 5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ServerFill.displayName = 'ServerFill';

// Triple export pattern
export { ServerFill, ServerFill as ServerFillIcon, ServerFill as SiServerFill };
export default ServerFill;
export type { ServerFillProps };
