import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballBoldProps = Omit<IconBaseProps, 'children'>;

const BaseballBold = memo(
  forwardRef<SVGSVGElement, BaseballBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.6 15.21c.45-.32 1.08-.22 1.4.22l.48.72c.29.47.14 1.09-.33 1.38s-1.09.14-1.37-.34q-.2-.3-.4-.58c-.32-.45-.22-1.07.23-1.4M15.21 9.6c.33-.44.95-.54 1.4-.22l.29.2.3.2c.47.28.62.9.33 1.37-.3.47-.9.62-1.38.33l-.36-.23-.36-.25c-.44-.32-.54-.95-.22-1.4M6.47 12.85c.3-.47.9-.62 1.38-.33l.36.23.36.25c.44.32.54.95.22 1.4s-.95.54-1.4.22l-.29-.2-.3-.2c-.47-.28-.62-.9-.33-1.37M12.52 7.85c-.29-.47-.14-1.09.33-1.37.47-.3 1.09-.15 1.37.33q.2.3.4.58c.32.45.22 1.08-.23 1.4-.44.32-1.07.23-1.4-.22z" />
        <path fillRule="evenodd" d="M4.93 4.93c3.9-3.9 10.24-3.9 14.14 0s3.9 10.24 0 14.14-10.24 3.9-14.14 0-3.9-10.24 0-14.14m1.41 1.41c-1.32 1.33-2.08 3-2.28 4.73l.61.13c.54.13.87.67.74 1.2-.13.54-.67.87-1.2.75l-.13-.03c.23 1.66.99 3.26 2.26 4.54 1.28 1.27 2.88 2.03 4.54 2.26l-.03-.12c-.13-.54.2-1.08.74-1.2.54-.14 1.08.2 1.2.73q.08.3.13.61c1.73-.2 3.41-.96 4.74-2.28 1.32-1.33 2.08-3 2.28-4.73l-.61-.13c-.54-.13-.87-.67-.74-1.2.13-.54.67-.87 1.2-.74l.13.02c-.23-1.66-.99-3.26-2.26-4.54-1.28-1.27-2.88-2.03-4.54-2.26l.03.12c.13.54-.2 1.08-.74 1.2-.54.14-1.08-.2-1.2-.73q-.09-.3-.13-.61c-1.73.2-3.41.96-4.74 2.28" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballBold.displayName = 'BaseballBold';

// Triple export pattern
export { BaseballBold, BaseballBold as BaseballBoldIcon, BaseballBold as SiBaseballBold };
export default BaseballBold;
export type { BaseballBoldProps };
