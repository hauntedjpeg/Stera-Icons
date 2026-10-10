import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BluetoothRegularDuotone = memo(
  forwardRef<SVGSVGElement, BluetoothRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.4 7.55c.25-.33.72-.4 1.05-.15l4.8 3.6v3l-4.8 3.6c-.33.25-.8.18-1.05-.15s-.18-.8.15-1.05l5.2-3.9-5.2-3.9c-.33-.25-.4-.72-.15-1.05" opacity={.4} />
        <path fillRule="evenodd" d="M11.67 2.33c.25-.13.55-.1.78.07l6 4.5q.3.23.3.6 0 .38-.3.6l-5.2 3.9 5.2 3.9q.3.23.3.6 0 .38-.3.6l-6 4.5c-.23.17-.53.2-.79.07-.25-.13-.41-.39-.41-.67V3c0-.28.16-.54.41-.67m1.08 17.17 4-3-4-3zm0-9 4-3-4-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothRegularDuotone.displayName = 'BluetoothRegularDuotone';

// Triple export pattern
export { BluetoothRegularDuotone, BluetoothRegularDuotone as BluetoothRegularDuotoneIcon, BluetoothRegularDuotone as SiBluetoothRegularDuotone };
export default BluetoothRegularDuotone;
export type { BluetoothRegularDuotoneProps };
