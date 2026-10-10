import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowerBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.73 3.86c1.13-.91 2.7-1.22 4.26-.33 1.58.88 2.1 2.38 1.85 3.81q-.09.5-.3.96.53.06 1.02.23C20.92 9.02 22 10.2 22 12s-1.08 2.98-2.44 3.47q-.5.17-1.01.23.2.46.29.96c.26 1.43-.27 2.93-1.85 3.81-1.57.88-3.13.58-4.26-.33q-.4-.34-.73-.77-.33.42-.73.77c-1.12.91-2.7 1.21-4.26.33-1.57-.88-2.1-2.38-1.85-3.81q.09-.5.3-.96-.53-.06-1.02-.23C3.08 14.98 2 13.8 2 12s1.08-2.98 2.44-3.47q.5-.17 1.01-.23-.2-.46-.29-.96c-.26-1.43.28-2.93 1.85-3.81 1.57-.89 3.14-.58 4.26.33q.4.34.73.77.33-.44.73-.77m3.28 1.41c-.79-.44-1.47-.3-2.01.14-.59.48-1 1.33-1 2.2q-.49-.1-1-.11t-1 .11v-.17c-.05-.8-.45-1.58-1-2.03-.54-.44-1.22-.58-2-.14-.8.44-.99 1.07-.87 1.72.13.72.67 1.5 1.46 1.94l.08.05q-.68.74-.98 1.74l-.08-.05-.15-.07c-.76-.38-1.66-.43-2.35-.19-.66.24-1.11.74-1.11 1.6 0 .84.44 1.34 1.11 1.57.73.26 1.7.19 2.5-.25l.08-.05q.3 1 .98 1.74l-.08.05c-.79.44-1.33 1.22-1.46 1.94-.12.65.08 1.28.86 1.72.79.44 1.47.3 2.01-.14.59-.48 1-1.33 1-2.2q.49.1 1 .11t1-.11c0 .87.41 1.72 1 2.2.54.44 1.22.58 2.01.14s.98-1.07.86-1.72c-.13-.72-.67-1.5-1.46-1.94l-.08-.05q.69-.74.98-1.74l.08.05.15.07c.76.38 1.66.43 2.35.18.67-.23 1.11-.73 1.11-1.58s-.45-1.35-1.11-1.59c-.73-.25-1.7-.18-2.5.26l-.08.05q-.3-1-.98-1.74l.08-.05c.79-.44 1.33-1.22 1.46-1.94.12-.65-.08-1.28-.86-1.72" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 7.5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5m0 2c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowerBoldDuotone.displayName = 'FlowerBoldDuotone';

// Triple export pattern
export { FlowerBoldDuotone, FlowerBoldDuotone as FlowerBoldDuotoneIcon, FlowerBoldDuotone as SiFlowerBoldDuotone };
export default FlowerBoldDuotone;
export type { FlowerBoldDuotoneProps };
