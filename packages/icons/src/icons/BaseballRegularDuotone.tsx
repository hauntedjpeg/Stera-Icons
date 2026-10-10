import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballRegularDuotone = memo(
  forwardRef<SVGSVGElement, BaseballRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.1 5.1c3.81-3.8 9.99-3.8 13.8 0 3.8 3.81 3.8 9.99 0 13.8-3.81 3.8-9.99 3.8-13.8 0-3.8-3.81-3.8-9.99 0-13.8m1.07 1.07c-1.43 1.42-2.23 3.24-2.39 5.1-.4-.06-.79.22-.85.63-.07.41.21.8.62.86l.24.04c.18 1.84.97 3.63 2.38 5.03 1.4 1.4 3.19 2.2 5.02 2.38l.05.24c.06.41.45.69.86.63.4-.07.68-.45.62-.86 1.86-.16 3.69-.96 5.11-2.39 1.43-1.42 2.22-3.24 2.39-5.11.4.06.79-.21.86-.62s-.22-.8-.63-.86l-.24-.04c-.18-1.84-.97-3.63-2.38-5.03-1.4-1.4-3.19-2.2-5.02-2.38l-.05-.24c-.06-.41-.45-.69-.85-.63-.41.07-.7.45-.63.86-1.86.16-3.69.96-5.11 2.39" clipRule="evenodd" opacity={.4} />
        <path d="M18.83 11.65c.1-.4.5-.65.9-.55l.72.14c.41.06.69.45.62.86s-.44.69-.85.62q-.42-.07-.83-.16c-.4-.1-.65-.5-.56-.9M11.1 19.74c-.1-.4.15-.8.55-.9s.8.15.9.55q.1.4.17.83c.06.4-.22.8-.63.86-.4.06-.79-.22-.85-.63zM9.75 15.41c.34-.24.8-.17 1.05.17q.25.34.47.7c.21.36.1.82-.25 1.03s-.81.1-1.03-.25l-.4-.6c-.25-.33-.17-.8.16-1.05M15.41 9.75c.25-.33.72-.4 1.05-.17l.3.21.3.2c.36.21.47.68.25 1.03s-.67.46-1.03.25l-.35-.23-.35-.24c-.34-.24-.4-.71-.17-1.05M6.69 12.98c.21-.35.67-.46 1.03-.25l.35.23.35.24c.33.25.4.71.17 1.05-.25.33-.72.41-1.05.17l-.3-.21-.3-.2c-.36-.21-.47-.68-.25-1.03M12.73 7.72c-.21-.35-.1-.82.25-1.03s.81-.1 1.03.25l.4.6c.25.33.17.8-.16 1.05-.34.24-.8.17-1.05-.17q-.25-.34-.47-.7M11.28 3.78c-.06-.4.22-.79.63-.86.4-.06.79.22.85.63l.14.71c.1.4-.15.8-.55.9s-.8-.15-.9-.55q-.1-.4-.17-.83M2.93 11.9c.06-.4.44-.69.85-.62q.42.06.83.16c.4.1.65.5.56.9-.1.41-.5.66-.9.56l-.72-.14c-.41-.06-.69-.45-.62-.86" />
    </IconBase>
  ))
);

BaseballRegularDuotone.displayName = 'BaseballRegularDuotone';

// Triple export pattern
export { BaseballRegularDuotone, BaseballRegularDuotone as BaseballRegularDuotoneIcon, BaseballRegularDuotone as SiBaseballRegularDuotone };
export default BaseballRegularDuotone;
export type { BaseballRegularDuotoneProps };
