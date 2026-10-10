import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CaseSensitiveRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CaseSensitiveRegularDuotone = memo(
  forwardRef<SVGSVGElement, CaseSensitiveRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M21 9.75c.41 0 .75.34.75.75v7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.22c-.71.6-1.62.97-2.62.97-2.3 0-4.13-1.93-4.13-4.25s1.82-4.25 4.13-4.25c1 0 1.91.37 2.62.97v-.22c0-.41.34-.75.75-.75m-3.37 1.5C16.2 11.25 15 12.45 15 14c0 1.54 1.2 2.75 2.63 2.75 1.42 0 2.62-1.2 2.62-2.75 0-1.54-1.2-2.75-2.62-2.75" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M6.37 6.46c.45-.95 1.81-.95 2.26 0l.04.1 4.03 10.68c.15.38-.05.81-.44.96-.38.15-.81-.05-.96-.44l-1.14-3.01H4.84L3.7 17.76c-.14.4-.58.59-.96.44-.4-.15-.59-.58-.44-.96L6.33 6.56zm-.96 6.79h4.18L7.5 7.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

CaseSensitiveRegularDuotone.displayName = 'CaseSensitiveRegularDuotone';

// Triple export pattern
export { CaseSensitiveRegularDuotone, CaseSensitiveRegularDuotone as CaseSensitiveRegularDuotoneIcon, CaseSensitiveRegularDuotone as SiCaseSensitiveRegularDuotone };
export default CaseSensitiveRegularDuotone;
export type { CaseSensitiveRegularDuotoneProps };
