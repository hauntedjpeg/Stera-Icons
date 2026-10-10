import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbOnRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnRegularDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbOnRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.33 8.78c.1-.4.52-.64.92-.53l.88.23c.4.1.64.52.53.92s-.52.64-.92.53l-.88-.24c-.4-.1-.64-.51-.53-.91M19.75 8.25c.4-.11.81.13.92.53s-.13.8-.53.91l-.88.24c-.4.1-.81-.13-.92-.53s.13-.81.53-.92zM5.65 4.75c.3-.3.77-.3 1.06 0l.65.65c.3.3.3.77 0 1.06s-.77.3-1.06 0l-.65-.65c-.29-.29-.29-.77 0-1.06M17.29 4.75c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-.65.65c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06zM9.68 2.43c.4-.1.8.13.91.53l.24.88c.1.4-.13.81-.53.92s-.81-.13-.92-.53l-.23-.88c-.11-.4.13-.81.53-.92M13.4 2.96c.11-.4.52-.64.92-.53s.64.52.53.92l-.23.88c-.1.4-.52.64-.92.53s-.64-.52-.53-.92z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 5.78c2.94 0 5.32 2.38 5.32 5.32 0 1.09-.33 2.1-.89 2.94-.76 1.15-1.4 2.1-1.4 3.13v1.24c0 1.02-.58 1.9-1.44 2.31-.2.69-.84 1.18-1.59 1.18s-1.38-.5-1.6-1.18c-.85-.42-1.44-1.3-1.44-2.3v-1.25c0-1.04-.63-1.98-1.4-3.13-.55-.84-.88-1.85-.88-2.94 0-2.94 2.38-5.32 5.32-5.32M10.46 18.4c0 .6.49 1.08 1.08 1.08h.92c.6 0 1.07-.48 1.07-1.08v-1.08h-3.07zM12 7.28c-2.11 0-3.82 1.71-3.82 3.82q.01 1.18.64 2.11c.48.72 1.1 1.61 1.42 2.62h3.52c.32-1 .94-1.9 1.42-2.62.4-.6.64-1.33.64-2.11 0-2.11-1.71-3.82-3.82-3.82" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbOnRegularDuotone.displayName = 'LightbulbOnRegularDuotone';

// Triple export pattern
export { LightbulbOnRegularDuotone, LightbulbOnRegularDuotone as LightbulbOnRegularDuotoneIcon, LightbulbOnRegularDuotone as SiLightbulbOnRegularDuotone };
export default LightbulbOnRegularDuotone;
export type { LightbulbOnRegularDuotoneProps };
