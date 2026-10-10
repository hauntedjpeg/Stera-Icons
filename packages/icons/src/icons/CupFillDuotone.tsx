import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CupFillDuotone = memo(
  forwardRef<SVGSVGElement, CupFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.44 12.62c-.32 4.1-3.74 7.26-7.85 7.26H10.4c-4.1 0-7.53-3.17-7.85-7.26l-.43-5.46c.08.68.64 1.13 1.05 1.37.51.3 1.19.54 1.95.73 1.54.39 3.61.62 5.87.62s4.33-.23 5.87-.62c.76-.19 1.44-.43 1.95-.73.41-.24.97-.69 1.05-1.37z" opacity={.4} />
        <path d="M19.71 9.13c1.77.11 3.16 1.58 3.16 3.37 0 1.86-1.5 3.37-3.37 3.38h-1.06q.47-.83.73-1.76h.33c.9 0 1.63-.72 1.63-1.62 0-.87-.7-1.58-1.56-1.62z" />
        <path fillRule="evenodd" d="M11 4.13c2.26 0 4.33.22 5.87.6.76.2 1.44.44 1.95.74.45.26 1.05.75 1.05 1.53s-.6 1.27-1.05 1.53c-.51.3-1.19.54-1.95.73-1.54.39-3.61.62-5.87.62s-4.33-.23-5.87-.62c-.76-.19-1.44-.43-1.95-.73-.45-.26-1.06-.75-1.06-1.53s.61-1.27 1.06-1.53c.51-.3 1.19-.54 1.95-.73 1.54-.39 3.61-.62 5.87-.62m0 1.75c-2.16 0-4.08.21-5.44.55q-1.04.28-1.49.54L4.03 7q.03 0 .04.03.45.26 1.49.54c1.36.34 3.28.55 5.44.55s4.08-.21 5.44-.55q1.04-.28 1.49-.54l.03-.03-.03-.03q-.45-.26-1.49-.54c-1.36-.34-3.28-.55-5.44-.55" clipRule="evenodd" />
    </IconBase>
  ))
);

CupFillDuotone.displayName = 'CupFillDuotone';

// Triple export pattern
export { CupFillDuotone, CupFillDuotone as CupFillDuotoneIcon, CupFillDuotone as SiCupFillDuotone };
export default CupFillDuotone;
export type { CupFillDuotoneProps };
