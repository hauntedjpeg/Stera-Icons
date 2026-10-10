import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballRegularProps = Omit<IconBaseProps, 'children'>;

const BaseballRegular = memo(
  forwardRef<SVGSVGElement, BaseballRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 15.41c.34-.24.8-.17 1.05.17q.25.34.47.7c.22.35.1.82-.25 1.03s-.81.1-1.03-.25l-.4-.6c-.25-.33-.17-.8.16-1.05M15.41 9.75c.25-.33.72-.4 1.05-.17l.3.21.3.2c.36.21.47.68.25 1.03s-.67.46-1.03.25l-.35-.23-.35-.24c-.33-.25-.4-.71-.17-1.05M6.69 12.98c.21-.35.68-.46 1.03-.25l.35.23.35.24c.34.24.4.71.17 1.05-.25.33-.71.4-1.05.17l-.3-.21-.3-.2c-.36-.22-.47-.68-.25-1.03M12.73 7.72c-.21-.35-.1-.82.25-1.03s.81-.1 1.03.25l.4.6c.25.33.17.8-.16 1.05-.34.24-.8.17-1.05-.17z" />
        <path fillRule="evenodd" d="M5.1 5.1c3.81-3.8 9.99-3.8 13.8 0 3.8 3.81 3.8 9.99 0 13.8-3.81 3.8-9.99 3.8-13.8 0-3.8-3.81-3.8-9.99 0-13.8m1.07 1.07c-1.43 1.42-2.23 3.24-2.39 5.1q.42.07.83.17c.4.1.65.5.56.9-.1.41-.5.66-.9.56l-.48-.1c.18 1.84.97 3.63 2.38 5.03 1.4 1.4 3.19 2.2 5.02 2.38l-.1-.47c-.09-.4.16-.8.56-.9s.8.15.9.55q.1.4.17.83c1.86-.16 3.69-.96 5.11-2.39 1.43-1.42 2.22-3.24 2.39-5.11q-.42-.06-.83-.16c-.4-.1-.65-.5-.56-.9.1-.41.5-.66.9-.56l.48.1c-.18-1.84-.97-3.63-2.38-5.03-1.4-1.4-3.19-2.2-5.02-2.38l.1.47c.1.4-.16.8-.56.9s-.8-.15-.9-.55q-.1-.4-.17-.83c-1.86.16-3.69.96-5.11 2.39" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballRegular.displayName = 'BaseballRegular';

// Triple export pattern
export { BaseballRegular, BaseballRegular as BaseballRegularIcon, BaseballRegular as SiBaseballRegular };
export default BaseballRegular;
export type { BaseballRegularProps };
