import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToolsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToolsRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToolsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m8.84 12.85-4.61 4.6c-.64.64-.64 1.68 0 2.32s1.68.64 2.32 0l4.6-4.6.82.82q-.04.26-.06.54l-4.3 4.3c-1.23 1.23-3.22 1.23-4.44 0-1.23-1.22-1.23-3.21 0-4.44l4.3-4.3q.28-.01.54-.06zM19.89 2.3c.27-.1.58-.04.8.17l.84.84c.24.25.29.62.11.92l-1.26 2.11q-.2.3-.55.36-.36.04-.63-.22l-.31-.31-4.35 4.35-1.06-1.06 4.35-4.35-.31-.31q-.26-.27-.22-.63t.36-.55l2.11-1.26z" opacity={0.4} />
        <path fillRule="evenodd" d="M5.9 2.42c1.64-.44 3.47-.02 4.76 1.27 1.18 1.18 1.63 2.8 1.37 4.32l3.96 3.96c1.52-.26 3.14.2 4.32 1.37 1.29 1.3 1.71 3.12 1.27 4.76q-.12.4-.53.53c-.26.07-.53 0-.72-.2L19.1 17.2h-1.9v1.9l1.24 1.23c.19.19.26.46.19.72q-.12.4-.53.53c-1.64.44-3.47.02-4.76-1.27-1.18-1.18-1.63-2.8-1.37-4.32l-3.96-3.96c-1.52.26-3.14-.2-4.32-1.37C2.4 9.36 1.98 7.54 2.42 5.9l.03-.1q.14-.32.5-.43c.26-.07.53 0 .72.2L4.9 6.78h1.9V4.9L5.56 3.67c-.19-.19-.26-.46-.19-.72q.12-.4.53-.53m2.18 1.64q.21.22.21.53v2.95c0 .42-.33.75-.74.75H4.59q-.31 0-.53-.21l-.25-.25c.13.65.44 1.27.94 1.77.9.9 2.17 1.2 3.31.89l.1-.02q.36-.05.63.21l4.53 4.53c.19.2.26.47.2.73-.31 1.14-.01 2.41.88 3.3.5.51 1.12.82 1.77.95l-.25-.25q-.21-.22-.21-.53v-2.96c0-.4.33-.74.75-.74h2.95l.14.01q.23.05.39.2l.25.25c-.13-.65-.44-1.27-.94-1.77-.9-.9-2.17-1.2-3.31-.89-.26.07-.54 0-.73-.19l-4.53-4.53c-.19-.2-.26-.47-.2-.73.31-1.14.01-2.41-.88-3.3-.5-.51-1.12-.82-1.77-.95z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolsRegularDuotone.displayName = 'ToolsRegularDuotone';

// Triple export pattern
export { ToolsRegularDuotone, ToolsRegularDuotone as ToolsRegularDuotoneIcon, ToolsRegularDuotone as SiToolsRegularDuotone };
export default ToolsRegularDuotone;
export type { ToolsRegularDuotoneProps };
