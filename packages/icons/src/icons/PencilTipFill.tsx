import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PencilTipFillProps = Omit<IconBaseProps, 'children'>;

const PencilTipFill = memo(
  forwardRef<SVGSVGElement, PencilTipFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13q.42 0 .69.33l6.37 8.19c.53.68.82 1.52.82 2.38v8.72c0 1.17-.96 2.13-2.13 2.13h-4.87V12.5l-.32-.18c-.35-.2-.77-.2-1.12 0l-.31.18v10.37H6.25a2.13 2.13 0 0 1-2.12-2.13v-8.72c0-.86.28-1.7.81-2.38l6.37-8.19.07-.07a1 1 0 0 1 .62-.26m2.06 4.95a3.7 3.7 0 0 1-4.12 0l-3.62 4.64v.02l1.62.93c.35.2.77.2 1.12 0l1.51-.86.1-.05.04-.03.11-.05.03-.01.12-.05.04-.01a3 3 0 0 1 1.98 0l.04.01.11.05.04.01.1.05.06.03.09.05 1.51.86c.35.2.77.2 1.12 0l1.63-.93-.01-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilTipFill.displayName = 'PencilTipFill';

// Triple export pattern (lucide-react style)
export { PencilTipFill, PencilTipFill as PencilTipFillIcon, PencilTipFill as SiPencilTipFill };
export default PencilTipFill;
export type { PencilTipFillProps };
