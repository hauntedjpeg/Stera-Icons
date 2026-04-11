import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SnowflakeFillProps = Omit<IconBaseProps, 'children'>;

const SnowflakeFill = memo(
  forwardRef<SVGSVGElement, SnowflakeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13a10.87 10.87 0 1 1 0 21.74 10.87 10.87 0 0 1 0-21.74m0 2c-.48 0-.87.39-.87.87v1.48l-.7-.4a.88.88 0 0 0-.87 1.52l1.56.9v2.98L8.56 9V7.2a.88.88 0 0 0-1.75 0v.79L5.5 7.24a.88.88 0 0 0-.88 1.52l1.3.74-.7.4a.88.88 0 0 0 .88 1.51l1.56-.9L10.25 12l-2.58 1.49-1.56-.9a.88.88 0 0 0-.88 1.51l.7.4-1.3.74a.88.88 0 0 0 .88 1.52L6.8 16v.8a.88.88 0 0 0 1.74 0V15l2.59-1.5v2.99l-1.57.9a.88.88 0 0 0 .88 1.51l.69-.4V20a.88.88 0 0 0 1.74 0v-1.49l.7.4a.88.88 0 0 0 .87-1.51l-1.56-.9V13.5l2.58 1.5v1.8a.88.88 0 0 0 1.75 0v-.8l1.28.75a.88.88 0 0 0 .88-1.52l-1.29-.74.69-.4a.88.88 0 0 0-.88-1.51l-1.56.9-2.58-1.5 2.58-1.48 1.56.9a.88.88 0 0 0 .88-1.51l-.69-.4 1.29-.74a.88.88 0 0 0-.88-1.52l-1.28.74V7.2a.88.88 0 0 0-1.75 0v1.8l-2.59 1.5V7.5l1.57-.9a.88.88 0 0 0-.88-1.51l-.69.4V4c0-.48-.39-.87-.87-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

SnowflakeFill.displayName = 'SnowflakeFill';

// Triple export pattern (lucide-react style)
export { SnowflakeFill, SnowflakeFill as SnowflakeFillIcon, SnowflakeFill as SiSnowflakeFill };
export default SnowflakeFill;
export type { SnowflakeFillProps };
