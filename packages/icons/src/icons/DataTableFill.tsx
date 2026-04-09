import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DataTableFillProps = Omit<IconBaseProps, 'children'>;

const DataTableFill = memo(
  forwardRef<SVGSVGElement, DataTableFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="data-table-fill" {...props}>
      <path fillRule="evenodd" d="M16.2 3.63q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v5.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.3q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM9.38 15.38v3.24h6.82c.85 0 1.44 0 1.9-.03.45-.04.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86q.03-.48.03-1.23zm0-1.76h10.75v-3.24H9.38zm0-5h10.74q0-.75-.03-1.22c-.04-.45-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2c-.46-.03-1.05-.04-1.9-.04H9.38z" clipRule="evenodd" />
    </IconBase>
  ))
);

DataTableFill.displayName = 'DataTableFill';

// Triple export pattern (lucide-react style)
export { DataTableFill, DataTableFill as DataTableFillIcon, DataTableFill as SiDataTableFill };
export default DataTableFill;
export type { DataTableFillProps };
