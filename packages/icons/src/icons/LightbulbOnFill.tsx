import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbOnFillProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnFill = memo(
  forwardRef<SVGSVGElement, LightbulbOnFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.03 18.41c0 .96-.52 1.79-1.29 2.23-.18.8-.9 1.39-1.74 1.39-.85 0-1.56-.6-1.74-1.39-.77-.44-1.3-1.27-1.3-2.23v-.95h6.07zM12 5.78c2.94 0 5.32 2.38 5.32 5.32 0 1.09-.33 2.1-.89 2.94q-.61.89-1.01 1.67H8.58q-.4-.78-1.01-1.67c-.56-.84-.89-1.85-.89-2.94 0-2.94 2.38-5.32 5.32-5.32M3.21 8.74c.13-.46.6-.74 1.07-.61l.88.23c.47.13.75.6.62 1.07-.12.47-.6.75-1.07.62l-.88-.23c-.47-.13-.75-.61-.62-1.08M19.72 8.13c.47-.13.95.15 1.07.61.13.47-.15.95-.62 1.08l-.88.23c-.47.13-.95-.15-1.07-.62s.15-.94.62-1.07zM5.57 4.66c.34-.34.9-.34 1.23 0l.65.65c.34.34.34.9 0 1.24s-.9.34-1.24 0l-.64-.65c-.35-.34-.35-.9 0-1.24M17.2 4.66c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-.65.65c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24zM9.64 2.3c.47-.12.95.16 1.08.63l.23.88c.13.47-.15.95-.62 1.07s-.94-.15-1.07-.62l-.23-.88c-.13-.47.15-.95.61-1.07M13.28 2.93c.13-.47.61-.75 1.08-.62.46.12.74.6.62 1.07l-.24.88c-.13.47-.6.75-1.07.62-.47-.12-.75-.6-.62-1.07z" />
    </IconBase>
  ))
);

LightbulbOnFill.displayName = 'LightbulbOnFill';

// Triple export pattern
export { LightbulbOnFill, LightbulbOnFill as LightbulbOnFillIcon, LightbulbOnFill as SiLightbulbOnFill };
export default LightbulbOnFill;
export type { LightbulbOnFillProps };
