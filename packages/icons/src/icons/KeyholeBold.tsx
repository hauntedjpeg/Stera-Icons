import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeBoldProps = Omit<IconBaseProps, 'children'>;

const KeyholeBold = memo(
  forwardRef<SVGSVGElement, KeyholeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c3.59 0 6.5 2.91 6.5 6.5 0 1.77-.71 3.38-1.86 4.55l2.35 4.7c.75 1.49-.34 3.25-2.01 3.25H7.02c-1.67 0-2.76-1.76-2.01-3.26l2.35-4.7C6.2 11.89 5.5 10.28 5.5 8.5 5.5 4.91 8.41 2 12 2m0 2C9.51 4 7.5 6.01 7.5 8.5c0 1.43.67 2.7 1.71 3.53.37.3.49.81.28 1.23l-2.7 5.38c-.07.16.05.36.23.36h9.96c.18 0 .3-.2.22-.36l-2.69-5.38c-.2-.42-.1-.93.28-1.23 1.04-.82 1.71-2.1 1.71-3.53C16.5 6.01 14.49 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyholeBold.displayName = 'KeyholeBold';

// Triple export pattern
export { KeyholeBold, KeyholeBold as KeyholeBoldIcon, KeyholeBold as SiKeyholeBold };
export default KeyholeBold;
export type { KeyholeBoldProps };
