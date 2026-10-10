import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyVBoldProps = Omit<IconBaseProps, 'children'>;

const KeyVBold = memo(
  forwardRef<SVGSVGElement, KeyVBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4c.83 0 1.5.67 1.5 1.5S12.83 7 12 7s-1.5-.67-1.5-1.5S11.17 4 12 4" />
        <path fillRule="evenodd" d="M12 1c3.31 0 6 2.69 6 6 0 2.22-1.2 4.16-3 5.2v1.89l1.2 1.2c.21.2.32.5.3.78s-.17.56-.4.73l-1.08.8.69.7c.39.38.39 1.02 0 1.4l-3 3c-.4.4-1.03.4-1.42 0l-2-2q-.28-.28-.29-.7v-7.8C7.2 11.16 6 9.22 6 7c0-3.31 2.69-6 6-6m0 2C9.8 3 8 4.8 8 7c0 1.64.99 3.05 2.4 3.67.36.16.6.52.6.91v8l1 1L13.59 19l-.8-.8q-.3-.32-.29-.77c.02-.29.17-.56.4-.73l1.08-.8-.69-.7q-.28-.28-.29-.7v-2.92c0-.4.24-.75.6-.91C15.01 10.05 16 8.64 16 7c0-2.2-1.8-4-4-4" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyVBold.displayName = 'KeyVBold';

// Triple export pattern
export { KeyVBold, KeyVBold as KeyVBoldIcon, KeyVBold as SiKeyVBold };
export default KeyVBold;
export type { KeyVBoldProps };
