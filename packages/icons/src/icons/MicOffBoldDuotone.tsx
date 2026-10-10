import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, MicOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 11.03c.54-.14 1.08.19 1.22.72C6 14.77 8.74 17 12 17q1.59-.01 2.94-.65l1.48 1.49q-1.56.89-3.42 1.1V20h2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-1.06c-3.75-.41-6.8-3.12-7.72-6.7-.13-.53.19-1.07.72-1.2M18.78 11.75c.14-.53.68-.86 1.22-.72s.85.68.72 1.22q-.4 1.48-1.22 2.72c-.3.46-.92.59-1.38.28s-.59-.92-.28-1.38q.63-.97.94-2.12" opacity={0.4} />
        <path d="M9.03 10.45c.2 1.3 1.22 2.32 2.52 2.52l1.84 1.83q-.66.2-1.4.2c-2.75 0-5-2.24-5-5V8.41zM12 2c2.76 0 5 2.24 5 5v3q0 .98-.35 1.84c-.2.51-.79.77-1.3.56s-.76-.78-.56-1.3q.2-.5.2-1.1V7c0-1.66-1.33-3-3-3-.96 0-1.83.46-2.38 1.18-.33.44-.96.52-1.4.19-.44-.34-.52-.96-.19-1.4C8.94 2.77 10.38 2 12 2" opacity={0.4} />
        <path d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l16 16c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-16-16c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

MicOffBoldDuotone.displayName = 'MicOffBoldDuotone';

// Triple export pattern
export { MicOffBoldDuotone, MicOffBoldDuotone as MicOffBoldDuotoneIcon, MicOffBoldDuotone as SiMicOffBoldDuotone };
export default MicOffBoldDuotone;
export type { MicOffBoldDuotoneProps };
