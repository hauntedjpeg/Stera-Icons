import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WarehouseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WarehouseFillDuotone = memo(
  forwardRef<SVGSVGElement, WarehouseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.42 3.47q.58-.12 1.16 0c.46.1.88.34 1.4.63l5.8 3.22c.55.3 1 .54 1.33.9q.43.46.62 1.05c.16.48.14.99.14 1.61v4.92q0 .81-.03 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.55.05-1.38.03h-.43v-6.62c0-1.17-.95-2.13-2.12-2.13h-6.5c-1.17 0-2.12.96-2.13 2.13v6.62H6.2q-.82 0-1.38-.03-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38v-4.92c0-.62 0-1.13.15-1.6q.2-.6.62-1.05c.33-.37.78-.6 1.33-.91l5.8-3.22c.52-.29.94-.53 1.4-.63" opacity={0.4} />
        <path d="M15.62 17.37v2.5H8.37v-2.5zM15.25 12.87c.2 0 .37.17.37.38v2.37H8.37v-2.37c0-.2.17-.38.38-.38z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.25 11.13c1.17 0 2.13.95 2.13 2.12v6.63h-1.75v-2.5H8.37v2.5H6.64v-6.63c0-1.17.95-2.12 2.12-2.12zm-6.5 1.74c-.2 0-.37.17-.37.38v2.38h7.24v-2.38c0-.2-.16-.37-.37-.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

WarehouseFillDuotone.displayName = 'WarehouseFillDuotone';

// Triple export pattern (lucide-react style)
export { WarehouseFillDuotone, WarehouseFillDuotone as WarehouseFillDuotoneIcon, WarehouseFillDuotone as SiWarehouseFillDuotone };
export default WarehouseFillDuotone;
export type { WarehouseFillDuotoneProps };
