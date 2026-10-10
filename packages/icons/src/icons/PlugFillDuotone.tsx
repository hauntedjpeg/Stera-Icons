import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlugFillDuotone = memo(
  forwardRef<SVGSVGElement, PlugFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.66 10.1c.54-.41 1.3-.37 1.8.12l6.32 6.32c.49.5.53 1.26.12 1.8l-.09.11-.63.68-.03.02c-2.29 2.3-6.01 2.3-8.3 0s-2.3-6.01 0-8.3l.02-.03.68-.63zM21.38 1.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-2.9 2.9q-.26-.36-.57-.67t-.66-.58z" opacity={0.4} />
        <path d="M10.85 4.85c2.29-2.3 6-2.3 8.3 0s2.3 6.01 0 8.3l-.02.03-.68.63c-.54.5-1.39.5-1.91-.03l-1.04-1.04-.88.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l.88-.88-1.76-1.76-.88.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l.88-.88-1.04-1.04c-.52-.52-.54-1.37-.03-1.9l.63-.7zM4.27 18.49q.25.34.58.66.3.31.66.58l-2.9 2.89c-.33.34-.89.34-1.23 0s-.34-.9 0-1.24z" />
    </IconBase>
  ))
);

PlugFillDuotone.displayName = 'PlugFillDuotone';

// Triple export pattern
export { PlugFillDuotone, PlugFillDuotone as PlugFillDuotoneIcon, PlugFillDuotone as SiPlugFillDuotone };
export default PlugFillDuotone;
export type { PlugFillDuotoneProps };
