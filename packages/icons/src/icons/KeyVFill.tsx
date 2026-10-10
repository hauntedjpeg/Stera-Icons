import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyVFillProps = Omit<IconBaseProps, 'children'>;

const KeyVFill = memo(
  forwardRef<SVGSVGElement, KeyVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.9 1.4c3.03 0 5.5 2.46 5.5 5.5 0 2.13-1.22 3.98-3 4.9v2.39l1.76 1.76-.46.35-1.54 1.15 1.44 1.45-3.7 3.7-2.5-2.5v-8.3c-1.78-.92-3-2.77-3-4.9 0-3.04 2.46-5.5 5.5-5.5m0 2.5c-.83 0-1.5.67-1.5 1.5 0 .82.67 1.5 1.5 1.5.82 0 1.5-.68 1.5-1.5 0-.83-.68-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyVFill.displayName = 'KeyVFill';

// Triple export pattern
export { KeyVFill, KeyVFill as KeyVFillIcon, KeyVFill as SiKeyVFill };
export default KeyVFill;
export type { KeyVFillProps };
