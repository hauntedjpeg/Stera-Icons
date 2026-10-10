import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullFillProps = Omit<IconBaseProps, 'children'>;

const FlaskFullFill = memo(
  forwardRef<SVGSVGElement, FlaskFullFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 2c.55 0 1 .45 1 1 0 .52-.4.94-.9 1H15v4.98q0 .77.37 1.44l3.9 7.14c.96 1.77-.06 3.89-1.9 4.35q-.24.06-.53.08l-.2.01H7.36l-.24-.01h-.06l-.18-.03h-.05q-.73-.15-1.3-.57-.24-.14-.4-.38-.21-.23-.36-.5l-.03-.05-.07-.12-.02-.06-.06-.13-.02-.06q-.27-.67-.2-1.42v-.04q.02-.07.03-.16l.02-.07q0-.08.03-.14l.02-.07.01-.06.05-.13v-.02q.08-.21.2-.42l3.9-7.14q.35-.67.36-1.44V4c-.55 0-1-.45-1-1s.45-1 1-1zm-4 6.98q0 1.27-.61 2.4L8.85 14.2l.1.05c.9.38 1.94.29 2.75-.25.86-.58 1.87-.86 2.9-.83l-.99-1.8q-.6-1.11-.61-2.39V4h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlaskFullFill.displayName = 'FlaskFullFill';

// Triple export pattern
export { FlaskFullFill, FlaskFullFill as FlaskFullFillIcon, FlaskFullFill as SiFlaskFullFill };
export default FlaskFullFill;
export type { FlaskFullFillProps };
