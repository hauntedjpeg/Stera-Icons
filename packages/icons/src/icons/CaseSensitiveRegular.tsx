import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveRegularProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveRegular = memo(
  forwardRef<SVGSVGElement, CaseSensitiveRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 9.62c.48 0 .88.4.88.88v7a.87.87 0 0 1-1.75.04c-.7.52-1.56.83-2.5.83A4.3 4.3 0 0 1 13.38 14a4.3 4.3 0 0 1 4.24-4.38c.95 0 1.8.32 2.5.84.03-.46.4-.84.88-.84m-3.37 1.75a2.56 2.56 0 0 0-2.5 2.63 2.56 2.56 0 0 0 2.5 2.62c1.35 0 2.5-1.14 2.5-2.62a2.56 2.56 0 0 0-2.5-2.63M6.21 6.51a1.38 1.38 0 0 1 2.53-.1l.05.1 4.03 10.68a.88.88 0 0 1-1.64.62l-1.1-2.94H4.92l-1.11 2.94a.88.88 0 0 1-1.64-.62zm-.62 6.61H9.4L7.5 8.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveRegular.displayName = 'CaseSensitiveRegular';

// Triple export pattern (lucide-react style)
export { CaseSensitiveRegular, CaseSensitiveRegular as CaseSensitiveRegularIcon, CaseSensitiveRegular as SiCaseSensitiveRegular };
export default CaseSensitiveRegular;
export type { CaseSensitiveRegularProps };
