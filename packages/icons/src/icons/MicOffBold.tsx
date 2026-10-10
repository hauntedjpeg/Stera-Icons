import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffBoldProps = Omit<IconBaseProps, 'children'>;

const MicOffBold = memo(
  forwardRef<SVGSVGElement, MicOffBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l16 16c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-2.88-2.86q-1.56.89-3.42 1.1V20h2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h2v-1.06c-3.75-.41-6.8-3.12-7.72-6.7-.13-.53.19-1.07.72-1.2.54-.15 1.08.18 1.22.71C6 14.77 8.74 17 12 17q1.59-.01 2.94-.65l-1.55-1.55q-.66.2-1.39.2c-2.76 0-5-2.24-5-5V8.41l-3.7-3.7c-.4-.4-.4-1.03 0-1.42m15.48 8.45c.14-.53.68-.86 1.22-.72s.85.68.72 1.22q-.4 1.48-1.22 2.72c-.3.46-.92.59-1.38.28s-.59-.92-.28-1.38q.64-.97.94-2.12m-9.75-1.3c.2 1.3 1.22 2.32 2.52 2.52zM15 10V7c0-1.66-1.34-3-3-3-.97 0-1.84.46-2.39 1.18-.33.44-.96.52-1.4.19-.44-.34-.52-.96-.19-1.4C8.94 2.77 10.38 2 12 2c2.76 0 5 2.24 5 5v3q0 .98-.35 1.84c-.2.52-.79.77-1.3.56s-.76-.78-.56-1.3q.2-.5.21-1.1" />
    </IconBase>
  ))
);

MicOffBold.displayName = 'MicOffBold';

// Triple export pattern
export { MicOffBold, MicOffBold as MicOffBoldIcon, MicOffBold as SiMicOffBold };
export default MicOffBold;
export type { MicOffBoldProps };
