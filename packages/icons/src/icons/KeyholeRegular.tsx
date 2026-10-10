import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeRegularProps = Omit<IconBaseProps, 'children'>;

const KeyholeRegular = memo(
  forwardRef<SVGSVGElement, KeyholeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 1.77-.74 3.36-1.91 4.5l2.43 4.86c.66 1.33-.3 2.89-1.8 2.89H7.03c-1.48 0-2.45-1.56-1.79-2.9L7.66 13c-1.17-1.14-1.91-2.73-1.91-4.5 0-3.45 2.8-6.25 6.25-6.25m0 1.5c-2.62 0-4.75 2.13-4.75 4.75 0 1.51.7 2.86 1.8 3.73.29.22.37.6.21.92l-2.68 5.38c-.17.33.07.72.44.72h9.96c.37 0 .61-.4.45-.72l-2.7-5.38c-.15-.32-.07-.7.21-.92 1.1-.87 1.81-2.22 1.81-3.73 0-2.62-2.13-4.75-4.75-4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyholeRegular.displayName = 'KeyholeRegular';

// Triple export pattern
export { KeyholeRegular, KeyholeRegular as KeyholeRegularIcon, KeyholeRegular as SiKeyholeRegular };
export default KeyholeRegular;
export type { KeyholeRegularProps };
