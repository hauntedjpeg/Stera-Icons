import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveRegularProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveRegular = memo(
  forwardRef<SVGSVGElement, CaseSensitiveRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 9.62c.48 0 .88.4.88.88v7c0 .48-.4.87-.88.87-.47 0-.85-.37-.87-.83-.7.52-1.56.83-2.5.83-2.38 0-4.25-1.98-4.25-4.37s1.87-4.38 4.24-4.38c.95 0 1.8.32 2.5.84.03-.46.4-.84.88-.84m-3.37 1.75c-1.36 0-2.5 1.15-2.5 2.63s1.14 2.62 2.5 2.62c1.35 0 2.5-1.14 2.5-2.62s-1.15-2.63-2.5-2.63M6.21 6.51c.44-1.14 2.03-1.18 2.53-.1l.05.1 4.03 10.68c.17.45-.06.96-.51 1.13s-.96-.06-1.13-.51l-1.1-2.94H4.92l-1.11 2.94c-.17.45-.68.68-1.13.5-.45-.16-.68-.67-.5-1.12zm-.62 6.61H9.4L7.5 8.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveRegular.displayName = 'CaseSensitiveRegular';

// Triple export pattern
export { CaseSensitiveRegular, CaseSensitiveRegular as CaseSensitiveRegularIcon, CaseSensitiveRegular as SiCaseSensitiveRegular };
export default CaseSensitiveRegular;
export type { CaseSensitiveRegularProps };
