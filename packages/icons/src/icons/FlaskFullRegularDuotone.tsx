import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskFullRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskFullRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlaskFullRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.75 8.98q0 .82.4 1.56l3.9 7.14c1 1.84-.33 4.07-2.42 4.07H7.37c-2.09 0-3.41-2.23-2.41-4.07l3.9-7.14q.38-.74.39-1.56V3.75h1.5v5.23q0 1.22-.58 2.27l-3.9 7.15c-.45.83.15 1.85 1.1 1.85h9.26c.95 0 1.55-1.02 1.1-1.85l-3.9-7.15q-.58-1.06-.58-2.27V3.75h1.5z" opacity={.4} />
        <path d="M11.84 14.2c.94-.62 2.08-.88 3.2-.74l.89 1.64-1.06-.15c-.77-.1-1.55.07-2.2.5-1.3.87-2.96 1.03-4.4.4l-.5-.2.73-1.33.35.16c.98.42 2.1.31 3-.28M15 2.25c.41 0 .75.34.75.75s-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

FlaskFullRegularDuotone.displayName = 'FlaskFullRegularDuotone';

// Triple export pattern
export { FlaskFullRegularDuotone, FlaskFullRegularDuotone as FlaskFullRegularDuotoneIcon, FlaskFullRegularDuotone as SiFlaskFullRegularDuotone };
export default FlaskFullRegularDuotone;
export type { FlaskFullRegularDuotoneProps };
