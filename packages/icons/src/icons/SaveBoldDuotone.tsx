import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SaveBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SaveBoldDuotone = memo(
  forwardRef<SVGSVGElement, SaveBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 5c.88 0 1.47 0 1.98.1 1.98.39 3.53 1.94 3.92 3.92.1.51.1 1.1.1 1.98v2.8q.02 1.85-.06 3.04c-.07.8-.21 1.51-.54 2.16-.53 1.03-1.37 1.87-2.4 2.4-.65.33-1.35.47-2.16.54q-1.19.08-3.04.06h-1.6q-1.85.02-3.04-.06c-.8-.07-1.51-.21-2.16-.54-1.03-.53-1.87-1.37-2.4-2.4-.33-.65-.47-1.35-.54-2.16Q2.98 15.65 3 13.8V11c0-.88 0-1.47.1-1.98.39-1.98 1.94-3.53 3.92-3.92C7.53 5 8.12 5 9 5c.55 0 1 .45 1 1s-.45 1-1 1c-.98 0-1.32 0-1.58.06-1.2.23-2.13 1.17-2.36 2.36C5 9.68 5 10.02 5 11v2.8c0 1.28 0 2.17.06 2.87s.16 1.1.32 1.42c.34.66.87 1.2 1.53 1.53.32.16.73.27 1.42.32.7.06 1.6.06 2.87.06h1.6c1.28 0 2.17 0 2.87-.06s1.1-.16 1.42-.32c.66-.34 1.2-.87 1.53-1.53.16-.32.27-.73.32-1.42.06-.7.06-1.6.06-2.87V11c0-.98 0-1.32-.06-1.58-.23-1.2-1.16-2.13-2.36-2.36C16.33 7 15.99 7 15 7c-.55 0-1-.45-1-1s.45-1 1-1" opacity={.4} />
        <path d="M12 1.5c.55 0 1 .45 1 1v10.09l2.3-2.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-4 4c-.38.39-1.02.39-1.4 0l-4-4c-.4-.4-.4-1.03 0-1.42.38-.39 1.02-.39 1.4 0l2.3 2.3V2.5c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

SaveBoldDuotone.displayName = 'SaveBoldDuotone';

// Triple export pattern
export { SaveBoldDuotone, SaveBoldDuotone as SaveBoldDuotoneIcon, SaveBoldDuotone as SiSaveBoldDuotone };
export default SaveBoldDuotone;
export type { SaveBoldDuotoneProps };
