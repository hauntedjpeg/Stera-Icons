import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothBoldProps = Omit<IconBaseProps, 'children'>;

const BluetoothBold = memo(
  forwardRef<SVGSVGElement, BluetoothBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.55 2.1c.34-.16.75-.13 1.05.1l6 4.5c.25.19.4.49.4.8s-.15.61-.4.8L13.67 12l4.93 3.7c.25.19.4.49.4.8s-.15.61-.4.8l-6 4.5c-.3.23-.7.26-1.05.1-.34-.17-.55-.52-.55-.9v-7l-4.4 3.3c-.44.33-1.07.24-1.4-.2s-.24-1.07.2-1.4l4.93-3.7L5.4 8.3c-.44-.33-.53-.96-.2-1.4s.96-.53 1.4-.2L11 10V3c0-.38.21-.73.55-.9M13 19l3.33-2.5L13 14zm0-9 3.33-2.5L13 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothBold.displayName = 'BluetoothBold';

// Triple export pattern
export { BluetoothBold, BluetoothBold as BluetoothBoldIcon, BluetoothBold as SiBluetoothBold };
export default BluetoothBold;
export type { BluetoothBoldProps };
