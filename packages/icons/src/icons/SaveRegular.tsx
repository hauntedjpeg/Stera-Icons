import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SaveRegularProps = Omit<IconBaseProps, 'children'>;

const SaveRegular = memo(
  forwardRef<SVGSVGElement, SaveRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 5.25c.9 0 1.45 0 1.93.1 1.88.37 3.35 1.84 3.73 3.72.1.48.09 1.04.09 1.93v2.8c0 1.25 0 2.23-.06 3.02-.07.8-.2 1.46-.51 2.06-.5 1-1.3 1.8-2.3 2.3q-.89.43-2.06.5c-.8.07-1.77.07-3.02.07h-1.6c-1.25 0-2.23 0-3.02-.06-.8-.07-1.46-.2-2.06-.51-1-.5-1.8-1.3-2.3-2.3q-.43-.89-.5-2.06c-.07-.8-.07-1.77-.07-3.02V11c0-.9 0-1.45.1-1.93.37-1.88 1.84-3.35 3.72-3.73.48-.1 1.04-.09 1.93-.09.41 0 .75.34.75.75s-.34.75-.75.75c-.96 0-1.34 0-1.63.06-1.3.26-2.3 1.27-2.56 2.56-.06.3-.06.67-.06 1.63v2.8c0 1.27 0 2.18.06 2.9.06.7.17 1.15.35 1.5.36.7.93 1.28 1.64 1.64.36.18.8.3 1.5.35.72.06 1.63.06 2.9.06h1.6c1.27 0 2.18 0 2.9-.06.7-.06 1.14-.17 1.5-.35.7-.36 1.28-.93 1.64-1.64.18-.35.3-.8.35-1.5.06-.72.06-1.63.06-2.9V11c0-.96 0-1.34-.06-1.63-.26-1.3-1.27-2.3-2.56-2.56-.3-.06-.66-.06-1.63-.06-.41 0-.75-.34-.75-.75s.34-.75.75-.75" />
        <path d="M12 1.75c.41 0 .75.34.75.75v10.69l2.72-2.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l2.72 2.72V2.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SaveRegular.displayName = 'SaveRegular';

// Triple export pattern
export { SaveRegular, SaveRegular as SaveRegularIcon, SaveRegular as SiSaveRegular };
export default SaveRegular;
export type { SaveRegularProps };
