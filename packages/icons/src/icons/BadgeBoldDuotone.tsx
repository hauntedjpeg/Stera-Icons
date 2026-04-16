import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BadgeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BadgeBoldDuotone = memo(
  forwardRef<SVGSVGElement, BadgeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.83a1 1 0 0 0-.7.3l-.94.92a3 3 0 0 1-2.12.88H6.93a1 1 0 0 0-1 1v1.31a3 3 0 0 1-.88 2.12l-.93.93a1 1 0 0 0 0 1.42l.93.93a3 3 0 0 1 .88 2.12v1.31a1 1 0 0 0 1 1h1.31a3 3 0 0 1 2.12.88l.93.93q.31.3.71.3v2a3 3 0 0 1-2.12-.89l-.93-.93a1 1 0 0 0-.7-.29H6.92a3 3 0 0 1-3-3v-1.31a1 1 0 0 0-.3-.71l-.92-.93a3 3 0 0 1 0-4.24l.93-.93a1 1 0 0 0 .29-.7V6.92a3 3 0 0 1 3-3h1.31a1 1 0 0 0 .71-.3l.93-.92A3 3 0 0 1 12 1.83z" opacity={.4} />
        <path d="M12 1.83a3 3 0 0 1 2.12.88l.93.93a1 1 0 0 0 .7.29h1.32a3 3 0 0 1 3 3v1.31q0 .41.3.71l.92.93a3 3 0 0 1 0 4.24l-.93.93a1 1 0 0 0-.29.7v1.32a3 3 0 0 1-3 3h-1.31a1 1 0 0 0-.71.3l-.93.92a3 3 0 0 1-2.12.88v-2a1 1 0 0 0 .7-.3l.94-.92a3 3 0 0 1 2.12-.88h1.31a1 1 0 0 0 1-1v-1.31a3 3 0 0 1 .88-2.12l.93-.93a1 1 0 0 0 0-1.42l-.93-.93a3 3 0 0 1-.88-2.12V6.93a1 1 0 0 0-1-1h-1.31a3 3 0 0 1-2.12-.88l-.93-.93a1 1 0 0 0-.71-.3z" />
    </IconBase>
  ))
);

BadgeBoldDuotone.displayName = 'BadgeBoldDuotone';

// Triple export pattern (lucide-react style)
export { BadgeBoldDuotone, BadgeBoldDuotone as BadgeBoldDuotoneIcon, BadgeBoldDuotone as SiBadgeBoldDuotone };
export default BadgeBoldDuotone;
export type { BadgeBoldDuotoneProps };
