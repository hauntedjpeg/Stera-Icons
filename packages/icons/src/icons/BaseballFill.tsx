import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballFillProps = Omit<IconBaseProps, 'children'>;

const BaseballFill = memo(
  forwardRef<SVGSVGElement, BaseballFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.02 5.02a9.88 9.88 0 1 1 13.96 13.96A9.88 9.88 0 0 1 5.02 5.02m14.75 5.96a.88.88 0 0 0-.41 1.7q.42.1.84.16a.88.88 0 0 0 .27-1.72zm-8.15 7.73a.9.9 0 0 0-.65 1.06q.08.35.14.7a.88.88 0 1 0 1.73-.27q-.06-.42-.17-.84a.87.87 0 0 0-1.05-.65m-1.94-3.4a.9.9 0 0 0-.2 1.22q.22.3.4.6a.87.87 0 1 0 1.5-.91q-.22-.37-.48-.71a.9.9 0 0 0-1.22-.2m6.86-5.83a.88.88 0 0 0-1.03 1.42l.7.47a.88.88 0 0 0 .92-1.49zm-8.76 3.15a.88.88 0 0 0-.91 1.49l.6.4a.87.87 0 1 0 1.02-1.42zm5.13-6.05a.9.9 0 0 0-.29 1.2q.23.37.48.71a.88.88 0 0 0 1.41-1.02l-.4-.6a.9.9 0 0 0-1.2-.29M11.9 2.8a.9.9 0 0 0-.73 1q.06.42.17.84a.88.88 0 0 0 1.7-.4q-.09-.36-.14-.71a.9.9 0 0 0-1-.73M3.8 11.16a.87.87 0 0 0-.27 1.72l.7.14a.88.88 0 1 0 .41-1.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballFill.displayName = 'BaseballFill';

// Triple export pattern (lucide-react style)
export { BaseballFill, BaseballFill as BaseballFillIcon, BaseballFill as SiBaseballFill };
export default BaseballFill;
export type { BaseballFillProps };
