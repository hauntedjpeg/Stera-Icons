import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BluetoothRegularProps = Omit<IconBaseProps, 'children'>;

const BluetoothRegular = memo(
  forwardRef<SVGSVGElement, BluetoothRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.67 2.33c.25-.13.55-.1.78.07l6 4.5q.3.22.3.6t-.3.6l-5.2 3.9 5.2 3.9q.3.23.3.6 0 .38-.3.6l-6 4.5c-.23.17-.53.2-.78.07-.26-.13-.42-.39-.42-.67v-7.5l-4.8 3.6c-.33.25-.8.18-1.05-.15s-.18-.8.15-1.05l5.2-3.9-5.2-3.9c-.33-.25-.4-.72-.15-1.05s.72-.4 1.05-.15l4.8 3.6V3c0-.28.16-.54.42-.67m1.08 17.17 4-3-4-3zm0-9 4-3-4-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

BluetoothRegular.displayName = 'BluetoothRegular';

// Triple export pattern
export { BluetoothRegular, BluetoothRegular as BluetoothRegularIcon, BluetoothRegular as SiBluetoothRegular };
export default BluetoothRegular;
export type { BluetoothRegularProps };
