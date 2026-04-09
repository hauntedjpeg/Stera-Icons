import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballFillDuotone = memo(
  forwardRef<SVGSVGElement, BaseballFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M5.02 5.02a9.88 9.88 0 1 1 13.96 13.96A9.88 9.88 0 0 1 5.02 5.02m14.75 5.96a.88.88 0 0 0-.41 1.7q.42.1.84.16a.88.88 0 0 0 .27-1.72zm-8.15 7.73a.9.9 0 0 0-.65 1.06q.08.35.14.7a.88.88 0 0 0 1.73-.27q-.06-.42-.17-.84a.9.9 0 0 0-1.05-.65m4.92-9.23a.88.88 0 0 0-1.03 1.42l.7.47a.88.88 0 0 0 .92-1.49zm-6.86 5.83a.9.9 0 0 0-.2 1.22q.22.3.4.6a.88.88 0 0 0 1.5-.91q-.22-.37-.48-.71a.9.9 0 0 0-1.22-.2m-1.9-2.68a.88.88 0 0 0-.91 1.49l.6.4a.87.87 0 1 0 1.02-1.42zm5.13-6.05a.9.9 0 0 0-.29 1.2q.23.37.48.71a.88.88 0 0 0 1.41-1.02l-.4-.6a.9.9 0 0 0-1.2-.29M11.9 2.8a.9.9 0 0 0-.73 1q.06.42.17.84a.88.88 0 0 0 1.7-.4q-.09-.36-.14-.71a.9.9 0 0 0-1-.73M3.8 11.16a.87.87 0 0 0-.27 1.72l.7.14a.88.88 0 0 0 .41-1.7q-.42-.1-.84-.16" clipRule="evenodd" opacity={.4} />
        <path d="M18.71 11.62a.9.9 0 0 1 1.06-.64l.7.14a.88.88 0 0 1-.27 1.72q-.42-.06-.84-.16a.87.87 0 0 1-.65-1.06M10.97 19.77a.88.88 0 0 1 1.7-.41q.1.42.17.84a.88.88 0 0 1-1.73.27zM15.31 9.68a.9.9 0 0 1 1.23-.2l.6.4a.88.88 0 0 1-.92 1.5l-.71-.48a.87.87 0 0 1-.2-1.22M9.48 16.53a.88.88 0 0 1 1.42-1.02q.25.34.48.7a.88.88 0 0 1-1.5.92q-.18-.3-.4-.6M6.58 12.92a.9.9 0 0 1 1.2-.3l.71.48a.88.88 0 0 1-1.02 1.42l-.6-.4a.9.9 0 0 1-.29-1.2M12.62 7.78a.88.88 0 0 1 1.5-.91q.18.3.4.6a.88.88 0 0 1-1.42 1.02q-.25-.34-.48-.7M11.16 3.8a.88.88 0 0 1 1.73-.27q.05.35.14.7a.88.88 0 0 1-1.7.41q-.1-.42-.17-.84M2.8 11.88a.87.87 0 0 1 1-.72q.42.06.84.16a.88.88 0 0 1-.4 1.7l-.71-.14a.87.87 0 0 1-.73-1" />
    </IconBase>
  ))
);

BaseballFillDuotone.displayName = 'BaseballFillDuotone';

// Triple export pattern (lucide-react style)
export { BaseballFillDuotone, BaseballFillDuotone as BaseballFillDuotoneIcon, BaseballFillDuotone as SiBaseballFillDuotone };
export default BaseballFillDuotone;
export type { BaseballFillDuotoneProps };
