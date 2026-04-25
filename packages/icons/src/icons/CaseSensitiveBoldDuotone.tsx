import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveBoldDuotone = memo(
  forwardRef<SVGSVGElement, CaseSensitiveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 9.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1.97.26c-.68.46-1.5.74-2.4.74a4.44 4.44 0 0 1-4.38-4.5c0-2.45 1.92-4.5 4.38-4.5.9 0 1.72.28 2.4.74A1 1 0 0 1 21 9.5m-3.37 2a2.44 2.44 0 0 0-2.38 2.5c0 1.42 1.1 2.5 2.38 2.5A2.44 2.44 0 0 0 20 14c0-1.42-1.1-2.5-2.37-2.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M6.15 6.35a1.5 1.5 0 0 1 2.7 0l.05.12 4.04 10.68a1 1 0 0 1-1.88.7L10 15H5l-1.07 2.85a1 1 0 0 1-1.88-.7L6.1 6.47zM5.77 13h3.46L7.5 8.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveBoldDuotone.displayName = 'CaseSensitiveBoldDuotone';

// Triple export pattern (lucide-react style)
export { CaseSensitiveBoldDuotone, CaseSensitiveBoldDuotone as CaseSensitiveBoldDuotoneIcon, CaseSensitiveBoldDuotone as SiCaseSensitiveBoldDuotone };
export default CaseSensitiveBoldDuotone;
export type { CaseSensitiveBoldDuotoneProps };
