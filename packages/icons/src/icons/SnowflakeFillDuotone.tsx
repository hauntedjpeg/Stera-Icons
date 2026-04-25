import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SnowflakeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SnowflakeFillDuotone = memo(
  forwardRef<SVGSVGElement, SnowflakeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13a10.87 10.87 0 1 1 0 21.74 10.87 10.87 0 0 1 0-21.74m0 2c-.48 0-.87.39-.87.87v1.48l-.7-.4a.88.88 0 0 0-.87 1.52l1.56.9v2.98L8.56 9V7.2a.88.88 0 0 0-1.75-.01v.8L5.5 7.24a.88.88 0 0 0-.87 1.52l1.28.74-.69.4a.88.88 0 0 0 .88 1.51l1.56-.9L10.25 12l-2.58 1.49-1.56-.9a.88.88 0 0 0-.88 1.51l.7.4-1.3.74a.88.88 0 0 0 .88 1.52L6.8 16v.8a.88.88 0 0 0 1.74 0V15l2.59-1.5v2.99l-1.57.9a.88.88 0 0 0 .88 1.51l.69-.4V20a.88.88 0 0 0 1.74 0v-1.49l.7.4a.88.88 0 0 0 .87-1.51l-1.56-.9V13.5l2.58 1.5v1.8a.88.88 0 0 0 1.75 0v-.8l1.28.75a.87.87 0 0 0 .88-1.52l-1.29-.74.69-.4a.88.88 0 0 0-.88-1.51l-1.56.9-2.58-1.5 2.58-1.48 1.56.9a.88.88 0 0 0 .88-1.51l-.69-.4 1.29-.74a.87.87 0 0 0-.88-1.52l-1.28.74V7.2a.88.88 0 0 0-1.75 0v1.8l-2.59 1.5V7.5l1.57-.9a.88.88 0 0 0-.88-1.51l-.69.4V4c0-.48-.39-.87-.87-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 3.13c.48 0 .88.39.88.87v1.48l.68-.4a.88.88 0 0 1 .88 1.52l-1.56.9v2.98L15.45 9V7.2a.88.88 0 0 1 1.75 0v.8l1.3-.75a.87.87 0 0 1 .87 1.52l-1.29.74.69.4a.88.88 0 0 1-.88 1.51l-1.56-.9L13.75 12l2.58 1.49 1.56-.9a.88.88 0 0 1 .88 1.51l-.69.4 1.29.74a.88.88 0 0 1-.88 1.52l-1.28-.74v.79a.88.88 0 0 1-1.75 0v-1.8l-2.59-1.5v2.98l1.57.9a.88.88 0 0 1-.88 1.52l-.69-.4V20a.88.88 0 0 1-1.74 0v-1.49l-.7.4a.88.88 0 0 1-.87-1.51l1.56-.9V13.5l-2.57 1.5v1.8a.88.88 0 0 1-1.76 0V16l-1.28.75a.88.88 0 0 1-.88-1.52l1.3-.74-.7-.4a.88.88 0 0 1 .88-1.51l1.56.9 2.58-1.5-2.58-1.48-1.56.9a.88.88 0 0 1-.88-1.51l.7-.4-1.3-.74a.88.88 0 0 1 .88-1.52L6.8 8v-.8a.88.88 0 0 1 1.75 0V9l2.57 1.5V7.5l-1.56-.9a.88.88 0 0 1 .88-1.51l.69.4V4c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SnowflakeFillDuotone.displayName = 'SnowflakeFillDuotone';

// Triple export pattern (lucide-react style)
export { SnowflakeFillDuotone, SnowflakeFillDuotone as SnowflakeFillDuotoneIcon, SnowflakeFillDuotone as SiSnowflakeFillDuotone };
export default SnowflakeFillDuotone;
export type { SnowflakeFillDuotoneProps };
