import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveBoldProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveBold = memo(
  forwardRef<SVGSVGElement, CaseSensitiveBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.15 6.35a1.5 1.5 0 0 1 2.7 0l.05.12 4.04 10.68a1 1 0 0 1-1.88.7L10 15H5l-1.07 2.85a1 1 0 0 1-1.88-.7L6.1 6.47zM5.77 13h3.46L7.5 8.41zM21 9.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1.97.26c-.68.46-1.5.74-2.4.74a4.44 4.44 0 0 1-4.38-4.5c0-2.45 1.92-4.5 4.37-4.5.9 0 1.73.28 2.41.74A1 1 0 0 1 21 9.5m-3.38 2a2.44 2.44 0 0 0-2.37 2.5c0 1.41 1.1 2.5 2.37 2.5A2.44 2.44 0 0 0 20 14c0-1.42-1.1-2.5-2.38-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveBold.displayName = 'CaseSensitiveBold';

// Triple export pattern (lucide-react style)
export { CaseSensitiveBold, CaseSensitiveBold as CaseSensitiveBoldIcon, CaseSensitiveBold as SiCaseSensitiveBold };
export default CaseSensitiveBold;
export type { CaseSensitiveBoldProps };
