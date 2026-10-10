import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const KeyholeFillDuotone = memo(
  forwardRef<SVGSVGElement, KeyholeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88c2.55 0 4.63 2.07 4.63 4.62 0 1.47-.7 2.78-1.76 3.63-.33.26-.43.7-.24 1.08l2.68 5.37c.13.25-.05.54-.33.55H7.02c-.28 0-.46-.3-.33-.55l2.68-5.37c.19-.37.09-.82-.24-1.08-1.07-.85-1.75-2.16-1.75-3.63 0-2.55 2.07-4.62 4.62-4.62" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c3.52 0 6.38 2.85 6.38 6.37 0 1.77-.73 3.37-1.89 4.52l2.39 4.78c.7 1.41-.32 3.07-1.9 3.07H7.02c-1.58 0-2.6-1.66-1.9-3.07l2.39-4.78c-1.16-1.15-1.88-2.75-1.88-4.52 0-3.52 2.85-6.37 6.37-6.37m0 1.75c-2.55 0-4.62 2.07-4.62 4.62 0 1.47.68 2.78 1.75 3.63.33.26.43.7.24 1.08L6.7 18.58c-.13.25.05.55.33.55h9.96c.28 0 .46-.3.33-.55l-2.68-5.37c-.19-.37-.09-.82.24-1.08 1.07-.85 1.76-2.16 1.76-3.63 0-2.55-2.08-4.62-4.63-4.62" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyholeFillDuotone.displayName = 'KeyholeFillDuotone';

// Triple export pattern
export { KeyholeFillDuotone, KeyholeFillDuotone as KeyholeFillDuotoneIcon, KeyholeFillDuotone as SiKeyholeFillDuotone };
export default KeyholeFillDuotone;
export type { KeyholeFillDuotoneProps };
