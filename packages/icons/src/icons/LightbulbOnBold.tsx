import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbOnBoldProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnBold = memo(
  forwardRef<SVGSVGElement, LightbulbOnBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 5.38c3.08 0 5.57 2.49 5.57 5.57 0 1.13-.34 2.2-.93 3.08-.78 1.17-1.36 2.04-1.36 2.98v1.25c0 1.08-.6 2.01-1.49 2.49-.27.73-.97 1.25-1.79 1.25s-1.52-.52-1.8-1.25c-.88-.48-1.49-1.41-1.49-2.5v-1.24c0-.94-.58-1.82-1.35-2.98-.59-.89-.93-1.95-.93-3.08 0-3.08 2.5-5.57 5.57-5.57m-1.29 12.88c0 .45.37.83.83.83h.92c.45 0 .82-.37.82-.83v-.83h-2.57zM12 7.38c-1.97 0-3.57 1.6-3.57 3.57q.02 1.1.6 1.97c.44.67 1.04 1.52 1.4 2.51h3.15c.35-.99.95-1.84 1.4-2.51q.57-.86.59-1.97c0-1.98-1.6-3.57-3.57-3.57" clipRule="evenodd" />
        <path d="M3.09 8.56c.14-.53.69-.85 1.22-.7l.89.23c.53.14.85.69.7 1.22-.14.54-.69.85-1.22.7l-.88-.23c-.54-.14-.85-.69-.71-1.22M19.69 7.85c.53-.14 1.08.18 1.22.7.14.54-.17 1.09-.7 1.23l-.89.24c-.53.14-1.08-.17-1.22-.7-.15-.54.17-1.09.7-1.23zM5.48 4.42c.39-.39 1.02-.39 1.41 0l.65.65c.39.39.39 1.02 0 1.41-.4.4-1.03.4-1.42 0l-.64-.64c-.4-.4-.4-1.03 0-1.42M17.11 4.42c.4-.39 1.02-.39 1.42 0 .39.4.39 1.03 0 1.42l-.65.64c-.4.4-1.02.4-1.42 0-.39-.39-.39-1.02 0-1.41zM9.61 2.03c.53-.14 1.08.18 1.23.71l.23.88c.14.54-.17 1.09-.7 1.23-.54.14-1.09-.18-1.23-.7l-.24-.9c-.14-.52.18-1.07.71-1.22M13.16 2.74c.15-.53.7-.85 1.23-.7.53.14.85.69.7 1.22l-.23.88c-.14.53-.7.85-1.23.7-.53-.13-.85-.68-.7-1.22z" />
    </IconBase>
  ))
);

LightbulbOnBold.displayName = 'LightbulbOnBold';

// Triple export pattern
export { LightbulbOnBold, LightbulbOnBold as LightbulbOnBoldIcon, LightbulbOnBold as SiLightbulbOnBold };
export default LightbulbOnBold;
export type { LightbulbOnBoldProps };
