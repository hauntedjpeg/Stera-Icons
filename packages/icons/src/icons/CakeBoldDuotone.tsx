import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CakeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CakeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CakeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17.3q0 .81-.03 1.4c-.03.4-.1.78-.3 1.16q-.44.87-1.3 1.31c-.39.2-.78.27-1.17.3q-.59.04-1.4.03H7.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3q-.87-.44-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4v-1.66q.8.91 2 1.23v.43c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h9.6c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09q.3-.15.44-.44c.03-.05.06-.15.09-.42.02-.28.02-.65.02-1.23v-.43c.79-.2 1.48-.64 2-1.23z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.6 1.2h.01l.02.03.08.06.26.21c.21.19.5.45.78.77C14.27 2.87 15 3.86 15 5c0 1.3-.84 2.41-2 2.83v.67h-2v-.67C9.84 7.4 9 6.3 9 5c0-1.14.73-2.14 1.25-2.73q.45-.48.78-.77l.26-.21.08-.06.02-.02V1.2L12 .75zm-.85 2.4C11.27 4.14 11 4.65 11 5c0 .55.45 1 1 1s1-.45 1-1c0-.35-.27-.86-.75-1.4L12 3.33z" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M19 8.5c1.66 0 3 1.34 3 3V13c0 2.2-1.8 4-4 4-1.2 0-2.27-.53-3-1.36-.73.83-1.8 1.36-3 1.36s-2.27-.53-3-1.36C8.27 16.47 7.2 17 6 17c-2.2 0-4-1.8-4-4v-1.5c0-1.66 1.34-3 3-3zm-14 2c-.55 0-1 .45-1 1V13c0 1.1.9 2 2 2s2-.9 2-2c0-.55.45-1 1-1s1 .45 1 1c0 1.1.9 2 2 2s2-.9 2-2c0-.55.45-1 1-1s1 .45 1 1c0 1.1.9 2 2 2s2-.9 2-2v-1.5c0-.55-.45-1-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

CakeBoldDuotone.displayName = 'CakeBoldDuotone';

// Triple export pattern
export { CakeBoldDuotone, CakeBoldDuotone as CakeBoldDuotoneIcon, CakeBoldDuotone as SiCakeBoldDuotone };
export default CakeBoldDuotone;
export type { CakeBoldDuotoneProps };
