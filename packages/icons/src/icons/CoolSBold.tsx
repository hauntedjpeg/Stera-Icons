import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoolSBoldProps = Omit<IconBaseProps, 'children'>;

const CoolSBold = memo(
  forwardRef<SVGSVGElement, CoolSBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.52 1.12c.35-.19.79-.16 1.1.1l5 4c.24.19.38.48.38.78v4c0 .55-.45 1-1 1h-1.59l2.3 2.3q.28.28.29.7v4c0 .3-.14.6-.37.78l-5 4c-.37.3-.89.3-1.26 0l-5-4C6.15 18.6 6 18.3 6 18v-4c0-.55.45-1 1-1h1.59l-2.3-2.3c-.18-.18-.29-.44-.29-.7V6c0-.3.14-.6.38-.78l5-4zM8 6.48v3.1l4.7 4.71q.3.3.3.71v2c0 .55-.45 1-1 1s-1-.45-1-1v-1.59l-.41-.41H8v2.52l4 3.2 4-3.2v-3.1L11.3 9.7Q11 9.4 11 9V7c0-.55.45-1 1-1s1 .45 1 1v1.59l.41.41H16V6.48l-4-3.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

CoolSBold.displayName = 'CoolSBold';

// Triple export pattern
export { CoolSBold, CoolSBold as CoolSBoldIcon, CoolSBold as SiCoolSBold };
export default CoolSBold;
export type { CoolSBoldProps };
