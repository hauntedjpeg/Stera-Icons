import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronInwardRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardRegular = memo(
  forwardRef<SVGSVGElement, ChevronInwardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.47 14.47c.3-.3.77-.3 1.06 0l6 6c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 16.06l-5.47 5.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM17.47 2.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-6 6c-.3.3-.77.3-1.06 0l-6-6c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 7.94z" />
    </IconBase>
  ))
);

ChevronInwardRegular.displayName = 'ChevronInwardRegular';

// Triple export pattern
export { ChevronInwardRegular, ChevronInwardRegular as ChevronInwardRegularIcon, ChevronInwardRegular as SiChevronInwardRegular };
export default ChevronInwardRegular;
export type { ChevronInwardRegularProps };
