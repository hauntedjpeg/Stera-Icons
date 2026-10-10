import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WrenchRegularProps = Omit<IconBaseProps, 'children'>;

const WrenchRegular = memo(
  forwardRef<SVGSVGElement, WrenchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.63 4.33c1.8-1.8 4.31-2.43 6.61-1.9 1.04.24 1.2 1.45.57 2.08l-2.83 2.83.52 2.16 2.16.52 2.83-2.83c.59-.59 1.7-.48 2.03.38l.05.19.09.43c.35 2.18-.3 4.5-1.99 6.18-1.9 1.9-4.61 2.5-7.02 1.78l-4.6 4.6c-1.33 1.33-3.48 1.33-4.8 0-1.33-1.32-1.33-3.47 0-4.8l4.6-4.6c-.71-2.4-.12-5.12 1.78-7.02m5.77-.53c-1.67-.22-3.42.3-4.7 1.59-1.6 1.6-2.03 3.92-1.3 5.9.1.28.04.59-.17.8L4.3 17.02c-.74.74-.73 1.94 0 2.68.74.73 1.94.73 2.68 0l4.93-4.93.08-.07c.2-.15.47-.2.71-.1 2 .73 4.31.3 5.91-1.3 1.28-1.28 1.81-3.03 1.59-4.7l-2.77 2.77q-.3.29-.7.2l-3.03-.71c-.28-.07-.5-.28-.56-.56l-.71-3.02q-.09-.41.2-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

WrenchRegular.displayName = 'WrenchRegular';

// Triple export pattern
export { WrenchRegular, WrenchRegular as WrenchRegularIcon, WrenchRegular as SiWrenchRegular };
export default WrenchRegular;
export type { WrenchRegularProps };
