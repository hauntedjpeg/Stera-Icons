import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveRegularDuotone = memo(
  forwardRef<SVGSVGElement, CaseSensitiveRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 9.75c.41 0 .75.34.75.75v7a.75.75 0 0 1-1.5 0v-.22c-.71.6-1.62.97-2.62.97A4.2 4.2 0 0 1 13.5 14a4.2 4.2 0 0 1 4.13-4.25c1 0 1.91.37 2.62.97v-.22c0-.41.34-.75.75-.75m-3.37 1.5A2.7 2.7 0 0 0 15 14c0 1.54 1.2 2.75 2.63 2.75 1.42 0 2.62-1.2 2.62-2.75 0-1.54-1.2-2.75-2.62-2.75" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M6.37 6.46a1.25 1.25 0 0 1 2.26 0l.04.1 4.03 10.68a.75.75 0 0 1-1.4.52l-1.14-3.01H4.84L3.7 17.76a.75.75 0 1 1-1.4-.52L6.33 6.56zm-.96 6.79h4.18L7.5 7.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveRegularDuotone.displayName = 'CaseSensitiveRegularDuotone';

// Triple export pattern (lucide-react style)
export { CaseSensitiveRegularDuotone, CaseSensitiveRegularDuotone as CaseSensitiveRegularDuotoneIcon, CaseSensitiveRegularDuotone as SiCaseSensitiveRegularDuotone };
export default CaseSensitiveRegularDuotone;
export type { CaseSensitiveRegularDuotoneProps };
