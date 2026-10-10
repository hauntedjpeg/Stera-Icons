import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyholeRegularDuotone = memo(
  forwardRef<SVGSVGElement, KeyholeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.77 17.86c.66 1.33-.3 2.9-1.8 2.9H7.03c-1.48 0-2.45-1.57-1.79-2.9L7.66 13q.22.22.47.4c.32.26.8.2 1.05-.12l.08-.13-2.69 5.38c-.16.33.08.72.45.72h9.96c.37 0 .61-.39.44-.72l-2.68-5.38.08.13c.26.33.73.38 1.05.13l.47-.41z" opacity={.4} />
        <path d="M12 2.25c3.45 0 6.25 2.8 6.25 6.25 0 1.99-.93 3.76-2.38 4.9-.32.26-.8.2-1.05-.12-.26-.32-.2-.8.12-1.05 1.1-.87 1.81-2.22 1.81-3.73 0-2.62-2.13-4.75-4.75-4.75S7.25 5.88 7.25 8.5c0 1.51.7 2.86 1.8 3.73.33.26.39.73.13 1.05s-.73.38-1.05.13c-1.45-1.15-2.38-2.92-2.38-4.91 0-3.45 2.8-6.25 6.25-6.25" />
    </IconBase>
  ))
);

KeyholeRegularDuotone.displayName = 'KeyholeRegularDuotone';

// Triple export pattern
export { KeyholeRegularDuotone, KeyholeRegularDuotone as KeyholeRegularDuotoneIcon, KeyholeRegularDuotone as SiKeyholeRegularDuotone };
export default KeyholeRegularDuotone;
export type { KeyholeRegularDuotoneProps };
