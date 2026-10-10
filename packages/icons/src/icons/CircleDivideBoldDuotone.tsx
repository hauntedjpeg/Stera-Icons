import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 2.05c5.05.5 9 4.76 9 9.95s-3.95 9.45-9 9.95v-2.01c3.95-.5 7-3.86 7-7.94s-3.05-7.44-7-7.94z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2q.5 0 1 .05v19.9q-.5.05-1 .05C6.48 22 2 17.52 2 12S6.48 2 12 2m-1.03 2.07-.33.05h-.02l-.33.06-.07.02-.22.05-.08.03-.3.08q-.7.22-1.34.56l-.04.02-.27.15q-.03 0-.05.03l-.25.15-.06.04-.24.17-.06.04-.2.15-.12.1-.17.14-.09.07-.19.17-.07.07-.19.19-.07.07-.17.19-.1.11-.13.15-.16.2-.07.1-.15.2-.38.6-.07.12-.08.17-.09.16-.08.17-.08.18-.07.18-.06.15-.08.2-.05.16-.06.19-.05.2-.05.17-.04.17-.04.2-.03.18-.04.21-.02.16-.02.22Q4 11.6 4 12t.04.78l.02.22.02.16.04.2q0 .1.03.19l.04.2.04.17.05.17.05.2.06.19.05.15.08.2.05.14.08.2.08.17.09.18.05.11.12.23.04.06q.3.54.68 1.03l.1.1.1.14.12.14.44.45.07.07.2.17.07.07.2.16.08.06c1.1.87 2.45 1.44 3.91 1.63V4.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideBoldDuotone.displayName = 'CircleDivideBoldDuotone';

// Triple export pattern
export { CircleDivideBoldDuotone, CircleDivideBoldDuotone as CircleDivideBoldDuotoneIcon, CircleDivideBoldDuotone as SiCircleDivideBoldDuotone };
export default CircleDivideBoldDuotone;
export type { CircleDivideBoldDuotoneProps };
