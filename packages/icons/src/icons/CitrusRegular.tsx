import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CitrusRegularProps = Omit<IconBaseProps, 'children'>;

const CitrusRegular = memo(
  forwardRef<SVGSVGElement, CitrusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.91 2.25q.32 0 .53.22c2.2 2.2 3.31 5.1 3.31 7.99s-1.1 5.78-3.3 7.98c-2.21 2.2-5.1 3.31-8 3.31-2.88 0-5.77-1.1-7.98-3.3q-.21-.23-.22-.54 0-.31.22-.53l7.45-7.45.01-.01 7.45-7.45.12-.1q.18-.12.41-.12M16.88 5.1c1.3 1.54 1.94 3.45 1.94 5.36 0 2.14-.82 4.28-2.45 5.91s-3.77 2.45-5.91 2.45c-1.9 0-3.82-.65-5.36-1.94l-1.02 1c1.83 1.58 4.1 2.37 6.38 2.37 2.5 0 5.01-.96 6.92-2.87s2.87-4.42 2.87-6.92c0-2.28-.79-4.55-2.36-6.38zM6.16 15.8c1.05.84 2.28 1.33 3.55 1.47v-5.01zm5.05 1.47c1.26-.14 2.5-.63 3.54-1.47l-3.54-3.54zm4.6-2.53c.84-1.04 1.33-2.28 1.47-3.54h-5.01zm-3.55-5.04h5.02c-.14-1.27-.63-2.5-1.47-3.55z" clipRule="evenodd" />
    </IconBase>
  ))
);

CitrusRegular.displayName = 'CitrusRegular';

// Triple export pattern
export { CitrusRegular, CitrusRegular as CitrusRegularIcon, CitrusRegular as SiCitrusRegular };
export default CitrusRegular;
export type { CitrusRegularProps };
